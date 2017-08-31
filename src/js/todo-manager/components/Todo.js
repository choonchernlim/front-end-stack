// @flow
import type { Element } from 'react';
import React from 'react';

type Props = {
  onClick: Function,
  completed: boolean,
  text: string
};

const Todo = ({ onClick, completed, text }: Props): Element<*> => (
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
