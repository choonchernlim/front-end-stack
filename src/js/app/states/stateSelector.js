// @flow
import { List, Record } from 'immutable';
import type { ChuckNorrisState } from './makeChuckNorrisState';
import type { TodoManagerState } from './makeTodoManagerState';
import type { TodoState } from './makeTodoState';
import type { LayoutState } from './makeLayoutState';

type State = {
  layout: LayoutState,
  chuckNorris: ChuckNorrisState,
  todoManager: TodoManagerState,
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
    todos: (state: State): List<TodoState> => state.todoManager.get('todos'),
  },
};

export default stateSelector;
