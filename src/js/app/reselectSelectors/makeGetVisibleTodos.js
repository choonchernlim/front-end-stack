// @flow
import { createSelector } from 'reselect';
import { List } from 'immutable';
import { stateSelector } from '../states/index';
import type { TodoState } from '../states/makeTodoState';

const makeGetVisibleTodos = () => createSelector(
  stateSelector.todoManager.visibilityFilter,
  stateSelector.todoManager.todos,
  (filter: string, todos: List<TodoState>): List<TodoState> => {
    switch (filter) {
      case 'SHOW_ALL':
        return todos;
      case 'SHOW_COMPLETED':
        return todos.filter(t => t.get('completed'));
      case 'SHOW_ACTIVE':
        return todos.filter(t => !t.get('completed'));
      default:
        return todos;
    }
  },
);

export default makeGetVisibleTodos;
