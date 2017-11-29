// @flow
import React, { type Element } from 'react';
import { Route, Switch } from 'react-router-dom';
import LayoutContainer from '../../layout/components/Layout';
import Home from '../../layout/components/Home';
import TodoManager from '../../todo-manager/components/TodoManager';
import ChuckNorrisContainer from '../../chuck-norris/components/ChuckNorris';
import PageNotFoundErrorContainer from '../../error/components/PageNotFoundError';
import UnexpectedErrorContainer from '../../error/components/UnexpectedError';

const App = (): Element<*> => (
  <LayoutContainer>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/chuck-norris" component={ChuckNorrisContainer} />
      <Route exact path="/todo-manager" component={TodoManager} />
      <Route exact path="/error/page-not-found" component={PageNotFoundErrorContainer} />
      <Route exact path="/error/unexpected" component={UnexpectedErrorContainer} />
      <Route path="*" to="/error/page-not-found" />
    </Switch>
  </LayoutContainer>
);

export default App;
