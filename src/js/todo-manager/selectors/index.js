import { createSelector } from 'reselect';

const getVisibilityFilter = (state) => state.visibilityFilter;
const getTodos = (state) => state.todos;

const makeGetVisibleTodos = () => (
  createSelector(
    getVisibilityFilter,
    getTodos,
    (filter, todos) => {
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
    }
  )
);

export default makeGetVisibleTodos;
