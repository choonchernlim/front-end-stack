// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux/reducer';
import layout from './layoutReducer';
import todoManager from './todoManagerReducer';
import chuckNorris from './chuckNorrisReducer';

export default combineReducers({
  router,
  layout,
  todoManager,
  chuckNorris,
});
