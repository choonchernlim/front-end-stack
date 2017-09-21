// @flow
import createReducer from '../app/utils/create-reducer';
import JokeRecord from './models/joke-record';
import { ACTION_TYPES, type GetJokeAction } from './actions';

const handleAction = (
  state: JokeRecord,
  action: GetJokeAction,
): JokeRecord => state.merge(action.state);

export default createReducer(new JokeRecord(), {
  [ACTION_TYPES.GET_JOKE]: handleAction,
  [ACTION_TYPES.GET_JOKE_SUCCEEDED]: handleAction,
  [ACTION_TYPES.GET_JOKE_FAILED]: handleAction,
});
