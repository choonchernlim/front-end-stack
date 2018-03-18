// @flow
import { describe, it } from 'mocha';
import { expect } from 'chai';
import { chuckNorrisAction } from '../../actions';

describe('Chuck Norris', () => {
  describe('Actions', () => {
    describe('getJoke', () => {
      it('given invocation, should reset state and set completed to false', () => {
        expect(chuckNorrisAction.getJoke()).to.deep.equal({
          type: chuckNorrisAction.ACTION_TYPES.GET_JOKE,
          state: {
            completed: false,
            joke: undefined,
            error: undefined,
          },
        });
      });
    });

    describe('getJokeFailed', () => {
      it('given invocation, should not have joke', () => {
        expect(chuckNorrisAction.getJokeFailed('error')).to.deep.equal({
          type: chuckNorrisAction.ACTION_TYPES.GET_JOKE_FAILED,
          state: {
            completed: true,
            joke: undefined,
            error: 'error',
          },
        });
      });
    });

    describe('getJokeSucceeded', () => {
      it('given invocation, should not have error', () => {
        expect(chuckNorrisAction.getJokeSucceeded('joke')).to.deep.equal({
          type: chuckNorrisAction.ACTION_TYPES.GET_JOKE_SUCCEEDED,
          state: {
            completed: true,
            joke: 'joke',
            error: undefined,
          },
        });
      });
    });
  });
});
