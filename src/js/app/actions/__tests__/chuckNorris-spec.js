// @flow
import { describe, it } from 'mocha';
import { expect } from 'chai';
import { chuckNorris } from '..';

describe('Chuck Norris', () => {
  describe('Actions', () => {
    describe('getJoke', () => {
      it('given invocation, should reset state and set completed to false', () => {
        expect(chuckNorris.getJoke()).to.deep.equal({
          type: chuckNorris.ACTION_TYPES.GET_JOKE,
          state: {
            completed: false,
            joke: null,
            error: null,
          },
        });
      });
    });

    describe('getJokeFailed', () => {
      it('given invocation, should not have joke', () => {
        expect(chuckNorris.getJokeFailed('error')).to.deep.equal({
          type: chuckNorris.ACTION_TYPES.GET_JOKE_FAILED,
          state: {
            completed: true,
            joke: null,
            error: 'error',
          },
        });
      });
    });

    describe('getJokeSucceeded', () => {
      it('given invocation, should not have error', () => {
        expect(chuckNorris.getJokeSucceeded('joke')).to.deep.equal({
          type: chuckNorris.ACTION_TYPES.GET_JOKE_SUCCEEDED,
          state: {
            completed: true,
            joke: 'joke',
            error: null,
          },
        });
      });
    });
  });
});
