// @flow
import React from 'react';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import CircularProgress from 'material-ui/CircularProgress';
import { getJoke } from '../actions';

type Props = {
  joke?: string,
  error?: string,
  completed: boolean,
  onClick: () => void
};

// 1. When "Get Joke" button is pressed, show spinner.
// 2. When result is shown, remove spinner.
// 3. If API call fails, display error message. Otherwise, display joke.
const GetJoke = ({ joke, error, completed, onClick }: Props): React.Element<*> => {
  const spinner: ?React.Element<*> = !completed ? <div><br /><CircularProgress /></div> : null;
  const errorMessage: ?React.Element<*> = error ? <div>An error has occurred: {error}</div> : null;

  return (
    <div>
      <RaisedButton primary label="Get Joke" onClick={onClick} />
      {spinner}
      {/* eslint-disable react/no-danger */}
      <h2><span dangerouslySetInnerHTML={{ __html: joke }} /></h2>
      {/* eslint-enable react/no-danger */}
      {errorMessage}
    </div>
  );
};

const mapStateToProps = state => ({
  joke: state.chuckNorris.get('joke'),
  error: state.chuckNorris.get('error'),
  completed: state.chuckNorris.get('completed')
});

const GetJokeContainer = connect(mapStateToProps, { onClick: getJoke })(GetJoke);

export default GetJokeContainer;
