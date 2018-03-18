// @flow
import React, { type Element } from 'react';
import { Route, Switch } from 'react-router-dom';
import LayoutConnected from '../layout';
import Home from '../home';
import TodoManager from '../todoManager';
import ChuckNorrisConnected from '../chuckNorris/ChuckNorrisConnected';
import { PageNotFoundError, UnexpectedError } from '../error';

const App = (): Element<*> => (
  <LayoutConnected>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/chuck-norris" component={ChuckNorrisConnected} />
      <Route exact path="/todo-manager" component={TodoManager} />
      <Route exact path="/error/unexpected" component={UnexpectedError} />
      <Route component={PageNotFoundError} />
    </Switch>
  </LayoutConnected>
);

export default App;
