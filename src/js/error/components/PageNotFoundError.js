// @flow
import React from 'react';
import { connect } from 'react-redux';
import stateSelector from '../../app/selectors/state-selector';

type Props = {
  path: string,
};

const PageNotFoundError = ({ path }: Props) => (
  <div>
    <h1>
      The page you are looking for [ {path} ] does not exist.
    </h1>
  </div>
);

const makeMapStateToProps = () => state => ({
  path: stateSelector.routing.queryPath(state),
});

const PageNotFoundErrorContainer = connect(makeMapStateToProps)(PageNotFoundError);

export default PageNotFoundErrorContainer;
