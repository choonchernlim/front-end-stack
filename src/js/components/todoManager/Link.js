// @flow
import React from 'react';
import Button from '@material-ui/core/Button';
import type { SetVisibilityFilterFn } from '../../app/actions/types';

type Props = $ReadOnly<{|
  filter: string,
  active: boolean,
  children: string,
  onSetVisibilityFilter: SetVisibilityFilterFn,
  classes: Object,
|}>;

export const styles = (theme: Object) => ({
  link: theme.link,
});

// eslint-disable-next-line object-curly-newline
const Link = ({ active, filter, children, onSetVisibilityFilter, classes }: Props) => {
  if (active) {
    return (
      <Button disabled>
        {children}
      </Button>
    );
  }

  return (
    <Button className={classes.link} onClick={() => onSetVisibilityFilter(filter)}>
      {children}
    </Button>
  );
};

export default Link;
