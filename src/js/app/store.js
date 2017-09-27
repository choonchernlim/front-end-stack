// @flow
/**
 * Function to configure store and executes sagas.
 */
import type GenericStoreEnchancer from 'redux';
import { applyMiddleware, compose, createStore, StoreCreator } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { createEpicMiddleware } from 'redux-observable';
import reduxDevToolsExtension from './devtools/redux-devtools-extension';
import rootEpic from './epics';
import reducers from './reducers';
import env from './utils/env';

const configureStore = (history: *): StoreCreator => {
  const epicMiddleware = createEpicMiddleware(rootEpic);

  // To allow saga to change use `push(..)` and such to change the routing.
  // See https://github.com/reactjs/react-router-redux#pushlocation-replacelocation-gonumber-goback-goforward
  const routerHistoryMiddleware = routerMiddleware(history);

  let enhancer: GenericStoreEnchancer = applyMiddleware(
    epicMiddleware,
    routerHistoryMiddleware,
  );

  if (!env.isProduction()) {
    enhancer = compose(enhancer, reduxDevToolsExtension());
  }

  return createStore(reducers, enhancer);
};

export default configureStore;
