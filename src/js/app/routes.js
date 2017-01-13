import React from 'react';
import { Route, IndexRoute } from 'react-router';
import components from './components';

const getRoutes = () => (
  <Route path="/" component={components.layout}>
    <IndexRoute component={components.home} />
    <Route path="look-and-feel" component={components.lookAndFeel} />
    <Route path="chuck-norris" component={components.chuckNorris} />
    <Route path="todo-manager" component={components.todoManager} />
  </Route>
);

export default getRoutes;
