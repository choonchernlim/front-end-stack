// @flow
import React from 'react';
import Typography from 'material-ui/Typography';
import GetJokeContainer from './GetJoke';
import chuckNorrisImage from '../../../img/chuck-norris.jpg';

const ChuckNorris = () => (
  <div>
    <Typography type="display2" gutterBottom>Chuck Norris</Typography>

    <Typography gutterBottom>
      This view demonstrates the use of Saga, an implementation of Side Effects
      middleware.
    </Typography>

    <br /><br />

    <img src={chuckNorrisImage} alt="Chuck Norris" style={{ float: 'left' }} />

    <GetJokeContainer />
  </div>
);

export default ChuckNorris;
