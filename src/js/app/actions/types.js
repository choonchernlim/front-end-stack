// @flow
import { ACTIONS } from './index';

type ActionType = $Values<typeof ACTIONS>;

// This cannot be an exact type
export type AnyAction = $ReadOnly<{
  type: ActionType,
}>;

export type GetJokeAction = $ReadOnly<{|
  type: ActionType,
  state: {
    completed: boolean,
    joke: ?string,
    error: ?string,
  },
|}>;

export type MenuLeftOpenedAction = $ReadOnly<{|
  type: ActionType,
  shouldMenuLeftOpened: boolean,
  isMenuCurrentlyOpened: boolean,
|}>;

export type ToggleMenuAction = $ReadOnly<{|
  type: ActionType,
|}>;

export type AddTodoAction = $ReadOnly<{|
  type: ActionType,
  id: number,
  text: string,
|}>;

export type ToggleTodoAction = $ReadOnly<{|
  type: ActionType,
  id: number,
|}>;

export type SetVisibilityFilterAction = $ReadOnly<{|
  type: ActionType,
  filter: string,
|}>;

export type GetJokeFn = () => GetJokeAction;
export type GetJokeFailedFn = (error: string) => GetJokeAction;
export type GetJokeSucceededFn = (joke: string) => GetJokeAction;

export type MenuLeftOpenedFn = (open: boolean) => MenuLeftOpenedAction;
export type ToggleMenuFn = () => ToggleMenuAction;

export type AddTodoFn = (text: string) => AddTodoAction;
export type SetVisibilityFilterFn = (filter: string) => SetVisibilityFilterAction;
export type ToggleTodoFn = (id: number) => ToggleTodoAction;
