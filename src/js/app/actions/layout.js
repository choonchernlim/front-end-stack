// @flow
const ACTION_TYPES = Object.freeze({
  MENU_LEFT_OPENED: 'LAYOUT/MENU-LEFT-OPENED',
  TOGGLE_MENU: 'LAYOUT/TOGGLE-MENU',
});

type ActionType = $Values<typeof ACTION_TYPES>;

export type MenuLeftOpenedAction = $ReadOnly<{|
  type: ActionType,
  shouldMenuLeftOpened: boolean,
  isMenuCurrentlyOpened: boolean,
|}>;

export type ToggleMenuAction = $ReadOnly<{|
  type: ActionType,
|}>;

type MenuLeftOpenedFn = (open: boolean) => MenuLeftOpenedAction;
type ToggleMenuFn = () => ToggleMenuAction;

const menuLeftOpened: MenuLeftOpenedFn = open => ({
  type: ACTION_TYPES.MENU_LEFT_OPENED,
  shouldMenuLeftOpened: open,
  isMenuCurrentlyOpened: open,
});

const toggleMenu: ToggleMenuFn = () => ({
  type: ACTION_TYPES.TOGGLE_MENU,
});

const layoutAction = {
  ACTION_TYPES,
  menuLeftOpened,
  toggleMenu,
};

export default layoutAction;
