// @flow
/**
 * Function to configure store and executes sagas.
 */
import { applyMiddleware, compose, createStore, GenericStoreEnchancer, StoreCreator } from 'redux';
import { HistoryMiddleware } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
import createSagaMiddleware, { SagaMiddleware } from 'redux-saga';
import reduxDevToolsExtension from './devtools/redux-devtools-extension';
import sagas from './sagas';
import reducers from './reducers';
import env from './utils/env';

const configureStore = (history: HistoryMiddleware): StoreCreator => {
  // Initializing saga middleware
  const sagaMiddleware: SagaMiddleware = createSagaMiddleware();

  // To allow saga to change use `push(..)` and such to change the routing.
  // See https://github.com/reactjs/react-router-redux#pushlocation-replacelocation-gonumber-goback-goforward
  const routerHistoryMiddleware = routerMiddleware(history);

  let enhancer: GenericStoreEnchancer = applyMiddleware(
    sagaMiddleware,
    routerHistoryMiddleware,
  );

  if (!env.isProduction()) {
    enhancer = compose(enhancer, reduxDevToolsExtension());
  }

  // Create store with middlewares
  const store: StoreCreator = createStore(reducers, enhancer);

  // Only run all sagas after the saga middleware is mounted to store
  // See https://github.com/yelouafi/redux-saga#mainjs
  sagas.forEach(saga => sagaMiddleware.run(saga));

  return store;
};

export default configureStore;
