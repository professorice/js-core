import { LDContext } from '@launchdarkly/js-server-sdk-common';

import { LDFeedbackKind } from '../src/api/metrics';
import { LDAIConfigTrackerImpl } from '../src/LDAIConfigTrackerImpl';
import { LDClientMin } from '../src/LDClientMin';

const mockTrack = jest.fn();
const mockVariation = jest.fn();
const mockLdClient: LDClientMin = {
  track: mockTrack,
  variation: mockVariation,
};

const testContext: LDContext = { kind: 'user', key: 'test-user' };
const configKey = 'test-config';
const versionKey = 'v1';

beforeEach(() => {
  jest.clearAllMocks();
});

it('tracks duration', () => {
  const tracker = new LDAIConfigTrackerImpl(mockLdClient, configKey, versionKey, testContext);
  tracker.trackDuration(1000);

  expect(mockTrack).toHaveBeenCalledWith(
    '$ld:ai:duration:total',
    testContext,
    { configKey, versionKey },
    1000,
  );
});

it('tracks duration of async function', async () => {
  const tracker = new LDAIConfigTrackerImpl(mockLdClient, configKey, versionKey, testContext);
  jest.spyOn(global.Date, 'now').mockReturnValueOnce(1000).mockReturnValueOnce(2000);

  const result = await tracker.trackDurationOf(async () => 'test-result');

  expect(result).toBe('test-result');
  expect(mockTrack).toHaveBeenCalledWith(
    '$ld:ai:duration:total',
    testContext,
    { configKey, versionKey },
    1000,
  );
});

it('tracks positive feedback', () => {
  const tracker = new LDAIConfigTrackerImpl(mockLdClient, configKey, versionKey, testContext);
  tracker.trackFeedback({ kind: LDFeedbackKind.Positive });

  expect(mockTrack).toHaveBeenCalledWith(
    '$ld:ai:feedback:user:positive',
    testContext,
    { configKey, versionKey },
    1,
  );
});

it('tracks negative feedback', () => {
  const tracker = new LDAIConfigTrackerImpl(mockLdClient, configKey, versionKey, testContext);
  tracker.trackFeedback({ kind: LDFeedbackKind.Negative });

  expect(mockTrack).toHaveBeenCalledWith(
    '$ld:ai:feedback:user:negative',
    testContext,
    { configKey, versionKey },
    1,
  );
});

it('tracks success', () => {
  const tracker = new LDAIConfigTrackerImpl(mockLdClient, configKey, versionKey, testContext);
  tracker.trackSuccess();

  expect(mockTrack).toHaveBeenCalledWith(
    '$ld:ai:generation',
    testContext,
    { configKey, versionKey },
    1,
  );
});

it('tracks OpenAI usage', async () => {
  const tracker = new LDAIConfigTrackerImpl(mockLdClient, configKey, versionKey, testContext);
  jest.spyOn(global.Date, 'now').mockReturnValueOnce(1000).mockReturnValueOnce(2000);

  const TOTAL_TOKENS = 100;
  const PROMPT_TOKENS = 49;
  const COMPLETION_TOKENS = 51;

  await tracker.trackOpenAI(async () => ({
    usage: {
      total_tokens: TOTAL_TOKENS,
      prompt_tokens: PROMPT_TOKENS,
      completion_tokens: COMPLETION_TOKENS,
    },
  }));

  expect(mockTrack).toHaveBeenCalledWith(
    '$ld:ai:duration:total',
    testContext,
    { configKey, versionKey },
    1000,
  );

  expect(mockTrack).toHaveBeenCalledWith(
    '$ld:ai:generation',
    testContext,
    { configKey, versionKey },
    1,
  );

  expect(mockTrack).toHaveBeenCalledWith(
    '$ld:ai:tokens:total',
    testContext,
    { configKey, versionKey },
    TOTAL_TOKENS,
  );

  expect(mockTrack).toHaveBeenCalledWith(
    '$ld:ai:tokens:input',
    testContext,
    { configKey, versionKey },
    PROMPT_TOKENS,
  );

  expect(mockTrack).toHaveBeenCalledWith(
    '$ld:ai:tokens:output',
    testContext,
    { configKey, versionKey },
    COMPLETION_TOKENS,
  );
});

