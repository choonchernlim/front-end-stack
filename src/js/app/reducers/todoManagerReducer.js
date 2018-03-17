// @flow
import createReducer from '../utils/createReducer';
import makeTodoRecord from '../records/makeTodoRecord';
import makeTodoManagerRecord, { type TodoManagerRecord } from '../records/makeTodoManagerRecord';
import type { AddTodoAction, SetVisibilityFilterAction, ToggleTodoAction } from '../types/todoManagerTypes';
import ACTION_TYPES from '../types/todoManagerTypes';

/* eslint-disable max-len */
// @formatter:off
type AddTodoFn = (state: TodoManagerRecord, action: AddTodoAction) => TodoManagerRecord;
type SetVisibilityFilterFn = (state: TodoManagerRecord, action: SetVisibilityFilterAction) => TodoManagerRecord;
type ToggleTodoFn = (state: TodoManagerRecord, action: ToggleTodoAction) => TodoManagerRecord;
// @formatter:on
/* eslint-enable max-len */

const addTodo: AddTodoFn = (state, action) => (
  state.set('todos', state.get('todos').push(makeTodoRecord({
    id: action.id,
    text: action.text,
    completed: false,
  })))
);

const toggleTodo: ToggleTodoFn = (state, action) => (
  state.set('todos', state.get('todos').map(todo => (
    todo.get('id') === action.id ?
      todo.set('completed', !todo.get('completed')) :
      todo
  )))
);

const setVisibilityFilter: SetVisibilityFilterFn = (state, action) => (
  state.set('visibilityFilter', action.filter)
);

export default createReducer(makeTodoManagerRecord(), {
  [ACTION_TYPES.ADD_TODO]: addTodo,
  [ACTION_TYPES.TOGGLE_TODO]: toggleTodo,
  [ACTION_TYPES.SET_VISIBILITY_FILTER]: setVisibilityFilter,
});
