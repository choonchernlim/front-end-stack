// @flow
import createReducer from '../utils/createReducer';
import makeLayoutRecord, { type LayoutRecord } from '../records/makeLayoutRecord';
import ACTION_TYPES, { type MenuLeftOpenedAction } from '../types/layoutTypes';

type MenuLeftOpenedFn = (state: LayoutRecord, action: MenuLeftOpenedAction) => LayoutRecord;
type ToggleMenuFn = (state: LayoutRecord) => LayoutRecord ;

const menuLeftOpened: MenuLeftOpenedFn = (state, action) => (
  state.merge({
    shouldMenuLeftOpened: action.shouldMenuLeftOpened,
    isMenuCurrentlyOpened: action.isMenuCurrentlyOpened,
  })
);

const toggleMenu: ToggleMenuFn = state => (
  state.set('isMenuCurrentlyOpened', !state.get('isMenuCurrentlyOpened'))
);

export default createReducer(makeLayoutRecord(), {
  [ACTION_TYPES.MENU_LEFT_OPENED]: menuLeftOpened,
  [ACTION_TYPES.TOGGLE_MENU]: toggleMenu,
});
