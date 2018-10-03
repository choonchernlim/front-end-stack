// @flow
import { describe, it } from 'mocha';
import { expect } from 'chai';
import chuckNorrisReducer, { initialState } from '../chuckNorrisReducer';
import actions, { ACTIONS } from '../../actions';

describe('Chuck Norris', () => {
  describe('Reducer', () => {
    describe('Default', () => {
      it('given unknown action, should return initial state', () => {
        expect(chuckNorrisReducer(undefined, { type: ACTIONS.MENU_LEFT_OPENED }))
          .to.equal(initialState);
      });
    });

    describe('GET_JOKE', () => {
      it('when getting joke, should set completed to false', () => {
        const currentState = {
          ...initialState,
          joke: 'joke',
        };

        const actualState = chuckNorrisReducer(
          currentState,
          actions.getJoke(),
        );

        const expectedState = {
          ...initialState,
          completed: false,
        };

        expect(actualState).to.deep.equal(expectedState);
      });
    });

    describe('GET_JOKE_SUCCEEDED', () => {
      it('when invoked, should return new joke', () => {
        const currentState = {
          ...initialState,
          completed: false,
          joke: 'joke',
        };

        const actualState = chuckNorrisReducer(
          currentState,
          actions.getJokeSucceeded('new joke'),
        );

        const expectedState = {
          ...initialState,
          joke: 'new joke',
        };

        expect(actualState).to.deep.equal(expectedState);
      });
    });

    describe('GET_JOKE_FAILED', () => {
      it('when invoked, should return error', () => {
        const currentState = {
          ...initialState,
          completed: false,
          joke: 'joke',
        };

        const actualState = chuckNorrisReducer(
          currentState,
          actions.getJokeFailed('error'),
        );

        const expectedState = {
          ...initialState,
          error: 'error',
        };

        expect(actualState).to.deep.equal(expectedState);
      });
    });
  });
});
