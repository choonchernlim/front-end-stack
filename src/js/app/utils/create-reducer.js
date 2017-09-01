// @flow
import { List, Map, Record } from 'immutable';

// ensure reducer state can be either Immutable List, Immutable Map or Immutable Record.
type State = List<*> | Map<*, *> | Record<*>;

/**
 * Creating reducer based on Redux recipe site in effort to create better flow-typed reducer.
 *
 * See http://redux.js.org/docs/recipes/ReducingBoilerplate.html
 * See https://robwise.github.io/blog/using-flow-annotations-in-your-redux-reducers
 *
 * @param initialState  Initial state
 * @param handlers      Action handler
 */
const createReducer = (initialState: State, handlers: {}) => (
  state: State = initialState,
  action: { type: string },
): State => (
  Object.prototype.hasOwnProperty.call(handlers, action.type) ?
    handlers[action.type](state, action) :
    state
);

export default createReducer;
