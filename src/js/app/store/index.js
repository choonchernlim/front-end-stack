// @flow
/**
 * Function to configure store and executes sagas.
 */
import type { GenericStoreEnchancer } from 'redux';
import { applyMiddleware, compose, createStore, StoreCreator } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import { createEpicMiddleware } from 'redux-observable';
import reduxDevToolsExtension from './reduxDevtoolsExtension';
import rootEpic from '../epics/index';
import reducers from '../reducers/index';
import env from '../utils/env';

const configureStore = (history: *): StoreCreator => {
  const epicMiddleware = createEpicMiddleware();

  const routerHistoryMiddleware = routerMiddleware(history);

  let enhancer: GenericStoreEnchancer = applyMiddleware(epicMiddleware, routerHistoryMiddleware);

  if (!env.isProduction()) {
    enhancer = compose(
      enhancer,
      reduxDevToolsExtension(),
    );
  }

  const store = createStore(reducers(history), enhancer);

  epicMiddleware.run(rootEpic);

  return store;
};

export default configureStore;
