// @flow
import { describe, it, afterEach, beforeEach } from 'mocha';
import nock from 'nock';
import { expect } from 'chai';
import { JSDOM } from 'jsdom';
import apis, { RANDOM_JOKE_SERVER, RANDOM_JOKE_URI } from '../apis';

const { window } = new JSDOM('', { url: RANDOM_JOKE_SERVER });

describe('Chuck Norris', () => {
  describe('APIs', () => {
    describe('getJoke', () => {
      beforeEach(() => {
        global.window = window;
      });

      afterEach(() => {
        global.window = undefined;
        nock.cleanAll();
      });

      it('given successful call, should return value', (done) => {
        nock(RANDOM_JOKE_SERVER).get(RANDOM_JOKE_URI).reply(200, {
          value: {
            joke: '&lt;YAY&gt;',
          },
        });

        apis.getJoke().subscribe(
          (actualValue) => {
            expect(actualValue).to.deep.equal('<YAY>');
            done();
          },
          (error) => {
            expect(error).to.be.an('undefined');
            done();
          },
        );
      });

      it('given failed call, should not return value', (done) => {
        nock(RANDOM_JOKE_SERVER).get(RANDOM_JOKE_URI).reply(400);

        apis.getJoke().subscribe(
          (actualValue) => {
            expect.fail(actualValue, undefined, 'Should not have value');
            done();
          },
          (error) => {
            expect(error).to.not.be.an('undefined');
            done();
          },
        );
      });
    });
  });
});
