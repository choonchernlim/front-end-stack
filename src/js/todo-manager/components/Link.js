import React, { PropTypes } from 'react';

const Link = ({ active, filter, children, setVisibilityFilter }) => {
  if (active) {
    return <span>{children}</span>;
  }

  const onClick = e => {
    e.preventDefault();
    setVisibilityFilter(filter);
  };

  return <a href="#link" onClick={onClick}>{children}</a>;
};

Link.propTypes = {
  filter: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  setVisibilityFilter: PropTypes.func.isRequired
};

export default Link;
