/* eslint-disable max-classes-per-file */
// Disabling max classes per file as these are tag classes without
// logic implementation.

/**
 * When execution is sequential this enum is used to control if execution
 * should be in a fixed or random order.
 */
export enum LDExecutionOrdering {
  Fixed,
  Random,
}

/**
 * Tag used to determine if execution should be serial or concurrent.
 * Callers should not need to use this directly.
 */
export enum LDExecution {
  /**
   * Execution will be serial. One read method will be executed fully before
   * the other read method.
   */
  Serial,
  /**
   * Execution will be concurrent. The execution of the read methods will be
   * started and then resolved concurrently.
   */
  Concurrent,
}

/**
 * Migration methods may return an LDMethodResult.
 * The implementation includes methods for creating results conveniently.
 *
 * An implementation may also throw an exception to represent an error.
 */
export type LDMethodResult<TResult> =
  | {
      success: true;
      result: TResult;
    }
  | {
      success: false;
      error: any;
    };

/**
 * Configuration class for configuring serial execution of a migration.
 */
export class LDSerialExecution {
  readonly type: LDExecution = LDExecution.Serial;

  constructor(public readonly ordering: LDExecutionOrdering) {}
}

/**
 * Configuration class for configuring concurrent execution of a migration.
 */
export class LDConcurrentExecution {
  readonly type: LDExecution = LDExecution.Concurrent;
}

/**
 * Configuration for a migration.
 */
export interface LDMigrationOptions<
  TMigrationRead,
  TMigrationWrite,
  TMigrationReadInput,
  TMigrationWriteInput,
> {
  /**
   * Configure how the migration should execute. If omitted the execution will
   * be concurrent.
   */
  execution?: LDSerialExecution | LDConcurrentExecution;

  /**
   * Configure the latency tracking for the migration.
   *
   * Defaults to {@link true}.
   */
  latencyTracking?: boolean;

  /**
   * Configure the error tracking for the migration.
   *
   * Defaults to {@link true}.
   */
  errorTracking?: boolean;

  /**
   * TKTK
   */
  readNew: (payload?: TMigrationReadInput) => Promise<LDMethodResult<TMigrationRead>>;

  /**
   * TKTK
   */
  writeNew: (payload?: TMigrationWriteInput) => Promise<LDMethodResult<TMigrationWrite>>;

  /**
   * TKTK
   */
  readOld: (payload?: TMigrationReadInput) => Promise<LDMethodResult<TMigrationRead>>;

  /**
   * TKTK
   */
  writeOld: (payload?: TMigrationWriteInput) => Promise<LDMethodResult<TMigrationWrite>>;

  /**
   * TKTK
   */
  check?: (a: TMigrationRead, b: TMigrationRead) => boolean;
}