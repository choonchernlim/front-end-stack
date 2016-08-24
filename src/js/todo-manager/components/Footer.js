import React from 'react';
import LinkContainer from './Link';

export default () => (
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
