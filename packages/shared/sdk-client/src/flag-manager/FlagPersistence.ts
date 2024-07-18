import { Context, Crypto as LDCrypto, LDLogger, Platform } from "@launchdarkly/js-sdk-common";
import FlagUpdater from "./FlagUpdater";
import { LDEvaluationResult } from "../types";

const CONTEXT_INDEX_KEY = 'ContextIndex'

class FlagPersistence {

    private contextIndex: ContextIndex | undefined
    private environmentNamespace: string

    constructor(
        private readonly platform: Platform,
        environmentNamespace: string,
        private readonly maxCachedContexts: number,
        private readonly flagStore: FlagStore,
        private readonly flagUpdater: FlagUpdater,
        private readonly logger: LDLogger,
        private readonly timeStamper: () => number = () => Date.now()
    ) { 
        this.environmentNamespace = environmentNamespace
    }

    async init(context: Context, newFlags: Map<string, ItemDescriptor>): Promise<void> {
        this.flagUpdater.init(context, newFlags)
        return this.storeCache(context)
    }

    private async loadIndex(): Promise<ContextIndex> {
        if (this.contextIndex !== undefined) {
            return this.contextIndex
        }

        // TODO: this data fetch needs to be keyed by an environment key
        const json = await this.platform.storage?.get()
        if (json === null || json === undefined) {
            this.contextIndex = new ContextIndex()
            return this.contextIndex
        }

        try {
            this.logger.debug('Loaded context index from persistence')
            this.contextIndex = ContextIndex.fromJson(json)
        } catch (e) {
            this.logger.warn('Could not load index from persistent storage: ${e.message}')
            this.contextIndex = new ContextIndex()
        }
        return this.contextIndex
    }

    private async storeCache(context: Context): Promise<void> {
        const index = await this.loadIndex()

        const contextPersistenceKey = FlagPersistence.encodePersistenceKey(this.platform.crypto, context.canonicalKey)
        index.notice(contextPersistenceKey, this.timeStamper())

        const pruned = index.prune(this.maxCachedContexts)
        pruned.forEach(async (it) => {
            await this.platform.storage?.clear(it.id)
        })

        await this.platform.storage?.set(CONTEXT_INDEX_KEY, index.toJson())

        const allFlags = this.flagStore.getAll()
        const nonTombstones = new Map<string, LDEvaluationResult>()
        
        allFlags.forEach((item: ItemDescriptor, key: string) => {
            if (item.flag !== null && item.flag !== undefined) {
                nonTombstones.set(key, item.flag)
            }
        });

        const jsonAll = JSON.stringify(nonTombstones)
        await this.platform.storage?.set(TODO_ENV_CONTEXT_KEY, jsonAll)
    }

    private static encodePersistenceKey(crypto: LDCrypto, input: string): string {
        // TODO: verify this achieves utf8 encoding
        return crypto.createHash('sha256').update(input).digest('hex')
    }
}