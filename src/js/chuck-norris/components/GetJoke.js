import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { getJoke } from '../actions/index';
import RaisedButton from 'material-ui/RaisedButton';

const GetJoke = ({ joke, onGetJokeClick }) => (
  <div>
    <RaisedButton primary label="Get Joke" onClick={onGetJokeClick} />
    <h2><span dangerouslySetInnerHTML={{ __html: joke }} /></h2>
  </div>
);

const mapStateToProps = (state) => ({
  joke: state.joke
});

const mapDispatchToProps = (dispatch) => ({
  onGetJokeClick: () => dispatch(getJoke())
});

GetJoke.propTypes = {
  joke: PropTypes.string.isRequired,
  onGetJokeClick: PropTypes.func.isRequired
};

const GetJokeContainer = connect(mapStateToProps, mapDispatchToProps)(GetJoke);

export default GetJokeContainer;
