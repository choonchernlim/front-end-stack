// @flow
import type { Element } from 'react';
import React from 'react';
import { IndexRoute, Redirect, Route } from 'react-router';
import Layout from './components/Layout';
import Home from './components/Home';
import TodoManager from '../todo-manager/components/TodoManager';
import ChuckNorris from '../chuck-norris/components/ChuckNorris';
import PageNotFoundErrorContainer from '../error/components/PageNotFoundError';
import UnexpectedErrorContainer from '../error/components/UnexpectedError';

const getRoutes = (): Element<*> => (
  <Route path="/" component={Layout}>
    <IndexRoute component={Home} />
    <Route path="chuck-norris" component={ChuckNorris} />
    <Route path="todo-manager" component={TodoManager} />
    <Route path="error/page-not-found" component={PageNotFoundErrorContainer} />
    <Route path="error/unexpected" component={UnexpectedErrorContainer} />

    <Redirect from="*" to="error/page-not-found" />
  </Route>
);

export default getRoutes;
