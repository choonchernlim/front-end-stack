// TODO LIMC cannot use flow due to error on `children`
import React, { PropTypes } from 'react';

const Container = ({ children }) => (
  <div style={{ width: '100%' }}>{children}</div>
);

Container.propTypes = {
  children: PropTypes.node.isRequired
};

export default Container;
