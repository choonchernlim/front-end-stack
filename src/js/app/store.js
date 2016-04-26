import { createStore } from 'redux';
import reducer from './reducer';
import middleware, { runSagaMiddleware } from './middleware';

export default createStore(reducer, middleware);

runSagaMiddleware();
