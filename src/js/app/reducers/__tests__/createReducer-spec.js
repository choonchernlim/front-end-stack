// @flow
import { describe, it } from 'mocha';
import { expect } from 'chai';
import createReducer from '../createReducer';
import { ACTIONS } from '../../actions';

describe('Common', () => {
  describe('Utils', () => {
    describe('Create Reducer', () => {
      it('given no handlers, should return existing state', () => {
        const existingState = [];
        const handlers = {};
        const reducer = createReducer(existingState, handlers);

        const actualState = reducer(existingState, { type: ACTIONS.GET_JOKE });

        expect(actualState).to.be.deep.equal(existingState);
      });

      it('given handlers with no matching action, should return existing state', () => {
        const existingState = [];
        const handlers = {
          'DIFFERENT-ACTION': () => ['1'],
        };

        const reducer = createReducer(existingState, handlers);

        const actualState = reducer(existingState, { type: ACTIONS.GET_JOKE });

        expect(actualState).to.be.deep.equal(existingState);
      });

      it('given handlers with matching action, should return new state', () => {
        const existingState = [];
        const expectedState = ['1'];
        const handlers = {
          [ACTIONS.GET_JOKE]: () => expectedState,
        };

        const reducer = createReducer(existingState, handlers);

        const actualState = reducer(existingState, { type: ACTIONS.GET_JOKE });

        expect(actualState).to.be.deep.equal(expectedState);
      });
    });
  });
});
