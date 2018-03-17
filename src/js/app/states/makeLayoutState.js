// @flow
import { Record, type RecordFactory, type RecordOf } from 'immutable';

type LayoutProps = {
  shouldMenuLeftOpened: boolean,
  isMenuCurrentlyOpened: boolean,
};

export type LayoutState = RecordOf<LayoutProps>;

const makeLayoutState: RecordFactory<LayoutProps> = Record({
  shouldMenuLeftOpened: false,
  isMenuCurrentlyOpened: false,
});

export default makeLayoutState;
