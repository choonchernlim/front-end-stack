// @flow
import { connect } from 'react-redux';
import actions from '../../app/actions';
import stateSelector from '../../app/states';
import ChuckNorris from './ChuckNorris';

const mapStateToProps = state => ({
  joke: stateSelector.chuckNorris.joke(state),
  error: stateSelector.chuckNorris.error(state),
  completed: stateSelector.chuckNorris.completed(state),
});

const mapDispatchToProps = {
  onGetJoke: actions.getJoke,
};

const ChuckNorrisConnected = connect(mapStateToProps, mapDispatchToProps)(ChuckNorris);

export default ChuckNorrisConnected;
