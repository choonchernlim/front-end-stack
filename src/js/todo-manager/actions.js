// @flow
import ACTION_TYPES, {
  type AddTodoAction,
  type SetVisibilityFilterAction,
  type ToggleTodoAction,
  type DeleteTodoAction,
} from './types';

type AddTodoFn = (text: string) => AddTodoAction;
type SetVisibilityFilterFn = (filter: string) => SetVisibilityFilterAction;
type ToggleTodoFn = (id: number) => ToggleTodoAction;
type DeleteTodoFn = (id: number) => DeleteTodoAction;

let nextTodoId: number = 0;

export const addTodo: AddTodoFn = (text) => {
  nextTodoId += 1;
  return {
    type: ACTION_TYPES.ADD_TODO,
    id: nextTodoId,
    text,
  };
};

export const setVisibilityFilter: SetVisibilityFilterFn = filter => ({
  type: ACTION_TYPES.SET_VISIBILITY_FILTER,
  filter,
});

export const toggleTodo: ToggleTodoFn = id => ({
  type: ACTION_TYPES.TOGGLE_TODO,
  id,
});

export const deleteTodo: DeleteTodoFn = id => ({
  type: ACTION_TYPES.DELETE_TODO,
  id,
});
