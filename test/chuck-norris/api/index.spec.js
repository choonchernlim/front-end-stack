import { describe, it } from 'mocha';
import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import nock from 'nock';
import {
  RANDOM_JOKE_SERVER,
  RANDOM_JOKE_URI,
  getRandomJokeApi
} from '../../../src/js/chuck-norris/api';

chai.use(chaiAsPromised);

const expect = chai.expect;

describe('getRandomJokeApi', () => {
  it('given valid call, should return value', () => {
    nock(RANDOM_JOKE_SERVER).get(RANDOM_JOKE_URI).reply(200, {
      value: {
        joke: 'ha ha'
      }
    });

    return expect(getRandomJokeApi()).to.eventually.equal('ha ha');
  });

  it('given invalid call, should return error', () => {
    // with `nock v8.0.0`, it doesn't allow `statusText` to be set. So, just throw 400
    // with specific error message
    nock(RANDOM_JOKE_SERVER).get(RANDOM_JOKE_URI).reply(400);

    return expect(getRandomJokeApi()).to.eventually.rejectedWith(Error,
      'Error: Unable to get a random joke: Bad Request');
  });
});

