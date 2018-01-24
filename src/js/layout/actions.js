// @flow
import type { MenuLeftOpenedAction, ToggleMenuAction } from './types';
import ACTION_TYPES from './types';

type MenuLeftOpenedFn = (open: boolean) => MenuLeftOpenedAction;
type ToggleMenuFn = () => ToggleMenuAction;

export const menuLeftOpened: MenuLeftOpenedFn = open => ({
  type: ACTION_TYPES.MENU_LEFT_OPENED,
  shouldMenuLeftOpened: open,
  isMenuCurrentlyOpened: open,
});

export const toggleMenu: ToggleMenuFn = () => ({
  type: ACTION_TYPES.TOGGLE_MENU,
});
