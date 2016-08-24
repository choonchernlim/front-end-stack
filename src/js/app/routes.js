import React from 'react';
import { Route, IndexRoute } from 'react-router';
import { Layout, Home, TodoManager, ChuckNorris, LookAndFeel } from './components';

const getRoutes = () => (
  <Route path="/" component={Layout}>
    <IndexRoute component={Home} />
    <Route path="look-and-feel" component={LookAndFeel} />
    <Route path="chuck-norris" component={ChuckNorris} />
    <Route path="todo-manager" component={TodoManager} />
  </Route>
);

export default getRoutes;
