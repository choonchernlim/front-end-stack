// @flow
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import layoutReducer from './layoutReducer';
import todoManagerReducer from './todoManagerReducer';
import chuckNorrisReducer from './chuckNorrisReducer';

export default combineReducers({
  layout: layoutReducer,
  todoManager: todoManagerReducer,
  chuckNorris: chuckNorrisReducer,
  routing: routerReducer,
});
