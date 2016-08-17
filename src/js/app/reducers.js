import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as todoManagerReducer } from '../todo-manager';
import { reducer as chuckNorrisReducer } from '../chuck-norris';

export default combineReducers({
  ...todoManagerReducer,
  chuckNorris: chuckNorrisReducer,
  routing: routerReducer
});
