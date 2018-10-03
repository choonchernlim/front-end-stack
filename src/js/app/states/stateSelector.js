// @flow
import type { ChuckNorrisState } from './initialChuckNorrisState';
import type { TodoManagerState } from './initialTodoManagerState';
import type { TodoState } from './initialTodoState';
import type { LayoutState } from './initialLayoutState';

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
