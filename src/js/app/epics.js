// @flow
import { combineEpics } from 'redux-observable';
import chuckNorris from '../chuck-norris/epics';

// flatten nested arrays
const epics: Function[] = [].concat(
  ...[
    chuckNorris,
  ],
);

export default combineEpics(...epics);
