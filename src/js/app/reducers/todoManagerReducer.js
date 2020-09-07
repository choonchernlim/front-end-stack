// @flow
import produce from 'immer';
import createReducer from './createReducer';
import { ACTIONS } from '../actions';
import type { AddTodoAction, SetVisibilityFilterAction, ToggleTodoAction } from '../actions/types';
import type { TodoManagerState } from '../states/types';

/**
 * Types.
 */
type AddTodoFn = (state: TodoManagerState, action: AddTodoAction) => TodoManagerState;
type SetVisibilityFilterFn = (
  state: TodoManagerState,
  action: SetVisibilityFilterAction,
) => TodoManagerState;
type ToggleTodoFn = (state: TodoManagerState, action: ToggleTodoAction) => TodoManagerState;

/**
 * Initial State.
 */
export const initialState: TodoManagerState = Object.freeze({
  todos: [],
  visibilityFilter: 'SHOW_ALL',
});

/**
 * Action handlers.
 */
const addTodo: AddTodoFn = (state, action) =>
  produce(state, (draft) => {
    draft.todos.push({
      id: action.id,
      text: action.text,
      completed: false,
    });
  });

const toggleTodo: ToggleTodoFn = (state, action) =>
  produce(state, (draft) => {
    const i = draft.todos.findIndex((todo) => todo.id === action.id);

    draft.todos[i].completed = !draft.todos[i].completed;
  });

const setVisibilityFilter: SetVisibilityFilterFn = (state, action) =>
  produce(state, (draft) => {
    draft.visibilityFilter = action.filter;
  });

/**
 * Reducer.
 */
export default createReducer(initialState, {
  [ACTIONS.ADD_TODO]: addTodo,
  [ACTIONS.TOGGLE_TODO]: toggleTodo,
  [ACTIONS.SET_VISIBILITY_FILTER]: setVisibilityFilter,
});
