// @flow
import { Record, type RecordFactory, type RecordOf } from 'immutable';

type ChuckNorrisProps = {
  completed: boolean,
  joke?: string,
  error?: string,
};

export type ChuckNorrisState = RecordOf<ChuckNorrisProps>;

const makeChuckNorrisState: RecordFactory<ChuckNorrisProps> = Record({
  completed: true,
  joke: undefined,
  error: undefined,
});

export default makeChuckNorrisState;
