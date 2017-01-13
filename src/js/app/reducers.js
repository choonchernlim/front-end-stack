// @flow
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import todoManager from '../todo-manager';
import chuckNorris from '../chuck-norris';

export default combineReducers({
  todoManager: todoManager.reducer,
  chuckNorris: chuckNorris.reducer,
  routing: routerReducer
});
