// @flow
import type { ChuckNorrisState, State, TodoState } from './types';

type States = {
  layout: {
    shouldMenuLeftOpened: (state: State) => boolean,
    isMenuCurrentlyOpened: (state: State) => boolean,
  },

  chuckNorris: (state: State) => ChuckNorrisState,

  todoManager: {
    visibilityFilter: (state: State) => string,
    todos: (state: State) => Array<TodoState>,
  },
};

const states: States = {
  layout: {
    shouldMenuLeftOpened: (state) => state.layout.shouldMenuLeftOpened,
    isMenuCurrentlyOpened: (state) => state.layout.isMenuCurrentlyOpened,
  },

  chuckNorris: (state) => state.chuckNorris,

  todoManager: {
    visibilityFilter: (state) => state.todoManager.visibilityFilter,
    todos: (state) => state.todoManager.todos,
  },
};

export default states;
