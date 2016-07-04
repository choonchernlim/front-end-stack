import { describe, it } from 'mocha';
import { expect } from 'chai';
import { takeLatest } from 'redux-saga';
import { put, call } from 'redux-saga/effects';
import { getRandomJokeApi } from '../../../src/js/chuck-norris/api';
import getJokeAsyncSaga, { getJokeAsync } from '../../../src/js/chuck-norris/sagas/get-joke';
import { GET_JOKE, getJokeSucceed, getJokeFailed } from '../../../src/js/chuck-norris/actions';

describe('getJokeAsyncSaga', () => {
  it('given GET_JOKE, should trigger getJokeAsync', () => {
    const generator = getJokeAsyncSaga();

    expect(generator.next().value).to.deep.equal(call(takeLatest, GET_JOKE, getJokeAsync));
    expect(generator.next()).to.deep.equal({ done: true, value: undefined });
  });
});

describe('getJokeAsync', () => {
  it('given successful call, should return a joke', () => {
    const generator = getJokeAsync();

    expect(generator.next().value).to.deep.equal(call(getRandomJokeApi));
    expect(generator.next('joke').value).to.deep.equal(put(getJokeSucceed('joke')));
    expect(generator.next()).to.deep.equal({ done: true, value: undefined });
  });

  it('given unsuccessful call, should return error message', () => {
    const generator = getJokeAsync();

    expect(generator.next().value).to.deep.equal(call(getRandomJokeApi));
    expect(generator.throw({ message: 'error' }).value).to.deep.equal(put(getJokeFailed('error')));
    expect(generator.next()).to.deep.equal({ done: true, value: undefined });
  });
});

