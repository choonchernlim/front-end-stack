// @flow
import produce from 'immer';
import createReducer from './createReducer';
import { ACTIONS } from '../actions';
import type { GetJokeAction } from '../actions/types';
import type { ChuckNorrisState } from '../states/types';

/**
 * Types.
 */
type HandleActionFn = (state: ChuckNorrisState, action: GetJokeAction) => ChuckNorrisState;

/**
 * Initial State.
 */
export const initialState: ChuckNorrisState = Object.freeze({
  completed: true,
  joke: null,
  error: null,
});

/**
 * Action handlers.
 */
const handleAction: HandleActionFn = (state, action) =>
  produce(state, (draft) => {
    const { completed, joke, error } = action.state;

    draft.completed = completed;
    draft.joke = joke;
    draft.error = error;
  });

/**
 * Reducer.
 */
export default createReducer(initialState, {
  [ACTIONS.GET_JOKE]: handleAction,
  [ACTIONS.GET_JOKE_SUCCEEDED]: handleAction,
  [ACTIONS.GET_JOKE_FAILED]: handleAction,
});
