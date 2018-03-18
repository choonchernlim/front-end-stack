// @flow
import { describe, it } from 'mocha';
import { expect } from 'chai';
import chuckNorrisReducer from '../chuckNorris';
import { makeChuckNorrisState } from '../../states';
import { chuckNorris } from '../../actions';

describe('Chuck Norris', () => {
  describe('Reducer', () => {
    describe('Default', () => {
      it('given unknown action, should return initial state', () => {
        expect(chuckNorrisReducer(undefined, { type: 'UNKNOWN' })).to.deep
          .equal(makeChuckNorrisState());
      });
    });

    describe('GET_JOKE', () => {
      it('when getting joke, should set completed to false', () => {
        const initialState = makeChuckNorrisState({
          completed: true,
          joke: 'joke',
        });

        const actualState = chuckNorrisReducer(initialState, chuckNorris.getJoke());
        const expectedState = makeChuckNorrisState({ completed: false });

        expect(actualState.toJS()).to.deep.equal(expectedState.toJS());
      });
    });

    describe('GET_JOKE_SUCCEEDED', () => {
      it('when invoked, should return new joke', () => {
        const initialState = makeChuckNorrisState({
          completed: false,
          joke: 'joke',
        });

        const actualState = chuckNorrisReducer(
          initialState,
          chuckNorris.getJokeSucceeded('new joke'),
        );

        const expectedState = makeChuckNorrisState({
          completed: true,
          joke: 'new joke',
        });

        expect(actualState.toJS()).to.deep.equal(expectedState.toJS());
      });
    });

    describe('GET_JOKE_FAILED', () => {
      it('when invoked, should return error', () => {
        const initialState = makeChuckNorrisState({
          completed: false,
          joke: 'joke',
        });

        const actualState = chuckNorrisReducer(
          initialState,
          chuckNorris.getJokeFailed('error'),
        );

        const expectedState = makeChuckNorrisState({
          completed: true,
          joke: undefined,
          error: 'error',
        });

        expect(actualState.toJS()).to.deep.equal(expectedState.toJS());
      });
    });
  });
});
