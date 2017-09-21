// @flow
import React, { type Element } from 'react';
import { IndexRoute, Redirect, Route } from 'react-router';
import LayoutContainer from '../layout/components/Layout';
import Home from '../layout/components/Home';
import TodoManager from '../todo-manager/components/TodoManager';
import ChuckNorrisContainer from '../chuck-norris/components/ChuckNorris';
import PageNotFoundErrorContainer from '../error/components/PageNotFoundError';
import UnexpectedErrorContainer from '../error/components/UnexpectedError';

const getRoutes = (): Element<*> => (
  <Route path="/" component={LayoutContainer}>
    <IndexRoute component={Home} />
    <Route path="chuck-norris" component={ChuckNorrisContainer} />
    <Route path="todo-manager" component={TodoManager} />
    <Route path="error/page-not-found" component={PageNotFoundErrorContainer} />
    <Route path="error/unexpected" component={UnexpectedErrorContainer} />

    <Redirect from="*" to="error/page-not-found" />
  </Route>
);

export default getRoutes;
