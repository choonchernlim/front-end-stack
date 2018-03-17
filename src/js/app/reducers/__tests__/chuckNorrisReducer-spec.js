// @flow
import { describe, it } from 'mocha';
import { expect } from 'chai';
import chuckNorrisReducer from '../chuckNorrisReducer';
import makeChuckNorrisRecord from '../../records/makeChuckNorrisRecord';
import { getJoke, getJokeFailed, getJokeSucceeded } from '../../actions/chuckNorrisActions';

describe('Chuck Norris', () => {
  describe('Reducer', () => {
    describe('Default', () => {
      it('given unknown action, should return initial state', () => {
        expect(chuckNorrisReducer(undefined, { type: 'UNKNOWN' })).to.deep
          .equal(makeChuckNorrisRecord());
      });
    });

    describe('GET_JOKE', () => {
      it('when getting joke, should set completed to false', () => {
        const initialState = makeChuckNorrisRecord({
          completed: true,
          joke: 'joke',
        });

        const actualState = chuckNorrisReducer(initialState, getJoke());
        const expectedState = makeChuckNorrisRecord({ completed: false });

        expect(actualState.toJS()).to.deep.equal(expectedState.toJS());
      });
    });

    describe('GET_JOKE_SUCCEEDED', () => {
      it('when invoked, should return new joke', () => {
        const initialState = makeChuckNorrisRecord({
          completed: false,
          joke: 'joke',
        });

        const actualState = chuckNorrisReducer(initialState, getJokeSucceeded('new joke'));
        const expectedState = makeChuckNorrisRecord({
          completed: true,
          joke: 'new joke',
        });

        expect(actualState.toJS()).to.deep.equal(expectedState.toJS());
      });
    });

    describe('GET_JOKE_FAILED', () => {
      it('when invoked, should return error', () => {
        const initialState = makeChuckNorrisRecord({
          completed: false,
          joke: 'joke',
        });

        const actualState = chuckNorrisReducer(initialState, getJokeFailed('error'));
        const expectedState = makeChuckNorrisRecord({
          completed: true,
          joke: undefined,
          error: 'error',
        });

        expect(actualState.toJS()).to.deep.equal(expectedState.toJS());
      });
    });
  });
});
