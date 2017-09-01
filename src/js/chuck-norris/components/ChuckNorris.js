// @flow
import React from 'react';
import GetJokeContainer from './GetJoke';
import chuckNorrisImage from '../../../img/chuck-norris.jpg';
import Container from '../../app/components/Container';

export default () => (
  <Container>
    <h1>Chuck Norris</h1>

    <p>This view demonstrates the use of Saga, an implementation of Side Effects middleware.</p>
    <img src={chuckNorrisImage} alt="Chuck Norris" style={{ float: 'left' }} />
    <GetJokeContainer />
  </Container>
);
