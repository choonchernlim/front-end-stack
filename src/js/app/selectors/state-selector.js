// @flow
import { List } from 'immutable';
import JokeRecord from '../../chuck-norris/models/joke-record';
import TodoManagerRecord from '../../todo-manager/models/todo-manager-record';
import TodoRecord from '../../todo-manager/models/todo-record';
import LayoutRecord from '../../layout/models/layout-record';

type State = {
  layout: LayoutRecord,
  chuckNorris: JokeRecord,
  todoManager: TodoManagerRecord,
  routing: *,
};

type StateSelector = {
  layout: {
    shouldMenuLeftOpened: Function,
    isMenuCurrentlyOpened: Function,
  },

  chuckNorris: {
    joke: Function,
    error: Function,
    completed: Function,
  },

  todoManager: {
    visibilityFilter: Function,
    todos: Function,
  },

  routing: {
    queryPath: Function,
  },
};

const stateSelector: StateSelector = {
  layout: {
    shouldMenuLeftOpened: (state: State): string => state.layout.get('shouldMenuLeftOpened'),
    isMenuCurrentlyOpened: (state: State): string => state.layout.get('isMenuCurrentlyOpened'),
  },

  chuckNorris: {
    joke: (state: State): ?string => state.chuckNorris.get('joke'),
    error: (state: State): ?string => state.chuckNorris.get('error'),
    completed: (state: State): boolean => state.chuckNorris.get('completed'),
  },

  todoManager: {
    visibilityFilter: (state: State): string => state.todoManager.get('visibilityFilter'),
    todos: (state: State): List<TodoRecord> => state.todoManager.get('todos'),
  },

  routing: {
    queryPath: (state: State): string => state.routing.locationBeforeTransitions.query.path,
  },
};

export default stateSelector;
