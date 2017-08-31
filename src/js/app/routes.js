// @flow
import type { Element } from 'react';
import React from 'react';
import { IndexRoute, Route } from 'react-router';
import Layout from './components/Layout';
import Home from './components/Home';
import TodoManager from '../todo-manager/components/TodoManager';
import ChuckNorris from '../chuck-norris/components/ChuckNorris';

const getRoutes = (): Element<*> => (
  <Route path="/" component={Layout}>
    <IndexRoute component={Home} />
    <Route path="chuck-norris" component={ChuckNorris} />
    <Route path="todo-manager" component={TodoManager} />
  </Route>
);

export default getRoutes;
