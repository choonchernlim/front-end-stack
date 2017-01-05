// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, useRouterHistory } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import { syncHistoryWithStore } from 'react-router-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import configureStore from './store';
import getRoutes from './routes';
import { sanitizeContextRoot } from '../common/utils/url-helper';
import './chrome-react-perf';
import '../../scss/index.scss';

// http://www.material-ui.com/#/get-started/installation
injectTapEventPlugin();

// instead of using `browserHistory` from react-router, create one
// with basename to allow app to specify different context root
const browserHistory = useRouterHistory(createBrowserHistory)({
  basename: sanitizeContextRoot()
});

// configure store
const store = configureStore(browserHistory);

const routes = getRoutes(store);

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>,
  document.getElementById('app')
);
