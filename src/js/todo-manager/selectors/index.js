// @flow
import { createSelector } from 'reselect';
import { List } from 'immutable';
import TodoRecord from '../models/todo-record';
import TodoManagerRecord from '../models/todo-manager-record';

type State = {
  todoManager: TodoManagerRecord
};

const getVisibilityFilter = (state: State): string => state.todoManager.get('visibilityFilter');
const getTodos = (state: State): List<TodoRecord> => state.todoManager.get('todos');

const makeGetVisibleTodos = () => createSelector(
  getVisibilityFilter,
  getTodos,
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
  }
);

export default makeGetVisibleTodos;
