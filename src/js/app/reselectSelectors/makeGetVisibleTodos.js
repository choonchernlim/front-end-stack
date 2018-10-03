// @flow
import { createSelector } from 'reselect';
import stateSelector from '../states';
import type { TodoState } from '../states/types';

const makeGetVisibleTodos = () => createSelector(
  stateSelector.todoManager.visibilityFilter,
  stateSelector.todoManager.todos,
  (filter: string, todos: Array<TodoState>): Array<TodoState> => {
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
  },
);

export default makeGetVisibleTodos;
