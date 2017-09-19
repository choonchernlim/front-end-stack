// @flow
import React from 'react';
import { connect } from 'react-redux';
import stateSelector from '../../app/selectors/state-selector';

type Props = {
  path: string,
};

const UnexpectedError = ({ path }: Props) => (
  <div>
    <h1>
      An unexpected error has occurred while trying to process the given page [ {path} ].
    </h1>
  </div>
);

const makeMapStateToProps = () => state => ({
  path: stateSelector.routing.queryPath(state),
});

const UnexpectedErrorContainer = connect(makeMapStateToProps)(UnexpectedError);

export default UnexpectedErrorContainer;
