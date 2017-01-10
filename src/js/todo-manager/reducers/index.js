import { ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER } from '../actions';
import TodoRecord from '../models/todo-record';
import TodoManagerRecord from '../models/todo-manager-record';

const todo = (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      return new TodoRecord({
        id: action.id,
        text: action.text,
        completed: false
      });

    case TOGGLE_TODO:
      if (state.get('id') !== action.id) {
        return state;
      }

      return state.set('completed', !state.get('completed'));

    default:
      return state;
  }
};

const todoManager = (state = new TodoManagerRecord(), action) => {
  switch (action.type) {
    case ADD_TODO:
      return state.set('todos', state.get('todos').push(todo(undefined, action)));

    case TOGGLE_TODO:
      return state.set('todos', state.get('todos').map(t => todo(t, action)));

    case SET_VISIBILITY_FILTER:
      return state.set('visibilityFilter', action.filter);

    default:
      return state;
  }
};

export default todoManager;
