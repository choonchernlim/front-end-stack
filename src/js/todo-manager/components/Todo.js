// @flow
import React, { Element } from 'react';

type Props = {
  onClick: Function,
  completed: boolean,
  text: string
};

const Todo = ({ onClick, completed, text }: Props): Element<any> => (
  <li>
    <a
      href="#toggle"
      onClick={onClick}
      style={{ color: 'inherit', textDecoration: completed ? 'line-through' : 'none' }}
    >
      {text}
    </a>
  </li>
);

export default Todo;
