import { describe, it } from 'mocha';
import { expect } from 'chai';
import { takeLatest } from 'redux-saga';
import { put, call } from 'redux-saga/effects';
import { getRandomJokeApi } from '../../../src/js/chuck-norris/api';
import getJokeAsyncSaga, { getJokeAsync } from '../../../src/js/chuck-norris/sagas/get-joke';
import { GET_JOKE, getJokeSucceeded, getJokeFailed } from '../../../src/js/chuck-norris/actions';

describe('Chuck Norris => Saga', () => {
  describe('getJokeAsyncSaga', () => {
    it('given GET_JOKE, should trigger getJokeAsync', () => {
      const gen = getJokeAsyncSaga();

      expect(gen.next().value).to.deep.equal(call(takeLatest, GET_JOKE, getJokeAsync));
      expect(gen.next()).to.deep.equal({ done: true, value: undefined });
    });
  });

  describe('getJokeAsync', () => {
    it('given successful call, should return a joke', () => {
      const gen = getJokeAsync();

      expect(gen.next().value).to.deep.equal(call(getRandomJokeApi));
      expect(gen.next('joke').value).to.deep.equal(put(getJokeSucceeded('joke')));
      expect(gen.next()).to.deep.equal({ done: true, value: undefined });
    });

    it('given unsuccessful call, should return error message', () => {
      const gen = getJokeAsync();

      expect(gen.next().value).to.deep.equal(call(getRandomJokeApi));
      expect(gen.throw({ message: 'error' }).value).to.deep.equal(put(getJokeFailed('error')));
      expect(gen.next()).to.deep.equal({ done: true, value: undefined });
    });
  });
});
