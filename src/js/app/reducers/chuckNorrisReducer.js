// @flow
import createReducer from '../utils/createReducer';
import makeChuckNorrisRecord, { type ChuckNorrisRecord } from '../records/makeChuckNorrisRecord';
import ACTION_TYPES, { type GetJokeAction } from '../types/chuckNorrisTypes';

type HandleActionFn = (state: ChuckNorrisRecord, action: GetJokeAction) => ChuckNorrisRecord;

const handleAction: HandleActionFn = (state, action) => state.merge(action.state);

export default createReducer(makeChuckNorrisRecord(), {
  [ACTION_TYPES.GET_JOKE]: handleAction,
  [ACTION_TYPES.GET_JOKE_SUCCEEDED]: handleAction,
  [ACTION_TYPES.GET_JOKE_FAILED]: handleAction,
});
