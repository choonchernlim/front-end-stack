import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Layout, Home, TodoManager, ChuckNorris, LookAndFeel } from './component';
import store from './store';
import '../../scss/index.scss';

// http://www.material-ui.com/#/get-started/installation
injectTapEventPlugin();

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Layout}>
        <IndexRoute component={Home} />
        <Route path="look-and-feel" component={LookAndFeel} />
        <Route path="chuck-norris" component={ChuckNorris} />
        <Route path="todo-manager" component={TodoManager} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
