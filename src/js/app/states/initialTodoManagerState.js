// @flow
import type { TodoState } from './initialTodoState';

export type TodoManagerState = {
  todos: Array<TodoState>,
  visibilityFilter: string,
};

const initialTodoManagerState: TodoManagerState = Object.freeze({
  todos: [],
  visibilityFilter: 'SHOW_ALL',
});

export default initialTodoManagerState;
