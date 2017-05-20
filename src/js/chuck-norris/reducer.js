// @flow
import createReducer from '../app/utils/create-reducer';
import JokeRecord from './models/joke-record';
import { ACTION_TYPES } from './actions';
import type { GetJokeAction, GetJokeFailedAction, GetJokeSucceededAction } from './types';

const handleAction = (
  state: JokeRecord,
  action: GetJokeAction | GetJokeFailedAction | GetJokeSucceededAction
): JokeRecord => state.merge(action.state);

export default createReducer(new JokeRecord(), {
  [ACTION_TYPES.GET_JOKE]: handleAction,
  [ACTION_TYPES.GET_JOKE_SUCCEEDED]: handleAction,
  [ACTION_TYPES.GET_JOKE_FAILED]: handleAction
});
