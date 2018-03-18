// @flow
import React from 'react';
import { connect } from 'react-redux';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import { todoManagerAction } from '../../app/actions';

type Props = {
  filter: string,
  active: boolean,
  children: string,
  onSetVisibilityFilter: Function,
  classes: Object,
};

const styles = (theme: Object) => ({
  link: theme.link,
});

// eslint-disable-next-line object-curly-newline
export const Link = ({ active, filter, children, onSetVisibilityFilter, classes }: Props) => {
  if (active) {
    return <Button disabled>{children}</Button>;
  }

  return (
    <Button className={classes.link} onClick={() => onSetVisibilityFilter(filter)}>
      {children}
    </Button>
  );
};

const mapStateToProps = (state, ownProps) => ({
  filter: ownProps.filter,
  active: ownProps.filter === state.todoManager.get('visibilityFilter'),
});

const LinkContainer = connect(
  mapStateToProps,
  { onSetVisibilityFilter: todoManagerAction.setVisibilityFilter },
)(Link);

export default withStyles(styles)(LinkContainer);
