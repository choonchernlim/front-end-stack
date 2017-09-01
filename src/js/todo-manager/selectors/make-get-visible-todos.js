// @flow
import { createSelector } from 'reselect';
import { List } from 'immutable';
import stateSelector from '../../app/selectors/state-selector';
import TodoRecord from '../models/todo-record';

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
