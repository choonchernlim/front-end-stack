// @flow
import createReducer from '../app/utils/create-reducer';
import TodoRecord from './models/todo-record';
import TodoManagerRecord from './models/todo-manager-record';
import ACTION_TYPES, {
  type AddTodoAction,
  type DeleteTodoAction,
  type SetVisibilityFilterAction,
  type ToggleTodoAction,
} from './types';

/* eslint-disable max-len */
// @formatter:off
type AddTodoFn = (state: TodoManagerRecord, action: AddTodoAction) => TodoManagerRecord;
type SetVisibilityFilterFn = (state: TodoManagerRecord, action: SetVisibilityFilterAction) => TodoManagerRecord;
type ToggleTodoFn = (state: TodoManagerRecord, action: ToggleTodoAction) => TodoManagerRecord;
type DeleteTodoFn = (state: TodoManagerRecord, action: DeleteTodoAction) => TodoManagerRecord;
// @formatter:on
/* eslint-enable max-len */

const addTodo: AddTodoFn = (state, action) => (
  state.set('todos', state.get('todos').push(new TodoRecord({
    id: action.id,
    text: action.text,
    completed: false,
  })))
);

const toggleTodo: ToggleTodoFn = (state, action) => (
  state.set('todos', state.get('todos').map(todo => (
    todo.get('id') === action.id ?
      todo.set('completed', !todo.get('completed')) :
      todo
  )))
);

const deleteTodo: DeleteTodoFn = (state, action) => (
  state.set('todos', state.get('todos').filter(todo => todo.get('id') !== action.id))
);

const setVisibilityFilter: SetVisibilityFilterFn = (state, action) => (
  state.set('visibilityFilter', action.filter)
);

export default createReducer(new TodoManagerRecord(), {
  [ACTION_TYPES.ADD_TODO]: addTodo,
  [ACTION_TYPES.TOGGLE_TODO]: toggleTodo,
  [ACTION_TYPES.SET_VISIBILITY_FILTER]: setVisibilityFilter,
  [ACTION_TYPES.DELETE_TODO]: deleteTodo,
});
