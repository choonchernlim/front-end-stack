import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { getJoke } from '../actions';
import RaisedButton from 'material-ui/RaisedButton';

// noinspection HtmlUnknownAttribute
const GetJoke = ({ joke, onClick }) => (
  <div>
    <RaisedButton primary label="Get Joke" onClick={onClick} />
    <h2><span dangerouslySetInnerHTML={{ __html: joke }} /></h2>
  </div>
);

GetJoke.propTypes = {
  joke: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  joke: state.joke
});

export default connect(mapStateToProps, { onClick: getJoke })(GetJoke);
