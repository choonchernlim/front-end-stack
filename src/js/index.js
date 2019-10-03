// @flow
import 'typeface-roboto/index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { StoreCreator } from 'redux';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import { ConnectedRouter } from 'connected-react-router';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import configureStore from './app/store/index';
import App from './components/app/App';
import { sanitizeContextRoot } from './app/utils/urlHelper';
import muiTheme from './app/utils/muiTheme';

const history = createBrowserHistory({
  basename: sanitizeContextRoot(),
});

const store: StoreCreator = configureStore(history);

const rootElement = document.getElementById('app');

if (rootElement !== null) {
  ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <ThemeProvider theme={muiTheme}>
          <App />
        </ThemeProvider>
      </ConnectedRouter>
    </Provider>,
    rootElement,
  );
}
