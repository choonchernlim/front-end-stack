// @flow
import React from 'react';
import Button from '@material-ui/core/Button';
import makeStyles from '@material-ui/core/styles/makeStyles';
import type { SetVisibilityFilterFn } from '../../app/actions/types';

type Props = $ReadOnly<{|
  filter: string,
  active: boolean,
  children: string,
  onSetVisibilityFilter: SetVisibilityFilterFn,
|}>;

const useStyles = makeStyles((theme) => ({
  link: theme.link,
}));

const Link = ({ active, filter, children, onSetVisibilityFilter }: Props) => {
  const classes = useStyles();

  if (active) {
    return <Button disabled>{children}</Button>;
  }

  return (
    <Button className={classes.link} onClick={() => onSetVisibilityFilter(filter)}>
      {children}
    </Button>
  );
};

export default Link;
