// @flow
import createReducer from './createReducer';
import { makeTodoManagerState, makeTodoState, type TodoManagerState } from '../states';
import {
  type AddTodoAction,
  type SetVisibilityFilterAction,
  todoManagerAction,
  type ToggleTodoAction,
} from '../actions';

/* eslint-disable max-len */
// @formatter:off
type AddTodoFn = (state: TodoManagerState, action: AddTodoAction) => TodoManagerState;
type SetVisibilityFilterFn = (state: TodoManagerState, action: SetVisibilityFilterAction) => TodoManagerState;
type ToggleTodoFn = (state: TodoManagerState, action: ToggleTodoAction) => TodoManagerState;
// @formatter:on
/* eslint-enable max-len */

const addTodo: AddTodoFn = (state, action) => (
  state.set('todos', state.get('todos').push(makeTodoState({
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

export default createReducer(makeTodoManagerState(), {
  [todoManagerAction.ACTION_TYPES.ADD_TODO]: addTodo,
  [todoManagerAction.ACTION_TYPES.TOGGLE_TODO]: toggleTodo,
  [todoManagerAction.ACTION_TYPES.SET_VISIBILITY_FILTER]: setVisibilityFilter,
});
