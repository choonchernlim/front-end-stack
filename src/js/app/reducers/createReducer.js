// @flow
import type { AnyAction } from '../actions';

type State = *;
type HandleActionFn = (state: State, action: AnyAction) => State;
type CreateReducerFn = (initialState: State, handlers: Object) => HandleActionFn;

/**
 * Creating reducer based on Redux recipe site in effort to create better flow-typed reducer.
 *
 * See http://redux.js.org/docs/recipes/ReducingBoilerplate.html
 * See https://robwise.github.io/blog/using-flow-annotations-in-your-redux-reducers
 *
 * @param initialState  Initial state
 * @param handlers      Action handler
 */
const createReducer: CreateReducerFn = (initialState, handlers) => (
  state = initialState,
  action,
) => (
  Object.prototype.hasOwnProperty.call(handlers, action.type)
    ? handlers[action.type](state, action)
    : state
);

export default createReducer;
