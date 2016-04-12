import React, { PropTypes } from 'react';

const Link = ({ active, children, onClick }) => {
  if (active) {
    return <span>{children}</span>;
  }

  const onClickFunc = e => {
    e.preventDefault();
    onClick();
  };

  return <a href="#" onClick={onClickFunc}>{children}</a>;
};

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Link;
