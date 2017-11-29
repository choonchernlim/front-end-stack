// @flow
import React from 'react';
import Typography from 'material-ui/Typography';
import { connect } from 'react-redux';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
import { CircularProgress } from 'material-ui/Progress';
import chuckNorrisImage from '../../../img/chuck-norris.jpg';
import { getJoke } from '../actions';
import stateSelector from '../../app/selectors/state-selector';

type Props = {
  joke: ?string,
  error: ?string,
  completed: boolean,
  onGetJoke: Function
};

const ChuckNorris = ({
  joke, error, completed, onGetJoke,
}: Props) => (
  <div>
    <Typography type="display2" gutterBottom>Chuck Norris</Typography>

    <Typography gutterBottom>
      This view demonstrates async action using redux-observable, RxJS 5-based middleware for
      Redux.
    </Typography>

    <Grid container spacing={24} style={{ textAlign: 'center' }}>
      <Grid item md={4} sm={12}>
        <img src={chuckNorrisImage} alt="Chuck Norris" />

        <br /><br />

        <Button raised color="primary" onClick={onGetJoke}>Get Joke</Button>
      </Grid>
      <Grid item md={8} sm={12} style={{ flex: 1 }}>
        {!completed ? <div><br /><CircularProgress /></div> : null}
        {joke ? <Typography type="display1" gutterBottom>{joke}</Typography> : null}
        {error ?
          <Typography type="display1" gutterBottom color="accent">
            An error has occurred: {error}
          </Typography> :
          null
        }
      </Grid>
    </Grid>
  </div>
);

const mapStateToProps = state => ({
  joke: stateSelector.chuckNorris.joke(state),
  error: stateSelector.chuckNorris.error(state),
  completed: stateSelector.chuckNorris.completed(state),
});

const ChuckNorrisContainer = connect(mapStateToProps, { onGetJoke: getJoke })(ChuckNorris);

export default ChuckNorrisContainer;
