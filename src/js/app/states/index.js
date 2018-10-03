// @flow
import type { State, TodoState } from './types';

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
    shouldMenuLeftOpened: (state: State): boolean => state.layout.shouldMenuLeftOpened,
    isMenuCurrentlyOpened: (state: State): boolean => state.layout.isMenuCurrentlyOpened,
  },

  chuckNorris: {
    joke: (state: State): ?string => state.chuckNorris.joke,
    error: (state: State): ?string => state.chuckNorris.error,
    completed: (state: State): boolean => state.chuckNorris.completed,
  },

  todoManager: {
    visibilityFilter: (state: State): string => state.todoManager.visibilityFilter,
    todos: (state: State): Array<TodoState> => state.todoManager.todos,
  },
};

export default stateSelector;
