// @flow
import produce from 'immer';
import createReducer from './createReducer';
import { initialLayoutState, type LayoutState } from '../states';
import { layout, type MenuLeftOpenedAction } from '../actions';

type MenuLeftOpenedFn = (state: LayoutState, action: MenuLeftOpenedAction) => LayoutState;
type ToggleMenuFn = (state: LayoutState) => LayoutState;

const menuLeftOpened: MenuLeftOpenedFn = (state, action) => produce(state, (draft) => {
  const { shouldMenuLeftOpened, isMenuCurrentlyOpened } = action;

  draft.shouldMenuLeftOpened = shouldMenuLeftOpened;
  draft.isMenuCurrentlyOpened = isMenuCurrentlyOpened;
});

const toggleMenu: ToggleMenuFn = state => produce(state, (draft) => {
  draft.isMenuCurrentlyOpened = !draft.isMenuCurrentlyOpened;
});

export default createReducer(initialLayoutState, {
  [layout.ACTION_TYPES.MENU_LEFT_OPENED]: menuLeftOpened,
  [layout.ACTION_TYPES.TOGGLE_MENU]: toggleMenu,
});
