// @flow
import { List } from 'immutable';
import type { ChuckNorrisState } from './initialChuckNorrisState';
import type { TodoManagerState } from './makeTodoManagerState';
import type { TodoState } from './makeTodoState';
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
    visibilityFilter: (state: State): string => state.todoManager.get('visibilityFilter'),
    todos: (state: State): List<TodoState> => state.todoManager.get('todos'),
  },
};

export default stateSelector;
