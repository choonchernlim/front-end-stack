// @flow
import { describe, it } from 'mocha';
import { expect } from 'chai';
import { chuckNorrisActions } from '../../actions';

describe('Chuck Norris', () => {
  describe('Actions', () => {
    describe('getJoke', () => {
      it('given invocation, should reset state and set completed to false', () => {
        expect(chuckNorrisActions.getJoke()).to.deep.equal({
          type: chuckNorrisActions.ACTION_TYPES.GET_JOKE,
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
        expect(chuckNorrisActions.getJokeFailed('error')).to.deep.equal({
          type: chuckNorrisActions.ACTION_TYPES.GET_JOKE_FAILED,
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
        expect(chuckNorrisActions.getJokeSucceeded('joke')).to.deep.equal({
          type: chuckNorrisActions.ACTION_TYPES.GET_JOKE_SUCCEEDED,
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
