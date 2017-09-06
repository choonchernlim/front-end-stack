// @flow
import React from 'react';
import { connect } from 'react-redux';
import stateSelector from '../../app/selectors/state-selector';
import Container from '../../app/components/Container';

type Props = {
  path: string,
};

const UnexpectedError = ({ path }: Props) => (
  <Container>
    <h1>
      An unexpected error has occurred while trying to process the given page [ {path} ].
    </h1>
  </Container>
);

const makeMapStateToProps = () => state => ({
  path: stateSelector.routing.queryPath(state),
});

const UnexpectedErrorContainer = connect(makeMapStateToProps)(UnexpectedError);

export default UnexpectedErrorContainer;
