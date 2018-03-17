// @flow
import createReducer from './createReducer';
import { makeTodoManagerRecord, makeTodoRecord, type TodoManagerRecord } from '../records';
import {
  type AddTodoAction,
  type SetVisibilityFilterAction,
  todoManagerActions,
  type ToggleTodoAction,
} from '../actions';

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
  [todoManagerActions.ACTION_TYPES.ADD_TODO]: addTodo,
  [todoManagerActions.ACTION_TYPES.TOGGLE_TODO]: toggleTodo,
  [todoManagerActions.ACTION_TYPES.SET_VISIBILITY_FILTER]: setVisibilityFilter,
});