it('tracks Bedrock conversation with successful response', () => {
  const tracker = new LDAIConfigTrackerImpl(mockLdClient, configKey, versionKey, testContext);

  const TOTAL_TOKENS = 100;
  const PROMPT_TOKENS = 49;
  const COMPLETION_TOKENS = 51;

  const response = {
    $metadata: { httpStatusCode: 200 },
    metrics: { latencyMs: 500 },
    usage: {
      inputTokens: PROMPT_TOKENS,
      outputTokens: COMPLETION_TOKENS,
      totalTokens: TOTAL_TOKENS,
    },
  };

  tracker.trackBedrockConverse(response);

  expect(mockTrack).toHaveBeenCalledWith(
    '$ld:ai:generation',
    testContext,
    { configKey, versionKey },
    1,
  );

  expect(mockTrack).toHaveBeenCalledWith(
    '$ld:ai:duration:total',
    testContext,
    { configKey, versionKey },
    500,
  );

  expect(mockTrack).toHaveBeenCalledWith(
    '$ld:ai:tokens:total',
    testContext,
    { configKey, versionKey },
    TOTAL_TOKENS,
  );

  expect(mockTrack).toHaveBeenCalledWith(
    '$ld:ai:tokens:input',
    testContext,
    { configKey, versionKey },
    PROMPT_TOKENS,
  );

  expect(mockTrack).toHaveBeenCalledWith(
    '$ld:ai:tokens:output',
    testContext,
    { configKey, versionKey },
    COMPLETION_TOKENS,
  );
});

it('tracks Bedrock conversation with error response', () => {
  const tracker = new LDAIConfigTrackerImpl(mockLdClient, configKey, versionKey, testContext);

  const response = {
    $metadata: { httpStatusCode: 400 },
  };

  // TODO: We may want a track failure.

  tracker.trackBedrockConverse(response);

  expect(mockTrack).not.toHaveBeenCalled();
});

it('tracks tokens', () => {
  const tracker = new LDAIConfigTrackerImpl(mockLdClient, configKey, versionKey, testContext);

  const TOTAL_TOKENS = 100;
  const PROMPT_TOKENS = 49;
  const COMPLETION_TOKENS = 51;

  tracker.trackTokens({
    total: TOTAL_TOKENS,
    input: PROMPT_TOKENS,
    output: COMPLETION_TOKENS,
  });

  expect(mockTrack).toHaveBeenCalledWith(
    '$ld:ai:tokens:total',
    testContext,
    { configKey, versionKey },
    TOTAL_TOKENS,
  );

  expect(mockTrack).toHaveBeenCalledWith(
    '$ld:ai:tokens:input',
    testContext,
    { configKey, versionKey },
    PROMPT_TOKENS,
  );

  expect(mockTrack).toHaveBeenCalledWith(
    '$ld:ai:tokens:output',
    testContext,
    { configKey, versionKey },
    COMPLETION_TOKENS,
  );
});

it('only tracks non-zero token counts', () => {
  const tracker = new LDAIConfigTrackerImpl(mockLdClient, configKey, versionKey, testContext);

  tracker.trackTokens({
    total: 0,
    input: 50,
    output: 0,
  });

  expect(mockTrack).not.toHaveBeenCalledWith(
    '$ld:ai:tokens:total',
    expect.anything(),
    expect.anything(),
    expect.anything(),
  );

  expect(mockTrack).toHaveBeenCalledWith(
    '$ld:ai:tokens:input',
    testContext,
    { configKey, versionKey },
    50,
  );

  expect(mockTrack).not.toHaveBeenCalledWith(
    '$ld:ai:tokens:output',
    expect.anything(),
    expect.anything(),
    expect.anything(),
  );
});