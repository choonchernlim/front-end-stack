let nextTodoId = 1;

export const ADD_TODO = 'todo-manager/addTodo';
export const SET_VISIBILITY_FILTER = 'todo-manager/setVisibilityFilter';
export const TOGGLE_TODO = 'todo-manager/toggleTodo';

export const addTodo = (text) => ({
  type: ADD_TODO,
  id: nextTodoId++,
  text
});

export const setVisibilityFilter = (filter) => ({
  type: SET_VISIBILITY_FILTER,
  filter
});

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  id
});
