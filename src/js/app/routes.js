// @flow
import React, { Element } from 'react';
import { Route, IndexRoute } from 'react-router';
import Layout from '../layout/components/Layout';
import Home from '../home/components/Home';
import TodoManager from '../todo-manager/components/TodoManager';
import ChuckNorris from '../chuck-norris/components/ChuckNorris';
import LookAndFeel from '../look-and-feel/components/LookAndFeel';

const getRoutes = (): Element<*> => (
  <Route path="/" component={Layout}>
    <IndexRoute component={Home} />
    <Route path="look-and-feel" component={LookAndFeel} />
    <Route path="chuck-norris" component={ChuckNorris} />
    <Route path="todo-manager" component={TodoManager} />
  </Route>
);

export default getRoutes;
