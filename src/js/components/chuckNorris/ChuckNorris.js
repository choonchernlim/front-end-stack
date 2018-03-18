// @flow
import React from 'react';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
import { CircularProgress } from 'material-ui/Progress';
import chuckNorrisImage from '../../../img/chuck-norris.jpg';

type Props = {
  joke: ?string,
  error: ?string,
  completed: boolean,
  onGetJoke: Function
};

// eslint-disable-next-line object-curly-newline
const ChuckNorris = ({ joke, error, completed, onGetJoke }: Props) => (
  <div>
    <Typography variant="display2" gutterBottom>Chuck Norris</Typography>

    <Typography gutterBottom>
      This view demonstrates async action using redux-observable, RxJS 5-based middleware for
      Redux.
    </Typography>

    <Grid container spacing={24} style={{ textAlign: 'center' }}>
      <Grid item md={4} sm={12}>
        <img src={chuckNorrisImage} alt="Chuck Norris" />

        <br /><br />

        <Button variant="raised" color="primary" onClick={onGetJoke}>Get Joke</Button>
      </Grid>
      <Grid item md={8} sm={12} style={{ flex: 1 }}>
        {!completed ? <div><br /><CircularProgress /></div> : null}
        {joke ? <Typography variant="display1" gutterBottom>{joke}</Typography> : null}
        {error ?
          <Typography variant="display1" gutterBottom color="accent">
            An error has occurred: {error}
          </Typography> :
          null
        }
      </Grid>
    </Grid>
  </div>
);

export default ChuckNorris;
