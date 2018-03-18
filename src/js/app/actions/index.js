// @flow
export type AnyAction = {
  +type: string,
};

export type { GetJokeAction } from './chuckNorrisAction';
export type { MenuLeftOpenedAction, ToggleMenuAction } from './layoutAction';
export type {
  ToggleTodoAction,
  AddTodoAction,
  SetVisibilityFilterAction,
} from './todoManagerAction';

export { default as chuckNorrisAction } from './chuckNorrisAction';
export { default as layoutAction } from './layoutAction';
export { default as todoManagerAction } from './todoManagerAction';
