// @flow
import { List } from 'immutable';
import JokeRecord from '../../chuck-norris/models/joke-record';
import TodoManagerRecord from '../../todo-manager/models/todo-manager-record';
import TodoRecord from '../../todo-manager/models/todo-record';

type State = {
  chuckNorris: JokeRecord,
  todoManager: TodoManagerRecord
};

type StateSelector = {
  chuckNorris: {
    joke: Function,
    error: Function,
    completed: Function
  },

  todoManager: {
    visibilityFilter: Function,
    todos: Function
  }
};

const stateSelector: StateSelector = {
  chuckNorris: {
    joke: (state: State): ?string => state.chuckNorris.get('joke'),
    error: (state: State): ?string => state.chuckNorris.get('error'),
    completed: (state: State): boolean => state.chuckNorris.get('completed')
  },

  todoManager: {
    visibilityFilter: (state: State): string => state.todoManager.get('visibilityFilter'),
    todos: (state: State): List<TodoRecord> => state.todoManager.get('todos')
  }
};

export default stateSelector;
