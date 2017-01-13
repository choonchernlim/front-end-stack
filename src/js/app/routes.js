// @flow
import React, { Element } from 'react';
import { Route, IndexRoute } from 'react-router';
import layout from '../layout';
import home from '../home';
import todoManager from '../todo-manager';
import chuckNorris from '../chuck-norris';
import lookAndFeel from '../look-and-feel';

const getRoutes = (): Element<*> => (
  <Route path="/" component={layout.component}>
    <IndexRoute component={home.component} />
    <Route path="look-and-feel" component={lookAndFeel.component} />
    <Route path="chuck-norris" component={chuckNorris.component} />
    <Route path="todo-manager" component={todoManager.component} />
  </Route>
);

export default getRoutes;
