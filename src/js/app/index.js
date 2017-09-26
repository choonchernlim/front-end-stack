// @flow
import 'typeface-roboto/index.css';
import React, { type Element } from 'react';
import ReactDOM from 'react-dom';
import { StoreCreator } from 'redux';
import { HistoryMiddleware, Provider } from 'react-redux';
import { Router, useRouterHistory } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import { syncHistoryWithStore } from 'react-router-redux';
import configureStore from './store';
import getRoutes from './routes';
import { sanitizeContextRoot } from './utils/url-helper';

// instead of using `browserHistory` from react-router, create one
// with basename to allow app to specify different context root
const browserHistory: HistoryMiddleware = useRouterHistory(createBrowserHistory)({
  basename: sanitizeContextRoot(),
});

// configure store
const store: StoreCreator = configureStore(browserHistory);

const routes: Element<*> = getRoutes();

// Create an enhanced history that syncs navigation events with the store
const history: HistoryMiddleware = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>,
  document.getElementById('app'),
);
