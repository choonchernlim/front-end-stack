// @flow
import createReducer from '../common/utils/create-reducer';
import TodoRecord from './models/todo-record';
import TodoManagerRecord from './models/todo-manager-record';
import { ACTION_TYPES } from './actions';
import type { SetVisibilityFilterAction, ToggleTodoAction, AddTodoAction } from './types';

const initialState: TodoManagerRecord = new TodoManagerRecord();

const addTodo = (state: TodoManagerRecord, action: AddTodoAction): TodoManagerRecord => (
  state.set('todos', state.get('todos').push(new TodoRecord({
    id: action.id,
    text: action.text,
    completed: false
  })))
);

const toggleTodo = (state: TodoManagerRecord, action: ToggleTodoAction): TodoManagerRecord => (
  state.set('todos', state.get('todos').map((todo) => {
    if (todo.get('id') !== action.id) {
      return todo;
    }

    return todo.set('completed', !todo.get('completed'));
  }))
);

const setVisibilityFilter = (
  state: TodoManagerRecord,
  action: SetVisibilityFilterAction
): TodoManagerRecord => (
  state.set('visibilityFilter', action.filter)
);

export default createReducer(initialState, {
  [ACTION_TYPES.ADD_TODO]: addTodo,
  [ACTION_TYPES.TOGGLE_TODO]: toggleTodo,
  [ACTION_TYPES.SET_VISIBILITY_FILTER]: setVisibilityFilter
});
