// @flow
import createReducer from './createReducer';
import { type ChuckNorrisState, makeChuckNorrisState } from '../states';
import { chuckNorrisAction, type GetJokeAction } from '../actions';

type HandleActionFn = (state: ChuckNorrisState, action: GetJokeAction) => ChuckNorrisState;

const handleAction: HandleActionFn = (state, action) => state.merge(action.state);

export default createReducer(makeChuckNorrisState(), {
  [chuckNorrisAction.ACTION_TYPES.GET_JOKE]: handleAction,
  [chuckNorrisAction.ACTION_TYPES.GET_JOKE_SUCCEEDED]: handleAction,
  [chuckNorrisAction.ACTION_TYPES.GET_JOKE_FAILED]: handleAction,
});
