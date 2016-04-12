import { describe, it } from 'mocha';
import fetch from 'isomorphic-fetch';
import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import nock from 'nock';

chai.use(chaiAsPromised);

const expect = chai.expect;

const error = new Error('Error from server');

const funcToBeTested = () => fetch('http://server/api')
  .then((response) => {
    if (response.status >= 400) {
      throw error;
    }

    return response.text();
  });

describe('ismorphic-fetch', () => {
  it('given valid api, should return value', () => {
    nock('http://server').get('/api').reply(200, 'hello');

    return expect(funcToBeTested()).to.eventually.equal('hello');
  });

  it('given invalid api, should return error', () => {
    nock('http://server').get('/api').reply(400);

    return expect(funcToBeTested()).to.eventually.rejectedWith(error);
  });
});

