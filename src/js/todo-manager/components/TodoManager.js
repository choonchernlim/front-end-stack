// @flow
import React, { Element } from 'react';
import Footer from './Footer';
import AddTodoContainer from './AddTodo';
import TodoListContainer from './TodoList';
import Container from '../../app/components/Container';

export default (): Element<*> => (
  <Container>
    <h1>Todo Manager</h1>

    <p>A simple todo app using Redux.</p>

    <AddTodoContainer />
    <TodoListContainer />
    <Footer />
  </Container>
);
