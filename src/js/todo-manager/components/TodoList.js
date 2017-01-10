import React, { PropTypes } from 'react';
import { List } from 'immutable';
import { connect } from 'react-redux';
import { toggleTodo } from '../actions';
import makeGetVisibleTodos from '../selectors';
import Todo from './Todo';

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
  const getVisibleTodos = makeGetVisibleTodos();
  return state => ({
    todos: getVisibleTodos(state)
  });
};

const TodoListContainer = connect(makeMapStateToProps, { onToggleTodo: toggleTodo })(TodoList);

export default TodoListContainer;
