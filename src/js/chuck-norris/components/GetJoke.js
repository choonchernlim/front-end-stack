import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { getJoke } from '../actions';
import RaisedButton from 'material-ui/RaisedButton';

// noinspection HtmlUnknownAttribute
const GetJoke = ({ joke, error, onClick }) => {
  const errorMessage = error ? <pre>An error has occurred: {error}</pre> : <pre />;

  return (
    <div>
      <RaisedButton primary label="Get Joke" onClick={onClick} />
      <h2><span dangerouslySetInnerHTML={{ __html: joke }} /></h2>
      {errorMessage}
    </div>
  );
};

GetJoke.propTypes = {
  joke: PropTypes.string.isRequired,
  error: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  joke: state.joke.get('joke'),
  error: state.joke.get('error')
});

export default connect(mapStateToProps, { onClick: getJoke })(GetJoke);
