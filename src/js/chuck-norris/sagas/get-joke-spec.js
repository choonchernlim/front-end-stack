// @flow
import { describe, it } from 'mocha';
import { testSaga } from 'redux-saga-test-plan';
import { getRandomJokeApi } from '../apis';
import getJokeAsyncSaga, { getJokeAsync } from './get-joke';
import { ACTION_TYPES, getJokeSucceeded, getJokeFailed } from '../actions';

describe('Chuck Norris', () => {
  describe('Saga', () => {
    describe('getJokeAsyncSaga', () => {
      it('given GET_JOKE, should trigger getJokeAsync', () => {
        testSaga(getJokeAsyncSaga)
          .next()
          .takeEveryEffect(ACTION_TYPES.GET_JOKE, getJokeAsync)
          .next()
          .isDone();
      });
    });

    describe('getJokeAsync', () => {
      it('given successful call, should return a joke', () => {
        testSaga(getJokeAsync)
          .next()
          .call(getRandomJokeApi)
          .next('joke')
          .put(getJokeSucceeded('joke'))
          .next()
          .isDone();
      });

      it('given unsuccessful call, should return error message', () => {
        testSaga(getJokeAsync)
          .next()
          .call(getRandomJokeApi)
          .throw({ message: 'error' })
          .put(getJokeFailed('error'))
          .next()
          .isDone();
      });
    });
  });
});
