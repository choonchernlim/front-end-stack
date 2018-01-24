// @flow

type ActionTypes = { [key: string]: string };

const ACTION_TYPES: ActionTypes = {
  ADD_TODO: 'todo-manager/addTodo',
  SET_VISIBILITY_FILTER: 'todo-manager/setVisibilityFilter',
  TOGGLE_TODO: 'todo-manager/toggleTodo',
};

type ActionType = $Keys<typeof ACTION_TYPES>;

type AddTodoAction = {|
  +type: ActionType,
  id: number,
  text: string,
|};

type ToggleTodoAction = {|
  +type: ActionType,
  id: number,
|};

type SetVisibilityFilterAction = {|
  +type: ActionType,
  filter: string,
|};

export type {
  ActionType,
  AddTodoAction,
  ToggleTodoAction,
  SetVisibilityFilterAction,
};

export default ACTION_TYPES;
