// TODO LIMC need to figure out flow
import TodoRecord from './models/todo-record';
import TodoManagerRecord from './models/todo-manager-record';
import { ACTION_TYPES } from './actions';
import type { Action } from './types';

const todo = (state?: TodoRecord, action: Action) => {
  switch (action.type) {
    case ACTION_TYPES.ADD_TODO:
      return new TodoRecord({
        id: action.id,
        text: action.text,
        completed: false
      });

    case ACTION_TYPES.TOGGLE_TODO:
      if (state.get('id') !== action.id) {
        return state;
      }

      return state.set('completed', !state.get('completed'));

    default:
      return state;
  }
};

const todoManager = (state: TodoManagerRecord = new TodoManagerRecord(), action: Action) => {
  switch (action.type) {
    case ACTION_TYPES.ADD_TODO:
      return state.set('todos', state.get('todos').push(todo(undefined, action)));

    case ACTION_TYPES.TOGGLE_TODO:
      return state.set('todos', state.get('todos').map(t => todo(t, action)));

    case ACTION_TYPES.SET_VISIBILITY_FILTER:
      return state.set('visibilityFilter', action.filter);

    default:
      return state;
  }
};

export default todoManager;
