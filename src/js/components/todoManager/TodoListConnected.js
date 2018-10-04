// @flow
import { connect } from 'react-redux';
import actions from '../../app/actions';
import TodoList from './TodoList';
import { makeVisibleTodosSelector } from '../../app/selectors';
import type { VisibleTodosSelectorFn } from '../../app/selectors/types';

const makeMapStateToProps = () => {
  const visibleTodosSelector: VisibleTodosSelectorFn = makeVisibleTodosSelector();

  return state => ({
    todos: visibleTodosSelector(state),
  });
};

const mapDispatchToProps = {
  onToggleTodo: actions.toggleTodo,
};

const TodoListConnected = connect(
  makeMapStateToProps,
  mapDispatchToProps,
)(TodoList);

export default TodoListConnected;
