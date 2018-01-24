// @flow

type ActionTypes = { [key: string]: string };

const ACTION_TYPES: ActionTypes = {
  MENU_LEFT_OPENED: 'LAYOUT/MENU_LEFT_OPENED',
  TOGGLE_MENU: 'LAYOUT/TOGGLE_MENU',
};

type ActionType = $Keys<typeof ACTION_TYPES>;

type MenuLeftOpenedAction = {|
  +type: ActionType,
  shouldMenuLeftOpened: boolean,
  isMenuCurrentlyOpened: boolean,
|};

type ToggleMenuAction = {|
  +type: ActionType,
|};

export type {
  MenuLeftOpenedAction,
  ToggleMenuAction,
};

export default ACTION_TYPES;
