// @flow
import createReducer from '../app/utils/create-reducer';
import makeChuckNorrisRecord, { type ChuckNorrisRecord } from './models/chuck-norris-record';
import ACTION_TYPES, { type GetJokeAction } from './types';

type HandleActionFn = (state: ChuckNorrisRecord, action: GetJokeAction) => ChuckNorrisRecord;

const handleAction: HandleActionFn = (state, action) => state.merge(action.state);

export default createReducer(makeChuckNorrisRecord(), {
  [ACTION_TYPES.GET_JOKE]: handleAction,
  [ACTION_TYPES.GET_JOKE_SUCCEEDED]: handleAction,
  [ACTION_TYPES.GET_JOKE_FAILED]: handleAction,
});
