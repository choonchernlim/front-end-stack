// @flow

export type AddTodoAction = {
  type: string,
  id: number,
  text: string
};

export type SetVisibilityFilterAction = {
  type: string,
  filter: string
};

export type ToggleTodoAction = {
  type: string,
  id: number
};
