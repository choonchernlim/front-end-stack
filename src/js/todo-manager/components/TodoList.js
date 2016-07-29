import React, { PropTypes } from 'react';
import { List } from 'immutable';
import Todo from './Todo';

const TodoList = ({ todos, toggleTodo }) => (
  <ul>
    {todos.map(todo =>
      <Todo
        key={todo.get('id')}
        text={todo.get('text')}
        completed={todo.get('completed')}
        onClick={() => toggleTodo(todo.get('id'))}
      />)
    }
  </ul>
);

TodoList.propTypes = {
  todos: PropTypes.instanceOf(List).isRequired,
  toggleTodo: PropTypes.func.isRequired
};

export default TodoList;
