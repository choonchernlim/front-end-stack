// @flow
import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import layout from './layout';
import todoManager from './todoManager';
import chuckNorris from './chuckNorris';

export default combineReducers({
  layout,
  todoManager,
  chuckNorris,
  routing,
});
