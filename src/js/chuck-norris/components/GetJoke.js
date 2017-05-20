// @flow
import React from 'react';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import CircularProgress from 'material-ui/CircularProgress';
import { getJoke } from '../actions';
import stateSelector from '../../app/selectors/state-selector';

type Props = {
  joke?: string,
  error?: string,
  completed: boolean,
  onClick: Function
};

const GetJoke = ({ joke, error, completed, onClick }: Props) => (
  <div>
    <RaisedButton primary label="Get Joke" onClick={onClick} />
    {!completed ? <div><br /><CircularProgress /></div> : null}
    {joke ? <h2>{joke}</h2> : null}
    {error ? <div>An error has occurred: {error}</div> : null}
  </div>
);

GetJoke.defaultProps = {
  joke: undefined,
  error: false,
};

const mapStateToProps = state => ({
  joke: stateSelector.chuckNorris.joke(state),
  error: stateSelector.chuckNorris.error(state),
  completed: stateSelector.chuckNorris.completed(state),
});

const GetJokeContainer = connect(mapStateToProps, { onClick: getJoke })(GetJoke);

export default GetJokeContainer;
