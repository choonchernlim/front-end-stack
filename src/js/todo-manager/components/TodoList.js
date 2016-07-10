import React, { PropTypes } from 'react';
import { List } from 'immutable';
import Todo from './Todo';

const TodoList = ({ todos, toggleTodo }) => (
  <ul>
    {todos.map(todo =>
      <Todo
        key={todo.id}
        text={todo.text}
        completed={todo.completed}
        onClick={() => toggleTodo(todo.id)}
      />)
    }
  </ul>
);

TodoList.propTypes = {
  todos: PropTypes.instanceOf(List).isRequired,
  toggleTodo: PropTypes.func.isRequired
};

export default TodoList;
