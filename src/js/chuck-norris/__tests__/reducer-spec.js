// @flow
import { describe, it } from 'mocha';
import { expect } from 'chai';
import reducer from '../reducer';
import JokeRecord from '../models/joke-record';
import { getJoke, getJokeSucceeded, getJokeFailed } from '../actions';

describe('Chuck Norris', () => {
  describe('Reducer', () => {
    describe('Default', () => {
      it('given unknown action, should return initial state', () => {
        expect(reducer(undefined, { type: 'UNKNOWN' })).to.deep.equal(new JokeRecord());
      });
    });

    describe('GET_JOKE', () => {
      it('when getting joke, should set completed to false', () => {
        const initialState = new JokeRecord({
          completed: true,
          joke: 'joke',
        });

        const actualState = reducer(initialState, getJoke());
        const expectedState = new JokeRecord({ completed: false });

        // $FlowFixMe: Waiting for ImmutableJS to fix `record.toJS()`
        expect(actualState.toJS()).to.deep.equal(expectedState.toJS());
      });
    });

    describe('GET_JOKE_SUCCEEDED', () => {
      it('when invoked, should return new joke', () => {
        const initialState = new JokeRecord({
          completed: false,
          joke: 'joke',
        });

        const actualState = reducer(initialState, getJokeSucceeded('new joke'));
        const expectedState = new JokeRecord({
          completed: true,
          joke: 'new joke',
        });

        // $FlowFixMe: Waiting for ImmutableJS to fix `record.toJS()`
        expect(actualState.toJS()).to.deep.equal(expectedState.toJS());
      });
    });

    describe('GET_JOKE_FAILED', () => {
      it('when invoked, should return error', () => {
        const initialState = new JokeRecord({
          completed: false,
          joke: 'joke',
        });

        const actualState = reducer(initialState, getJokeFailed('error'));
        const expectedState = new JokeRecord({
          completed: true,
          joke: undefined,
          error: 'error',
        });

        // $FlowFixMe: Waiting for ImmutableJS to fix `record.toJS()`
        expect(actualState.toJS()).to.deep.equal(expectedState.toJS());
      });
    });
  });
});
