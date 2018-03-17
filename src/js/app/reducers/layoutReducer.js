// @flow
import createReducer from './createReducer';
import { type LayoutRecord, makeLayoutRecord } from '../records';
import { layoutActions, type MenuLeftOpenedAction } from '../actions';

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
  [layoutActions.ACTION_TYPES.MENU_LEFT_OPENED]: menuLeftOpened,
  [layoutActions.ACTION_TYPES.TOGGLE_MENU]: toggleMenu,
});
