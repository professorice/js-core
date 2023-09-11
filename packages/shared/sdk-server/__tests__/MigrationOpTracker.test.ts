import { LDMigrationStage } from '../src';
import { LDMigrationOrigin } from '../src/api/LDMigration';
import MigrationOpTracker from '../src/MigrationOpTracker';

it('does not generate an event if an op is not set', () => {
  const tracker = new MigrationOpTracker(
    'flag',
    { user: 'bob' },
    LDMigrationStage.Off,
    LDMigrationStage.Off,
    {
      kind: 'FALLTHROUGH',
    },
  );

  expect(tracker.createEvent()).toBeUndefined();
});

it('does not generate an event with missing context keys', () => {
  const tracker = new MigrationOpTracker('flag', {}, LDMigrationStage.Off, LDMigrationStage.Off, {
    kind: 'FALLTHROUGH',
  });

  // Set the op otherwise that would prevent an event as well.
  tracker.op('write');

  expect(tracker.createEvent()).toBeUndefined();
});

it('generates an event if the minimal requirements are met.', () => {
  const tracker = new MigrationOpTracker(
    'flag',
    { user: 'bob' },
    LDMigrationStage.Off,
    LDMigrationStage.Off,
    {
      kind: 'FALLTHROUGH',
    },
  );

  tracker.op('write');
  tracker.invoked('old');

  expect(tracker.createEvent()).toMatchObject({
    contextKeys: { user: 'bob' },
    evaluation: { default: 'off', key: 'flag', reason: { kind: 'FALLTHROUGH' }, value: 'off' },
    kind: 'migration_op',
    measurements: [
      {
        key: 'invoked',
        values: {
          old: true,
        },
      },
    ],
    operation: 'write',
  });
});

it('includes errors if at least one is set', () => {
  const tracker = new MigrationOpTracker(
    'flag',
    { user: 'bob' },
    LDMigrationStage.Off,
    LDMigrationStage.Off,
    {
      kind: 'FALLTHROUGH',
    },
  );
  tracker.op('read');
  tracker.error('old');
  tracker.invoked('old');
  tracker.invoked('new');

  const event = tracker.createEvent();
  expect(event?.measurements).toContainEqual({
    key: 'error',
    values: {
      old: true,
    },
  });

  const trackerB = new MigrationOpTracker(
    'flag',
    { user: 'bob' },
    LDMigrationStage.Off,
    LDMigrationStage.Off,
    {
      kind: 'FALLTHROUGH',
    },
  );
  trackerB.op('read');
  trackerB.error('new');
  trackerB.invoked('old');
  trackerB.invoked('new');

  const eventB = trackerB.createEvent();
  expect(eventB?.measurements).toContainEqual({
    key: 'error',
    values: {
      new: true,
    },
  });
});

it('includes latency if at least one measurement exists', () => {
  const tracker = new MigrationOpTracker(
    'flag',
    { user: 'bob' },
    LDMigrationStage.Off,
    LDMigrationStage.Off,
    {
      kind: 'FALLTHROUGH',
    },
  );
  tracker.op('read');
  tracker.latency('old', 100);
  tracker.invoked('old');
  tracker.invoked('new');

  const event = tracker.createEvent();
  expect(event?.measurements).toContainEqual({
    key: 'latency_ms',
    values: {
      old: 100,
    },
  });

  const trackerB = new MigrationOpTracker(
    'flag',
    { user: 'bob' },
    LDMigrationStage.Off,
    LDMigrationStage.Off,
    {
      kind: 'FALLTHROUGH',
    },
  );
  trackerB.op('read');
  trackerB.latency('new', 150);
  trackerB.invoked('old');
  trackerB.invoked('new');

  const eventB = trackerB.createEvent();
  expect(eventB?.measurements).toContainEqual({
    key: 'latency_ms',
    values: {
      new: 150,
    },
  });
});

it('includes if the result was consistent', () => {
  const tracker = new MigrationOpTracker(
    'flag',
    { user: 'bob' },
    LDMigrationStage.Off,
    LDMigrationStage.Off,
    {
      kind: 'FALLTHROUGH',
    },
  );
  tracker.op('read');
  tracker.consistency(() => true);
  tracker.invoked('old');
  tracker.invoked('new');

  const event = tracker.createEvent();
  expect(event?.measurements).toContainEqual({
    key: 'consistent',
    value: true,
    samplingRatio: 1,
  });
});

it('includes if the result was inconsistent', () => {
  const tracker = new MigrationOpTracker(
    'flag',
    { user: 'bob' },
    LDMigrationStage.Off,
    LDMigrationStage.Off,
    {
      kind: 'FALLTHROUGH',
    },
  );
  tracker.op('read');
  tracker.invoked('old');
  tracker.invoked('new');
  tracker.consistency(() => false);

  const event = tracker.createEvent();
  expect(event?.measurements).toContainEqual({
    key: 'consistent',
    value: false,
    samplingRatio: 1,
  });
});

it.each(['old', 'new'])('includes which single origins were invoked', (origin) => {
  const tracker = new MigrationOpTracker(
    'flag',
    { user: 'bob' },
    LDMigrationStage.Off,
    LDMigrationStage.Off,
    {
      kind: 'FALLTHROUGH',
    },
  );
  tracker.op('read');
  tracker.invoked(origin as LDMigrationOrigin);

  const event = tracker.createEvent();
  expect(event?.measurements).toContainEqual({
    key: 'invoked',
    values: { [origin]: true },
  });
});

it('includes when both origins were invoked', () => {
  const tracker = new MigrationOpTracker(
    'flag',
    { user: 'bob' },
    LDMigrationStage.Off,
    LDMigrationStage.Off,
    {
      kind: 'FALLTHROUGH',
    },
  );
  tracker.op('read');
  tracker.invoked('old');
  tracker.invoked('new');

  const event = tracker.createEvent();
  expect(event?.measurements).toContainEqual({
    key: 'invoked',
    values: { old: true, new: true },
  });
});