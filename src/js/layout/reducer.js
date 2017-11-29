// @flow
import createReducer from '../app/utils/create-reducer';
import LayoutRecord from './models/layout-record';
import { ACTION_TYPES, type MenuLeftOpenedAction } from './actions';

const menuLeftOpened = (state: LayoutRecord, action: MenuLeftOpenedAction): LayoutRecord => (
  state.merge({
    shouldMenuLeftOpened: action.shouldMenuLeftOpened,
    isMenuCurrentlyOpened: action.isMenuCurrentlyOpened,
  })
);

const toggleMenu = (state: LayoutRecord): LayoutRecord => (
  state.set('isMenuCurrentlyOpened', !state.get('isMenuCurrentlyOpened'))
);

export default createReducer(new LayoutRecord(), {
  [ACTION_TYPES.MENU_LEFT_OPENED]: menuLeftOpened,
  [ACTION_TYPES.TOGGLE_MENU]: toggleMenu,
});
