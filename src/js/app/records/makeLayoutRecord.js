// @flow
import { Record, type RecordFactory, type RecordOf } from 'immutable';

type LayoutProps = {
  shouldMenuLeftOpened: boolean,
  isMenuCurrentlyOpened: boolean,
};

export type LayoutRecord = RecordOf<LayoutProps>;

export const makeLayoutRecord: RecordFactory<LayoutProps> = Record({
  shouldMenuLeftOpened: false,
  isMenuCurrentlyOpened: false,
});

export default {};
