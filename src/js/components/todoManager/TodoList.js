// @flow
import React, { type Element } from 'react';
import { List } from 'immutable';
import { connect } from 'react-redux';
import { todoManagerActions } from '../../app/actions';
import reselectSelector from '../../app/selectors/reselect';
import type { TodoRecord } from '../../app/records/makeTodoRecord';
import Todo from './Todo';

type Props = {
  todos: List<TodoRecord>,
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
  const getVisibleTodos: Function = reselectSelector.makeGetVisibleTodos();
  return state => ({
    todos: getVisibleTodos(state),
  });
};

const TodoListContainer = connect(
  makeMapStateToProps,
  { onToggleTodo: todoManagerActions.toggleTodo },
)(TodoList);

export default TodoListContainer;
