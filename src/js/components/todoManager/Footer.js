// @flow
import React, { type Element } from 'react';
import Typography from 'material-ui/Typography';
import LinkConnected from './LinkConnected';

const Footer = (): Element<*> => (
  <Typography>
    Show:
    {' '}
    <LinkConnected filter="SHOW_ALL">All</LinkConnected>
    {' '}
    <LinkConnected filter="SHOW_ACTIVE">Active</LinkConnected>
    {' '}
    <LinkConnected filter="SHOW_COMPLETED">Completed</LinkConnected>
  </Typography>
);

export default Footer;
