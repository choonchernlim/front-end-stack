// @flow
import React from 'react';
import { connect } from 'react-redux';
import Typography from 'material-ui/Typography';
import stateSelector from '../../app/selectors/state-selector';

type Props = {
  path: string,
};

const PageNotFoundError = ({ path }: Props) => (
  <Typography type="display2" gutterBottom>
    The page you are looking for [ {path} ] does not exist.
  </Typography>
);

const makeMapStateToProps = () => state => ({
  path: stateSelector.routing.queryPath(state),
});

const PageNotFoundErrorContainer = connect(makeMapStateToProps)(PageNotFoundError);

export default PageNotFoundErrorContainer;
