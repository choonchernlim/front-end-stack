// @flow
import produce from 'immer';
import createReducer from './createReducer';
import { chuckNorris, type GetJokeAction } from '../actions';
import { type ChuckNorrisState, initialChuckNorrisState } from '../states';

type HandleActionFn = (state: ChuckNorrisState, action: GetJokeAction) => ChuckNorrisState;

const handleAction: HandleActionFn = (state, action) => produce(state, (draft) => {
  const { completed, joke, error } = action.state;

  draft.completed = completed;
  draft.joke = joke;
  draft.error = error;
});

export default createReducer(initialChuckNorrisState, {
  [chuckNorris.ACTION_TYPES.GET_JOKE]: handleAction,
  [chuckNorris.ACTION_TYPES.GET_JOKE_SUCCEEDED]: handleAction,
  [chuckNorris.ACTION_TYPES.GET_JOKE_FAILED]: handleAction,
});
