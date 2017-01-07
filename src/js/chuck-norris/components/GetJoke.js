// @flow
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import CircularProgress from 'material-ui/CircularProgress';
import { getJoke } from '../actions';

// TODO LIMC should Flow replace PropTypes??
type Props = {
  joke: string,
  error: string,
  completed: boolean,
  onClick: () => void
};

// 1. When "Get Joke" button is pressed, show spinner.
// 2. When result is shown, remove spinner.
// 3. If API call fails, display error message. Otherwise, display joke.
const GetJoke = ({ joke, error, completed, onClick }: Props) => {
  const spinner = !completed ? <div><CircularProgress /></div> : undefined;
  const errorMessage = error ? <div>An error has occurred: {error}</div> : undefined;

  // noinspection HtmlUnknownAttribute
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

// GetJoke.propTypes = {
//   joke: PropTypes.string,
//   error: PropTypes.string,
//   completed: PropTypes.bool.isRequired,
//   onClick: PropTypes.func.isRequired
// };

const mapStateToProps = state => ({
  joke: state.chuckNorris.get('joke'),
  error: state.chuckNorris.get('error'),
  completed: state.chuckNorris.get('completed')
});

const GetJokeContainer = connect(mapStateToProps, { onClick: getJoke })(GetJoke);

export default GetJokeContainer;
