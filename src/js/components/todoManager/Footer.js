// @flow
import React, { type Element } from 'react';
import Typography from 'material-ui/Typography';
import LinkContainer from './Link';

const Footer = (): Element<*> => (
  <Typography>
    Show:
    {' '}
    <LinkContainer filter="SHOW_ALL">All</LinkContainer>
    {' '}
    <LinkContainer filter="SHOW_ACTIVE">Active</LinkContainer>
    {' '}
    <LinkContainer filter="SHOW_COMPLETED">Completed</LinkContainer>
  </Typography>
);

export default Footer;
