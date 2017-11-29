// @flow
import 'typeface-roboto/index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { StoreCreator } from 'redux';
import { Provider } from 'react-redux';
import createBrowserHistory from 'history/createBrowserHistory';
import { ConnectedRouter } from 'react-router-redux';
import configureStore from './store';
import App from './components/App';
import { sanitizeContextRoot } from './utils/url-helper';

const history: * = createBrowserHistory({
  basename: sanitizeContextRoot(),
});

const store: StoreCreator = configureStore(history);

const rootElement = document.getElementById('app');

if (rootElement !== null) {
  ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>,
    rootElement,
  );
}
