// @flow
import React from 'react';
import { connect } from 'react-redux';
import Button from 'material-ui/Button';
import { setVisibilityFilter } from '../actions';

type Props = {
  filter: string,
  active: boolean,
  children: string,
  onSetVisibilityFilter: Function
};

export const Link = ({ active, filter, children, onSetVisibilityFilter }: Props) => {
  if (active) {
    return <Button disabled>{children}</Button>;
  }

  return <Button onClick={() => onSetVisibilityFilter(filter)}>{children}</Button>;
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
