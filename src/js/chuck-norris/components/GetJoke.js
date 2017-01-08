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

const GetJoke = ({ joke = '', error, completed, onClick }: Props): React.Element<*> => (
  <div>
    <RaisedButton primary label="Get Joke" onClick={onClick} />
    {!completed ? <div><br /><CircularProgress /></div> : null}
    <h2>{joke}</h2>
    {error ? <div>An error has occurred: {error}</div> : null}
  </div>
);

const mapStateToProps = state => ({
  joke: state.chuckNorris.get('joke'),
  error: state.chuckNorris.get('error'),
  completed: state.chuckNorris.get('completed')
});

const GetJokeContainer = connect(mapStateToProps, { onClick: getJoke })(GetJoke);

export default GetJokeContainer;
