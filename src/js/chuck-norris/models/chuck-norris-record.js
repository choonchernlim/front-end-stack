// @flow
import { Record, type RecordFactory, type RecordOf } from 'immutable';

type ChuckNorrisProps = {
  completed: true,
  joke?: string,
  error?: string,
};

export type ChuckNorrisRecord = RecordOf<ChuckNorrisProps>;

const makeChuckNorrisRecord: RecordFactory<ChuckNorrisProps> = Record({
  completed: true,
  joke: undefined,
  error: undefined,
});

export default makeChuckNorrisRecord;

