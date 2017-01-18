// @flow
import React, { Element } from 'react';

type Props = {
  children: Element<*>
};

// $FlowFixMe: Waiting for React to fix "Property not found" when using `children`.
const Container = ({ children }: Props) => (
  <div style={{ width: '100%' }}>{children}</div>
);

export default Container;
