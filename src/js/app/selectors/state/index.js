// @flow
import { List, Record } from 'immutable';
import type { ChuckNorrisRecord } from '../../records/makeChuckNorrisRecord';
import type { TodoManagerRecord } from '../../records/makeTodoManagerRecord';
import type { TodoRecord } from '../../records/makeTodoRecord';
import type { LayoutRecord } from '../../records/makeLayoutRecord';

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
    shouldMenuLeftOpened: (state: State): boolean => {
      if (state.layout instanceof Record) {
        return state.layout.get('shouldMenuLeftOpened');
      }

      return false;
    },
    isMenuCurrentlyOpened: (state: State): boolean => {
      if (state.layout instanceof Record) {
        return state.layout.get('isMenuCurrentlyOpened');
      }

      return false;
    },
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
