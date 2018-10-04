// @flow
import { describe, it } from 'mocha';
import { expect } from 'chai';
import todoManagerReducer, { initialState } from '../todoManagerReducer';
import actions, { ACTIONS } from '../../actions';

describe('Todo Manager', () => {
  describe('Reducer', () => {
    describe('Default', () => {
      it('given unknown action, should return initial state', () => {
        expect(todoManagerReducer(undefined, { type: ACTIONS.GET_JOKE })).to.equal(initialState);
      });
    });

    describe('ADD_TODO', () => {
      it('when adding todo, should return new todo', () => {
        const currentState = initialState;

        const action = actions.addTodo('item 1');
        const actualState = todoManagerReducer(currentState, action);

        const expectedState = {
          ...initialState,
          todos: [
            {
              id: action.id,
              text: 'item 1',
              completed: false,
            },
          ],
        };

        expect(actualState).to.deep.equal(expectedState);
      });
    });

    describe('TOGGLE_TODO', () => {
      it('when toggling incomplete todo, should return completed flag', () => {
        const currentState = {
          ...initialState,
          todos: [
            {
              id: 1,
              text: 'item 1',
              completed: false,
            },
            {
              id: 2,
              text: 'item 2',
              completed: false,
            },
          ],
        };

        const actualState = todoManagerReducer(currentState, actions.toggleTodo(1));

        const expectedState = {
          ...initialState,
          todos: [
            {
              id: 1,
              text: 'item 1',
              completed: true,
            },
            {
              id: 2,
              text: 'item 2',
              completed: false,
            },
          ],
        };

        expect(actualState).to.deep.equal(expectedState);
      });
    });

    describe('SET_VISIBILITY_FILTER', () => {
      it('given a filter, should return action', () => {
        const actualState = todoManagerReducer(initialState, actions.setVisibilityFilter('ALL'));

        const expectedState = {
          ...initialState,
          visibilityFilter: 'ALL',
        };

        expect(actualState).to.deep.equal(expectedState);
      });
    });
  });
});
