// @flow
import React, { type Element } from 'react';
import Typography from 'material-ui/Typography';

type Props = {
  onClick: Function,
  completed: boolean,
  text: string
};

const Todo = ({ onClick, completed, text }: Props): Element<*> => (
  <li>
    <Typography>
      <a
        href="#toggle"
        onClick={onClick}
        style={{ color: 'inherit', textDecoration: completed ? 'line-through' : 'none' }}
      >
        {text}
      </a>
    </Typography>
  </li>
);

export default Todo;
