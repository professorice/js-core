import { LDEvaluationReason, LDFlagValue } from '@launchdarkly/js-sdk-common';

export type StorageNamespace = 'anonymous' | 'context' | 'index';

export interface LDEvaluationResult {
  version: number;
  flagVersion: number;
  value: LDFlagValue;
  variation: number;
  trackEvents: boolean;
  trackReason?: boolean;
  reason?: LDEvaluationReason;
  debugEventsUntilDate?: number;
  deleted?: boolean;
}

export interface PatchFlag extends LDEvaluationResult {
  key: string;
}

export type DeleteFlag = Pick<PatchFlag, 'key' | 'version'>;

export type LDEvaluationResultsMap = {
  [k: string]: LDEvaluationResult;
};
