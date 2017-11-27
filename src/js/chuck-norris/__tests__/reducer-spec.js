// @flow
import { describe, it } from 'mocha';
import { expect } from 'chai';
import reducer from '../reducer';
import ChuckNorrisRecord from '../models/chuck-norris-record';
import { getJoke, getJokeSucceeded, getJokeFailed } from '../actions';

describe('Chuck Norris', () => {
  describe('Reducer', () => {
    describe('Default', () => {
      it('given unknown action, should return initial state', () => {
        expect(reducer(undefined, { type: 'UNKNOWN' })).to.deep.equal(new ChuckNorrisRecord());
      });
    });

    describe('GET_JOKE', () => {
      it('when getting joke, should set completed to false', () => {
        const initialState = new ChuckNorrisRecord({
          completed: true,
          joke: 'joke',
        });

        const actualState = reducer(initialState, getJoke());
        const expectedState = new ChuckNorrisRecord({ completed: false });

        expect(actualState.toJS()).to.deep.equal(expectedState.toJS());
      });
    });

    describe('GET_JOKE_SUCCEEDED', () => {
      it('when invoked, should return new joke', () => {
        const initialState = new ChuckNorrisRecord({
          completed: false,
          joke: 'joke',
        });

        const actualState = reducer(initialState, getJokeSucceeded('new joke'));
        const expectedState = new ChuckNorrisRecord({
          completed: true,
          joke: 'new joke',
        });

        expect(actualState.toJS()).to.deep.equal(expectedState.toJS());
      });
    });

    describe('GET_JOKE_FAILED', () => {
      it('when invoked, should return error', () => {
        const initialState = new ChuckNorrisRecord({
          completed: false,
          joke: 'joke',
        });

        const actualState = reducer(initialState, getJokeFailed('error'));
        const expectedState = new ChuckNorrisRecord({
          completed: true,
          joke: undefined,
          error: 'error',
        });

        expect(actualState.toJS()).to.deep.equal(expectedState.toJS());
      });
    });
  });
});
