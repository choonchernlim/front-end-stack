// @flow
import * as React from 'react';
import Todo from './Todo';
import type { TodoState } from '../../app/states/types';

type Props = {
  todos: Array<TodoState>,
  onToggleTodo: Function
};

const TodoList = ({ todos, onToggleTodo }: Props): React.Element<*> => (
  <ul>
    {todos.map(todo => (
      <Todo
        key={todo.id}
        text={todo.text}
        completed={todo.completed}
        onClick={() => onToggleTodo(todo.id)}
      />))
    }
  </ul>
);

export default TodoList;
