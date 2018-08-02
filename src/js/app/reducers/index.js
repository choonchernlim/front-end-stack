// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux/reducer';
import layout from './layout';
import todoManager from './todoManager';
import chuckNorris from './chuckNorris';

export default combineReducers({
  router,
  layout,
  todoManager,
  chuckNorris,
});
