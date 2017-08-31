// @flow
import React from 'react';

type Props = {
  children: any
};

const Container = ({ children }: Props) => (
  <div style={{ width: '100%' }}>{children}</div>
);

export default Container;
