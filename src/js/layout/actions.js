// @flow
export type MenuLeftOpenedAction = {
  type: string,
  shouldMenuLeftOpened: boolean,
  isMenuCurrentlyOpened: boolean,
};

export type ToggleMenuAction = {
  type: string,
};

export const ACTION_TYPES: { [key: string]: string } = {
  MENU_LEFT_OPENED: 'layout/MENU_LEFT_OPENED',
  TOGGLE_MENU: 'layout/TOGGLE_MENU',
};

export const menuLeftOpened = (open: boolean): MenuLeftOpenedAction => ({
  type: ACTION_TYPES.MENU_LEFT_OPENED,
  shouldMenuLeftOpened: open,
  isMenuCurrentlyOpened: open,
});

export const toggleMenu = (): ToggleMenuAction => ({
  type: ACTION_TYPES.TOGGLE_MENU,
});
