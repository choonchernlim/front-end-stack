// @flow
import { createSelector } from 'reselect';
import states from '../states';
import type { VisibleTodosSelectorFn } from './types';

type MakeVisibleTodosSelectorFn = () => VisibleTodosSelectorFn;

const makeVisibleTodosSelector: MakeVisibleTodosSelectorFn = () =>
  createSelector(states.todoManager.visibilityFilter, states.todoManager.todos, (filter, todos) => {
    switch (filter) {
      case 'SHOW_ALL':
        return todos;
      case 'SHOW_COMPLETED':
        return todos.filter(t => t.completed);
      case 'SHOW_ACTIVE':
        return todos.filter(t => !t.completed);
      default:
        return todos;
    }
  });

export default makeVisibleTodosSelector;
