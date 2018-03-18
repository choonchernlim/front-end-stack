// @flow
import { connect } from 'react-redux';
import { todoManager } from '../../app/actions';
import { makeGetVisibleTodos } from '../../app/reselectSelectors';
import TodoList from './TodoList';

const makeMapStateToProps = () => {
  const getVisibleTodos: Function = makeGetVisibleTodos();
  return state => ({
    todos: getVisibleTodos(state),
  });
};

const mapDispatchToProps = {
  onToggleTodo: todoManager.toggleTodo,
};

const TodoListConnected = connect(makeMapStateToProps, mapDispatchToProps)(TodoList);

export default TodoListConnected;
