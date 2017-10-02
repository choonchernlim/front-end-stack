// @flow
import React from 'react';
import { connect } from 'react-redux';
import Typography from 'material-ui/Typography';
import stateSelector from '../../app/selectors/state-selector';

type Props = {
  path: string,
};

const UnexpectedError = ({ path }: Props) => (
  <Typography type="display2" gutterBottom>
    An unexpected error has occurred while trying to process the given page [ {path} ].
  </Typography>
);

const makeMapStateToProps = () => state => ({
  path: stateSelector.routing.queryPath(state),
});

const UnexpectedErrorContainer = connect(makeMapStateToProps)(UnexpectedError);

export default UnexpectedErrorContainer;
