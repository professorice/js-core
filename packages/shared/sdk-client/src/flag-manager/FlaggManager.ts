import { Context, LDLogger } from "@launchdarkly/js-sdk-common";

import FlagUpdater from "./FlagUpdater";

class FlagManager {

    private flagStore = new FlagStore()
    private flagUpdater : FlagUpdater

    constructor(sdkKey: string, maxCachedContexts: number, logger: LDLogger) {
        this.flagUpdater = new FlagUpdater(this.flagStore, logger)
        // TODO: flag persistence
    }

    get(key: string) : ItemDescriptor | undefined {
        return this.flagStore.get(key)
    }

    getAll() : Map<string, ItemDescriptor> {
        return this.flagStore.getAll()
    }

    init(context: Context, newFlags: Map<string, ItemDescriptor>) {
        // TODO: update flag persistence
    }

    async upsert(context: Context, key: string, item: ItemDescriptor) : Promise<boolean> {
        // TODO: upsert flag persistence
        return true
    }

    async loadCached(context: Context) {
        // TODO: load cached on persistence
        return true
    }

}