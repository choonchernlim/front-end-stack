// @flow
import createReducer from '../utils/createReducer';
import { type ChuckNorrisRecord, makeChuckNorrisRecord } from '../records';
import { chuckNorrisActions, type GetJokeAction } from '../actions';

type HandleActionFn = (state: ChuckNorrisRecord, action: GetJokeAction) => ChuckNorrisRecord;

const handleAction: HandleActionFn = (state, action) => state.merge(action.state);

export default createReducer(makeChuckNorrisRecord(), {
  [chuckNorrisActions.ACTION_TYPES.GET_JOKE]: handleAction,
  [chuckNorrisActions.ACTION_TYPES.GET_JOKE_SUCCEEDED]: handleAction,
  [chuckNorrisActions.ACTION_TYPES.GET_JOKE_FAILED]: handleAction,
});
