// @flow

type ActionTypes = { [key: string]: string };

const ACTION_TYPES: ActionTypes = {
  ADD_TODO: 'todo-manager/addTodo',
  SET_VISIBILITY_FILTER: 'todo-manager/setVisibilityFilter',
  TOGGLE_TODO: 'todo-manager/toggleTodo',
  DELETE_TODO: 'todo-manager/deleteTodo',
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

// to simulate whether flow can differentiate ToggleTodoAction and DeleteTodoAction
// because they share same structure
type DeleteTodoAction = {|
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
  DeleteTodoAction,
  SetVisibilityFilterAction,
};

export default ACTION_TYPES;
