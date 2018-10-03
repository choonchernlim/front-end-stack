// @flow
import { connect } from 'react-redux';
import actions from '../../app/actions';
import { makeGetVisibleTodos } from '../../app/reselectSelectors';
import TodoList from './TodoList';

const makeMapStateToProps = () => {
  const getVisibleTodos: Function = makeGetVisibleTodos();
  return state => ({
    todos: getVisibleTodos(state),
  });
};

const mapDispatchToProps = {
  onToggleTodo: actions.toggleTodo,
};

const TodoListConnected = connect(makeMapStateToProps, mapDispatchToProps)(TodoList);

export default TodoListConnected;
