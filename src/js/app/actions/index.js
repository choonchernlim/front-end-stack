// @flow

import type {
  AddTodoFn,
  GetJokeFailedFn,
  GetJokeFn,
  GetJokeSucceededFn,
  MenuLeftOpenedFn,
  SetVisibilityFilterFn,
  ToggleMenuFn,
  ToggleTodoFn,
} from './types';
import ACTIONS from './actions';

let nextTodoId: number = 0;

const getJoke: GetJokeFn = () => ({
  type: ACTIONS.GET_JOKE,
  state: {
    completed: false,
    joke: null,
    error: null,
  },
});

const getJokeFailed: GetJokeFailedFn = error => ({
  type: ACTIONS.GET_JOKE_FAILED,
  state: {
    completed: true,
    joke: null,
    error,
  },
});

const getJokeSucceeded: GetJokeSucceededFn = joke => ({
  type: ACTIONS.GET_JOKE_SUCCEEDED,
  state: {
    completed: true,
    joke,
    error: null,
  },
});

const menuLeftOpened: MenuLeftOpenedFn = open => ({
  type: ACTIONS.MENU_LEFT_OPENED,
  shouldMenuLeftOpened: open,
  isMenuCurrentlyOpened: open,
});

const toggleMenu: ToggleMenuFn = () => ({
  type: ACTIONS.TOGGLE_MENU,
});

const addTodo: AddTodoFn = text => {
  nextTodoId += 1;
  return {
    type: ACTIONS.ADD_TODO,
    id: nextTodoId,
    text,
  };
};

const setVisibilityFilter: SetVisibilityFilterFn = filter => ({
  type: ACTIONS.SET_VISIBILITY_FILTER,
  filter,
});

const toggleTodo: ToggleTodoFn = id => ({ type: ACTIONS.TOGGLE_TODO, id });

const actions = {
  getJoke,
  getJokeFailed,
  getJokeSucceeded,

  menuLeftOpened,
  toggleMenu,

  addTodo,
  setVisibilityFilter,
  toggleTodo,
};

export { ACTIONS };

export default actions;
