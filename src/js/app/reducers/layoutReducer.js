// @flow
import produce from 'immer';
import createReducer from './createReducer';
import { ACTIONS } from '../actions';
import type { MenuLeftOpenedAction } from '../actions/types';
import type { LayoutState } from '../states/types';

/**
 * Types.
 */
type MenuLeftOpenedFn = (state: LayoutState, action: MenuLeftOpenedAction) => LayoutState;
type ToggleMenuFn = (state: LayoutState) => LayoutState;

/**
 * Initial State.
 */
export const initialState: LayoutState = Object.freeze({
  shouldMenuLeftOpened: false,
  isMenuCurrentlyOpened: false,
});

/**
 * Action handlers.
 */
const menuLeftOpened: MenuLeftOpenedFn = (state, action) =>
  produce(state, (draft) => {
    const { shouldMenuLeftOpened, isMenuCurrentlyOpened } = action;

    draft.shouldMenuLeftOpened = shouldMenuLeftOpened;
    draft.isMenuCurrentlyOpened = isMenuCurrentlyOpened;
  });

const toggleMenu: ToggleMenuFn = (state) =>
  produce(state, (draft) => {
    draft.isMenuCurrentlyOpened = !draft.isMenuCurrentlyOpened;
  });

/**
 * Reducer.
 */
export default createReducer(initialState, {
  [ACTIONS.MENU_LEFT_OPENED]: menuLeftOpened,
  [ACTIONS.TOGGLE_MENU]: toggleMenu,
});
