// @flow
import { combineEpics } from 'redux-observable';
import getJokeEpic from './getJokeEpic';
import apis from '../apis';

const epics: Array<Function> = [
  getJokeEpic,
];

// Inject apis into epics to make it easier to test.
//
// See https://github.com/redux-observable/redux-observable/issues/194
// See https://medium.com/kevin-salters-blog/writing-epic-unit-tests-bd85f05685b
const rootEpic = (...args: Array<*>) => combineEpics(...epics)(...args, { ...apis });

export default rootEpic;
