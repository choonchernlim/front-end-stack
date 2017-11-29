// @flow
import { List } from 'immutable';
import ChuckNorrisRecord from '../../chuck-norris/models/chuck-norris-record';
import TodoManagerRecord from '../../todo-manager/models/todo-manager-record';
import TodoRecord from '../../todo-manager/models/todo-record';
import LayoutRecord from '../../layout/models/layout-record';

type State = {
  layout: LayoutRecord,
  chuckNorris: ChuckNorrisRecord,
  todoManager: TodoManagerRecord,
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
};

export default stateSelector;
