// @flow
import React, { type Element } from 'react';
import Typography from '@material-ui/core/Typography';
import Footer from './Footer';
import AddTodoConnected from './AddTodoConnected';
import TodoListConnected from './TodoListConnected';

const TodoManager = (): Element<*> => (
  <div>
    <Typography variant="display2" gutterBottom>Todo Manager</Typography>

    <Typography gutterBottom>A simple todo app using Redux.</Typography>

    <br /><br />

    <AddTodoConnected />
    <TodoListConnected />
    <Footer />
  </div>
);

export default TodoManager;
