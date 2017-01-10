/**
 * Creating reducer based on Redux recipe site in effort to create better flow-typed reducer.
 * See http://redux.js.org/docs/recipes/ReducingBoilerplate.html
 * See https://robwise.github.io/blog/using-flow-annotations-in-your-redux-reducers
 *
 * @param initialState
 * @param handlers
 */
const createReducer = (initialState, handlers) => (state = initialState, action) => (
  Object.prototype.hasOwnProperty.call(handlers, action.type) ?
    handlers[action.type](state, action) :
    state
);

export default createReducer;
