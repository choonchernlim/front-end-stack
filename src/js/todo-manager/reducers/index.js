import { Record, List } from 'immutable';
import { ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER } from '../actions';

const TodoRecord = Record({
  id: undefined,
  text: undefined,
  completed: undefined
});

export const TodoManagerRecord = Record({
  todos: new List(),
  visibilityFilter: 'SHOW_ALL'
});

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
