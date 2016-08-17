import React from 'react';
import Footer from './Footer';
import AddTodoContainer from './AddTodo';
import TodoListContainer from './TodoList';
import Container from '../../common/components/Container';

export default () => (
  <Container>
    <h1>Todo Manager</h1>

    <p>A simple todo app using Redux.</p>

    <AddTodoContainer />
    <TodoListContainer />
    <Footer />
  </Container>
);
