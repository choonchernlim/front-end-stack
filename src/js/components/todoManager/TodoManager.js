// @flow
import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import Footer from './Footer';
import AddTodoConnected from './AddTodoConnected';
import TodoListConnected from './TodoListConnected';

const TodoManager = (): React.Element<*> => (
  <div>
    <Typography variant="h3" gutterBottom>
      Todo Manager
    </Typography>

    <Typography gutterBottom>A simple todo app using Redux.</Typography>

    <br />
    <br />

    <AddTodoConnected />
    <TodoListConnected />
    <Footer />
  </div>
);

export default TodoManager;
