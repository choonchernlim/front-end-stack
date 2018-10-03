// @flow

export type LayoutState = {
  shouldMenuLeftOpened: boolean,
  isMenuCurrentlyOpened: boolean,
};

const initialLayoutState: LayoutState = Object.freeze({
  shouldMenuLeftOpened: false,
  isMenuCurrentlyOpened: false,
});

export default initialLayoutState;
