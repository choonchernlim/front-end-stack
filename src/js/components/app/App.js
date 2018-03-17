// @flow
import React, { type Element } from 'react';
import { Route, Switch } from 'react-router-dom';
import LayoutContainer from '../layout/Layout';
import Home from '../layout/Home';
import TodoManager from '../todoManager/TodoManager';
import ChuckNorrisContainer from '../chuckNorris/ChuckNorris';
import PageNotFoundError from '../error/PageNotFoundError';
import UnexpectedError from '../error/UnexpectedError';

const App = (): Element<*> => (
  <LayoutContainer>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/chuck-norris" component={ChuckNorrisContainer} />
      <Route exact path="/todo-manager" component={TodoManager} />
      <Route exact path="/error/unexpected" component={UnexpectedError} />
      <Route component={PageNotFoundError} />
    </Switch>
  </LayoutContainer>
);

export default App;
