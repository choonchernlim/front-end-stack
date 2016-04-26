import { applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import chuckNorrisSaga from '../chuck-norris';

const sagaMiddleware = createSagaMiddleware();

export default applyMiddleware(sagaMiddleware);

export function* runSagaMiddleware() {
  sagaMiddleware.run(chuckNorrisSaga);
}
