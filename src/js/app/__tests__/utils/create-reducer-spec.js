// @flow
import { describe, it } from 'mocha';
import { expect } from 'chai';
import { List } from 'immutable';
import createReducer from '../../utils/create-reducer';

describe('Common', () => {
  describe('Utils', () => {
    describe('Create Reducer', () => {
      it('given no handlers, should return existing state', () => {
        const existingState = List();
        const handlers = {};
        const reducer = createReducer(existingState, handlers);

        const actualState = reducer(existingState, { type: 'ACTION' });

        expect(actualState).to.be.deep.equal(existingState);
      });

      it('given handlers with no matching action, should return existing state', () => {
        const existingState = List();
        const handlers = {
          'DIFFERENT-ACTION': () => List('1'),
        };

        const reducer = createReducer(existingState, handlers);

        const actualState = reducer(existingState, { type: 'ACTION' });

        expect(actualState).to.be.deep.equal(existingState);
      });

      it('given handlers with matching action, should return new state', () => {
        const existingState = List();
        const expectedState = List('1');
        const handlers = {
          ACTION: () => expectedState,
        };

        const reducer = createReducer(existingState, handlers);

        const actualState = reducer(existingState, { type: 'ACTION' });

        expect(actualState).to.be.deep.equal(expectedState);
      });
    });
  });
});
