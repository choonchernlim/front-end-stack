// @flow
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import todoManager from '../todo-manager/reducer';
import chuckNorris from '../chuck-norris/reducer';

export default combineReducers({
  todoManager,
  chuckNorris,
  routing: routerReducer,
});
