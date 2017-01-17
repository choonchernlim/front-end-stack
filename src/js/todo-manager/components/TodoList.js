// @flow
import React, { Element } from 'react';
import { List } from 'immutable';
import { connect } from 'react-redux';
import { toggleTodo } from '../actions';
import makeGetVisibleTodos from '../selectors/make-get-visible-todos';
import Todo from './Todo';
import TodoRecord from '../models/todo-record';

type Props = {
  todos: List<TodoRecord>,
  onToggleTodo: Function
};

export const TodoList = ({ todos, onToggleTodo }: Props): Element<*> => (
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

const makeMapStateToProps = () => {
  const getVisibleTodos: Function = makeGetVisibleTodos();
  return state => ({
    todos: getVisibleTodos(state)
  });
};

const TodoListContainer = connect(makeMapStateToProps, { onToggleTodo: toggleTodo })(TodoList);

export default TodoListContainer;
