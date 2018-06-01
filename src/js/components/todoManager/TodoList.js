// @flow
import * as React from 'react';
import { List } from 'immutable';
import type { TodoState } from '../../app/states/makeTodoState';
import Todo from './Todo';

type Props = {
  todos: List<TodoState>,
  onToggleTodo: Function
};

const TodoList = ({ todos, onToggleTodo }: Props): React.Element<*> => (
  <ul>
    {todos.map(todo => (
      <Todo
        key={todo.get('id')}
        text={todo.get('text')}
        completed={todo.get('completed')}
        onClick={() => onToggleTodo(todo.get('id'))}
      />))
    }
  </ul>
);

export default TodoList;
