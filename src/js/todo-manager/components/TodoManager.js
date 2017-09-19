// @flow
import React, { type Element } from 'react';
import Typography from 'material-ui/Typography';
import Footer from './Footer';
import AddTodoContainer from './AddTodo';
import TodoListContainer from './TodoList';

export default (): Element<*> => (
  <div>
    <Typography type="display2" gutterBottom>Todo Manager</Typography>

    <Typography gutterBottom>A simple todo app using Redux.</Typography>

    <br /><br />

    <AddTodoContainer />
    <TodoListContainer />
    <Footer />
  </div>
);
