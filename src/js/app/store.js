/**
 * Function to configure store and executes sagas.
 */
import { applyMiddleware, createStore, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import reduxDevToolsExtension from './redux-devtools-extension';
import sagas from './sagas';
import reducers from './reducers';

export default function configureStore(history) {
  // Initializing saga middleware
  const sagaMiddleware = createSagaMiddleware();

  // To allow saga to change use `push(..)` and such to change the routing.
  // See https://github.com/reactjs/react-router-redux#pushlocation-replacelocation-gonumber-goback-goforward
  const routerHistoryMiddleware = routerMiddleware(history);

  const enhancer = compose(
    applyMiddleware(sagaMiddleware, routerHistoryMiddleware),
    reduxDevToolsExtension()
  );

  // Create store with middlewares
  const store = createStore(reducers, enhancer);

  // Only run all sagas after the saga middleware is mounted to store
  // See https://github.com/yelouafi/redux-saga#mainjs
  sagas.forEach(saga => sagaMiddleware.run(saga));

  return store;
}
