// @flow
import React, { type Element } from 'react';
import LinkContainer from './Link';

const Footer = (): Element<*> => (
  <p>
    Show:
    {' '}
    <LinkContainer filter="SHOW_ALL">All</LinkContainer>
    {' '}
    <LinkContainer filter="SHOW_ACTIVE">Active</LinkContainer>
    {' '}
    <LinkContainer filter="SHOW_COMPLETED">Completed</LinkContainer>
  </p>
);

export default Footer;
