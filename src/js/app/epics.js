// @flow
import { combineEpics } from 'redux-observable';
import chuckNorrisEpics from '../chuck-norris/epics';
import apis from './apis';

// flatten nested arrays
const epics: Function[] = [].concat(...[chuckNorrisEpics]);

// Inject apis into epics to make it easier to test.
//
// See https://github.com/redux-observable/redux-observable/issues/194
// See https://medium.com/kevin-salters-blog/writing-epic-unit-tests-bd85f05685b
export default (...args: Array<*>) => combineEpics(...epics)(...args, { ...apis });
