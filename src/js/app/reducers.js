// @flow
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import layout from '../layout/reducer';
import todoManager from '../todo-manager/reducer';
import chuckNorris from '../chuck-norris/reducer';

export default combineReducers({
  layout,
  todoManager,
  chuckNorris,
  routing: routerReducer,
});
