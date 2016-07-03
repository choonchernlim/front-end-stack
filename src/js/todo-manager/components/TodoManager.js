import React from 'react';
import Footer from './Footer';
import AddTodo from './AddTodo';
import VisibleTodoList from './VisibleTodoList';
import Container from '../../common/components/Container';

export default () => (
  <Container>
    <h1>Todo Manager</h1>

    <p>A simple todo app using Redux.</p>

    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </Container>
);
