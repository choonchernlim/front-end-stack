// @flow
import { describe, it } from 'mocha';
import { expect } from 'chai';
import chuckNorrisReducer from '../chuckNorris';
import { initialChuckNorrisState } from '../../states';
import { chuckNorris } from '../../actions';

describe('Chuck Norris', () => {
  describe('Reducer', () => {
    describe('Default', () => {
      it('given unknown action, should return initial state', () => {
        expect(chuckNorrisReducer(undefined, { type: 'UNKNOWN' }))
          .to.equal(initialChuckNorrisState);
      });
    });

    describe('GET_JOKE', () => {
      it('when getting joke, should set completed to false', () => {
        const initialState = {
          ...initialChuckNorrisState,
          joke: 'joke',
        };

        const actualState = chuckNorrisReducer(initialState, chuckNorris.getJoke());

        const expectedState = {
          ...initialChuckNorrisState,
          completed: false,
        };

        expect(actualState).to.deep.equal(expectedState);
      });
    });

    describe('GET_JOKE_SUCCEEDED', () => {
      it('when invoked, should return new joke', () => {
        const initialState = {
          ...initialChuckNorrisState,
          completed: false,
          joke: 'joke',
        };

        const actualState = chuckNorrisReducer(
          initialState,
          chuckNorris.getJokeSucceeded('new joke'),
        );

        const expectedState = {
          ...initialChuckNorrisState,
          joke: 'new joke',
        };

        expect(actualState).to.deep.equal(expectedState);
      });
    });

    describe('GET_JOKE_FAILED', () => {
      it('when invoked, should return error', () => {
        const initialState = {
          ...initialChuckNorrisState,
          completed: false,
          joke: 'joke',
        };

        const actualState = chuckNorrisReducer(
          initialState,
          chuckNorris.getJokeFailed('error'),
        );

        const expectedState = {
          ...initialChuckNorrisState,
          error: 'error',
        };

        expect(actualState).to.deep.equal(expectedState);
      });
    });
  });
});
