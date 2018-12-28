// @flow
import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import chuckNorrisImage from '../../../img/chuck-norris.jpg';
import type { ChuckNorrisState } from '../../app/states/types';
import type { GetJokeFn } from '../../app/actions/types';

type Props = $ReadOnly<{|
  chuckNorris: ChuckNorrisState,
  onGetJoke: GetJokeFn,
|}>;

const ChuckNorris = ({ chuckNorris, onGetJoke }: Props) => (
  <div>
    <Typography variant="h3" gutterBottom>
      Chuck Norris
    </Typography>

    <Typography gutterBottom>This view demonstrates async action using epics and RxJS.</Typography>

    <Grid container spacing={24} style={{ textAlign: 'center' }}>
      <Grid item md={4} sm={12}>
        <img src={chuckNorrisImage} alt="Chuck Norris" />

        <br />
        <br />

        <Button variant="contained" color="primary" onClick={onGetJoke}>
          Get Joke
        </Button>
      </Grid>
      <Grid item md={8} sm={12} style={{ flex: 1 }}>
        {!chuckNorris.completed ? (
          <div>
            <br />
            <CircularProgress />
          </div>
        ) : null}
        {chuckNorris.joke ? (
          <Typography variant="h4" gutterBottom>
            {chuckNorris.joke}
          </Typography>
        ) : null}
        {chuckNorris.error ? (
          <Typography variant="h4" gutterBottom color="accent">
            An error has occurred: {chuckNorris.error}
          </Typography>
        ) : null}
      </Grid>
    </Grid>
  </div>
);

export default ChuckNorris;
