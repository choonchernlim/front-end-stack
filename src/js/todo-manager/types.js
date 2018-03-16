// @flow

type ActionTypes = { [key: string]: string };

const ACTION_TYPES: ActionTypes = {
  ADD_TODO: 'TODO-MANAGER/ADD-TODO',
  SET_VISIBILITY_FILTER: 'TODO-MANAGER/SET-VISIBILITY-FILTER',
  TOGGLE_TODO: 'TODO-MANAGER/TOGGLE-TODO',
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
