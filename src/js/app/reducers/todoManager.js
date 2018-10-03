// @flow
import produce from 'immer';
import createReducer from './createReducer';
import { initialTodoManagerState, type TodoManagerState } from '../states';
import {
  type AddTodoAction,
  type SetVisibilityFilterAction,
  todoManager,
  type ToggleTodoAction,
} from '../actions';

/* eslint-disable max-len */
// @formatter:off
type AddTodoFn = (state: TodoManagerState, action: AddTodoAction) => TodoManagerState;
type SetVisibilityFilterFn = (state: TodoManagerState, action: SetVisibilityFilterAction) => TodoManagerState;
type ToggleTodoFn = (state: TodoManagerState, action: ToggleTodoAction) => TodoManagerState;
// @formatter:on
/* eslint-enable max-len */

const addTodo: AddTodoFn = (state, action) => produce(state, (draft) => {
  draft.todos.push({
    id: action.id,
    text: action.text,
    completed: false,
  });
});

const toggleTodo: ToggleTodoFn = (state, action) => produce(state, (draft) => {
  const i = draft.todos.findIndex(todo => todo.id === action.id);

  draft.todos[i].completed = !draft.todos[i].completed;
});

const setVisibilityFilter: SetVisibilityFilterFn = (state, action) => produce(state, (draft) => {
  draft.visibilityFilter = action.filter;
});

export default createReducer(initialTodoManagerState, {
  [todoManager.ACTION_TYPES.ADD_TODO]: addTodo,
  [todoManager.ACTION_TYPES.TOGGLE_TODO]: toggleTodo,
  [todoManager.ACTION_TYPES.SET_VISIBILITY_FILTER]: setVisibilityFilter,
});
