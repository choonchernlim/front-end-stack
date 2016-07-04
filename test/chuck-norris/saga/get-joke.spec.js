import { describe, it } from 'mocha';
import { expect } from 'chai';
import { put, call } from 'redux-saga/effects';
import { getRandomJokeApi } from '../../../src/js/chuck-norris/api';
import { getJokeAsync } from '../../../src/js/chuck-norris/saga/get-joke';
import { getJokeSucceed, getJokeFailed } from '../../../src/js/chuck-norris/actions';

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
