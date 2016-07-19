import { Record, List } from 'immutable';
import { ADD_TODO, TOGGLE_TODO } from '../actions';

const TodoRecord = Record({
  id: undefined,
  text: undefined,
  completed: undefined
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

const todos = (state = new List(), action) => {
  switch (action.type) {
    case ADD_TODO:
      return state.push(todo(undefined, action));

    case TOGGLE_TODO:
      return state.map((t) => todo(t, action));

    default:
      return state;
  }
};

export default todos;
