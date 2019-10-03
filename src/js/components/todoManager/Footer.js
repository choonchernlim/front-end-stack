// @flow
import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import LinkConnected from './LinkConnected';

const Footer = (): React.Element<*> => (
  <Typography>
    Show: <LinkConnected filter="SHOW_ALL">All</LinkConnected>
    <LinkConnected filter="SHOW_ACTIVE">Active</LinkConnected>
    <LinkConnected filter="SHOW_COMPLETED">Completed</LinkConnected>
  </Typography>
);

export default Footer;
