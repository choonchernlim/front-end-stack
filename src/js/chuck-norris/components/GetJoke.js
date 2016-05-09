import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { getJoke } from '../actions/index';
import RaisedButton from 'material-ui/RaisedButton';

let GetJoke = ({ joke, onGetJokeClick }) => (
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

GetJoke = connect(mapStateToProps, mapDispatchToProps)(GetJoke);

export default GetJoke;
