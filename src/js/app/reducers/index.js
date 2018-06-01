// @flow
import { combineReducers } from 'redux';
import routing from 'react-router-redux/reducer';
import layout from './layout';
import todoManager from './todoManager';
import chuckNorris from './chuckNorris';

export default combineReducers({
  layout,
  todoManager,
  chuckNorris,
  routing,
});
