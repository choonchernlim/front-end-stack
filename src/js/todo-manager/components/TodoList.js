import React, { PropTypes } from 'react';
import { List } from 'immutable';
import { connect } from 'react-redux';
import { toggleTodo } from '../actions';
import createGetVisibleTodosSelector from '../selectors';

export const Todo = ({ onClick, completed, text }) => (
  <li>
    <a
      href="#toggle"
      onClick={onClick}
      style={{ color: 'inherit', textDecoration: completed ? 'line-through' : 'none' }}
    >
      {text}
    </a>
  </li>
);

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
};

export const TodoList = ({ todos, onToggleTodo }) => (
  <ul>
    {todos.map(todo =>
      <Todo
        key={todo.get('id')}
        text={todo.get('text')}
        completed={todo.get('completed')}
        onClick={() => onToggleTodo(todo.get('id'))}
      />)
    }
  </ul>
);

TodoList.propTypes = {
  todos: PropTypes.instanceOf(List).isRequired,
  onToggleTodo: PropTypes.func.isRequired
};

const makeMapStateToProps = () => {
  const getVisibleTodos = createGetVisibleTodosSelector();
  return state => ({
    todos: getVisibleTodos(state)
  });
};

const TodoListContainer = connect(makeMapStateToProps, { onToggleTodo: toggleTodo })(TodoList);

export default TodoListContainer;
