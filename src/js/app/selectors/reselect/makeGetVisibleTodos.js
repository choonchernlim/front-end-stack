// @flow
import { createSelector } from 'reselect';
import { List } from 'immutable';
import stateSelector from '../state';
import type { TodoRecord } from '../../records/makeTodoRecord';

const makeGetVisibleTodos = () => createSelector(
  stateSelector.todoManager.visibilityFilter,
  stateSelector.todoManager.todos,
  (filter: string, todos: List<TodoRecord>): List<TodoRecord> => {
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
