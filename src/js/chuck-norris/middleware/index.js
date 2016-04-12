import getJoke from './get-joke';
import createSagaMiddleware from 'redux-saga';

export default createSagaMiddleware(getJoke);
