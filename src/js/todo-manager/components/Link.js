// @flow
import React from 'react';
import { connect } from 'react-redux';
import { setVisibilityFilter } from '../actions';

type Props = {
  filter: string,
  active: boolean,
  children: string,
  onSetVisibilityFilter: Function
};

export const Link = ({ active, filter, children, onSetVisibilityFilter }: Props) => {
  if (active) {
    return <span>{children}</span>;
  }

  const onClick = (e) => {
    e.preventDefault();
    onSetVisibilityFilter(filter);
  };

  return <a href="#link" onClick={onClick}>{children}</a>;
};

const mapStateToProps = (state, ownProps) => ({
  filter: ownProps.filter,
  active: ownProps.filter === state.todoManager.get('visibilityFilter'),
});

const LinkContainer = connect(
  mapStateToProps,
  { onSetVisibilityFilter: setVisibilityFilter },
)(Link);

export default LinkContainer;
