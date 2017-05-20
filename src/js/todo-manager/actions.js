// @flow
import type { AddTodoAction, SetVisibilityFilterAction, ToggleTodoAction } from './types';

let nextTodoId = 0;

export const ACTION_TYPES: { [key: string]: string } = {
  ADD_TODO: 'todo-manager/addTodo',
  SET_VISIBILITY_FILTER: 'todo-manager/setVisibilityFilter',
  TOGGLE_TODO: 'todo-manager/toggleTodo',
};

export const addTodo = (text: string): AddTodoAction => {
  nextTodoId += 1;
  return {
    type: ACTION_TYPES.ADD_TODO,
    id: nextTodoId,
    text,
  };
};

export const setVisibilityFilter = (filter: string): SetVisibilityFilterAction => ({
  type: ACTION_TYPES.SET_VISIBILITY_FILTER,
  filter,
});

export const toggleTodo = (id: number): ToggleTodoAction => ({
  type: ACTION_TYPES.TOGGLE_TODO,
  id,
});
