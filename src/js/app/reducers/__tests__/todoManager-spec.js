// @flow
import { describe, it } from 'mocha';
import { expect } from 'chai';
import todoManagerReducer from '../todoManager';
import { initialTodoManagerState, initialTodoState } from '../../states';
import { todoManager } from '../../actions';

describe('Todo Manager', () => {
  describe('Reducer', () => {
    describe('Default', () => {
      it('given unknown action, should return initial state', () => {
        expect(todoManagerReducer(undefined, { type: 'UNKNOWN' }))
          .to.equal(initialTodoManagerState);
      });
    });

    describe('ADD_TODO', () => {
      it('when adding todo, should return new todo', () => {
        const initialState = initialTodoManagerState;

        const action = todoManager.addTodo('item 1');
        const actualState = todoManagerReducer(initialState, action);

        const expectedState = {
          ...initialTodoManagerState,
          todos: [
            {
              ...initialTodoState,
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
        const initialState = {
          ...initialTodoManagerState,
          todos: [
            {
              ...initialTodoState,
              id: 1,
              text: 'item 1',
              completed: false,
            },
            {
              ...initialTodoState,
              id: 2,
              text: 'item 2',
              completed: false,
            },
          ],
        };

        const actualState = todoManagerReducer(initialState, todoManager.toggleTodo(1));

        const expectedState = {
          ...initialTodoManagerState,
          todos: [
            {
              ...initialTodoState,
              id: 1,
              text: 'item 1',
              completed: true,
            },
            {
              ...initialTodoState,
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
        const initialState = initialTodoManagerState;

        const actualState = todoManagerReducer(
          initialState,
          todoManager.setVisibilityFilter('ALL'),
        );

        const expectedState = {
          ...initialTodoManagerState,
          visibilityFilter: 'ALL',
        };

        expect(actualState).to.deep.equal(expectedState);
      });
    });
  });
});
