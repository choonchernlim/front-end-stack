// @flow
export type AnyAction = {
  +type: string,
};

export type { GetJokeAction } from './chuckNorrisActions';
export type { MenuLeftOpenedAction, ToggleMenuAction } from './layoutActions';
export type {
  ToggleTodoAction,
  AddTodoAction,
  SetVisibilityFilterAction,
} from './todoManagerActions';

export { default as chuckNorrisActions } from './chuckNorrisActions';
export { default as layoutActions } from './layoutActions';
export { default as todoManagerActions } from './todoManagerActions';
