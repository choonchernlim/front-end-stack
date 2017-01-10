import React, { PropTypes } from 'react';

const Todo = ({ onClick, completed, text }) => (
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

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
};

export default Todo;
