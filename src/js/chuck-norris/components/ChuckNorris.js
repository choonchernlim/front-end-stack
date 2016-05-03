import React from 'react';
import { Grid, Cell } from 'radium-grid';
import GetJoke from './GetJoke';
import chuckNorrisImage from '../../../img/chuck-norris.jpg';
import Container from '../../common/components/Container';

const ChuckNorris = () => (
  <Container>
    <h1>Chuck Norris</h1>

    <p>This view demonstrates the use of Saga, an implementation of Side Effects middleware.</p>
    <Grid>
      <Cell width="6/12">
        <GetJoke />
      </Cell>
      <Cell width="6/12" align="right">
        <img src={chuckNorrisImage} alt="Chuck Norris" />
      </Cell>
    </Grid>
  </Container>
);

export default ChuckNorris;
