// @flow
import { describe, it } from 'mocha';
import { expect } from 'chai';
import { takeEvery, put, call } from 'redux-saga/effects';
import { getRandomJokeApi } from '../apis';
import getJokeAsyncSaga, { getJokeAsync } from './get-joke';
import { ACTION_TYPES, getJokeSucceeded, getJokeFailed } from '../actions';

describe('Chuck Norris', () => {
  describe('Saga', () => {
    describe('getJokeAsyncSaga', () => {
      it('given GET_JOKE, should trigger getJokeAsync', () => {
        const gen = getJokeAsyncSaga();

        expect(gen.next().value).to.deep.equal(takeEvery(ACTION_TYPES.GET_JOKE, getJokeAsync));
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
});
