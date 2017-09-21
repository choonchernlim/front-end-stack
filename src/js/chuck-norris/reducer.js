// @flow
import createReducer from '../app/utils/create-reducer';
import ChuckNorrisRecord from './models/chuck-norris-record';
import { ACTION_TYPES, type GetJokeAction } from './actions';

const handleAction = (
  state: ChuckNorrisRecord,
  action: GetJokeAction,
): ChuckNorrisRecord => state.merge(action.state);

export default createReducer(new ChuckNorrisRecord(), {
  [ACTION_TYPES.GET_JOKE]: handleAction,
  [ACTION_TYPES.GET_JOKE_SUCCEEDED]: handleAction,
  [ACTION_TYPES.GET_JOKE_FAILED]: handleAction,
});
