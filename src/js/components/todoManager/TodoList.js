// @flow
import * as React from 'react';
import Todo from './Todo';
import type { TodoState } from '../../app/states/types';
import type { ToggleTodoFn } from '../../app/actions/types';

type Props = $ReadOnly<{|
  todos: Array<TodoState>,
  onToggleTodo: ToggleTodoFn
|}>;

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
