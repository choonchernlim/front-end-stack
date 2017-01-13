// TODO LIMC cannot use flow due to `children`
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { setVisibilityFilter } from '../actions';

export const Link = ({ active, filter, children, onSetVisibilityFilter }) => {
  if (active) {
    return <span>{children}</span>;
  }

  const onClick = (e) => {
    e.preventDefault();
    onSetVisibilityFilter(filter);
  };

  return <a href="#link" onClick={onClick}>{children}</a>;
};

Link.propTypes = {
  filter: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onSetVisibilityFilter: PropTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) => ({
  filter: ownProps.filter,
  active: ownProps.filter === state.todoManager.get('visibilityFilter')
});

const LinkContainer = connect(
  mapStateToProps,
  { onSetVisibilityFilter: setVisibilityFilter }
)(Link);

export default LinkContainer;
