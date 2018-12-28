// @flow
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import layout from './layoutReducer';
import todoManager from './todoManagerReducer';
import chuckNorris from './chuckNorrisReducer';

const reducers = (history: *) =>
  combineReducers({
    router: connectRouter(history),
    layout,
    todoManager,
    chuckNorris,
  });

export default reducers;
