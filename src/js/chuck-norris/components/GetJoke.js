// @flow
import React from 'react';
import { connect } from 'react-redux';
import Button from 'material-ui/Button';
import { CircularProgress } from 'material-ui/Progress';
import Typography from 'material-ui/Typography';
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
    <Button raised color="primary" onClick={onClick}>Get Joke</Button>
    {!completed ? <div><br /><CircularProgress /></div> : null}
    {joke ? <Typography type="display1" gutterBottom>{joke}</Typography> : null}
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
