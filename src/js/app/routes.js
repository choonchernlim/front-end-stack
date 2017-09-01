// @flow
import type { Element } from 'react';
import React from 'react';
import { IndexRoute, Route, Redirect } from 'react-router';
import Layout from './components/Layout';
import Home from './components/Home';
import TodoManager from '../todo-manager/components/TodoManager';
import ChuckNorris from '../chuck-norris/components/ChuckNorris';
import NotFoundError from '../error/components/NotFoundError';

const getRoutes = (): Element<*> => (
  <Route path="/" component={Layout}>
    <IndexRoute component={Home} />
    <Route path="chuck-norris" component={ChuckNorris} />
    <Route path="todo-manager" component={TodoManager} />
    <Route path="error/page-not-found" component={NotFoundError} />

    <Redirect from="*" to="error/page-not-found" />
  </Route>
);

export default getRoutes;
