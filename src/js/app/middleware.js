import { applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import sagas from './saga';

const sagaMiddleware = createSagaMiddleware();

export default applyMiddleware(sagaMiddleware);

export const runSagaMiddleware = () => {
  sagas.forEach(saga => sagaMiddleware.run(saga));
};
