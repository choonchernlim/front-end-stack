// @flow
import React, { type Element } from 'react';
import { List } from 'immutable';
import { connect } from 'react-redux';
import { todoManagerAction } from '../../app/actions';
import { makeGetVisibleTodos } from '../../app/reselectSelectors';
import type { TodoState } from '../../app/states/makeTodoState';
import Todo from './Todo';

type Props = {
  todos: List<TodoState>,
  onToggleTodo: Function
};

export const TodoList = ({ todos, onToggleTodo }: Props): Element<*> => (
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

const makeMapStateToProps = () => {
  const getVisibleTodos: Function = makeGetVisibleTodos();
  return state => ({
    todos: getVisibleTodos(state),
  });
};

const TodoListContainer = connect(
  makeMapStateToProps,
  { onToggleTodo: todoManagerAction.toggleTodo },
)(TodoList);

export default TodoListContainer;
