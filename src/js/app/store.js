import { createStore, compose } from 'redux';
import reducer from './reducer';
import middleware, { runSagaMiddleware } from './middleware';
import devToolsExtension from './dev-tools-extension';

export default createStore(reducer, compose(middleware, devToolsExtension()));

runSagaMiddleware();
