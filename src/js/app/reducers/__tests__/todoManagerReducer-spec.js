// @flow
import { describe, it } from 'mocha';
import { expect } from 'chai';
import { List } from 'immutable';
import todoManagerReducer from '../todoManagerReducer';
import { makeTodoManagerState, makeTodoState } from '../../states';
import { todoManagerActions } from '../../actions';

describe('Todo Manager', () => {
  describe('Reducer', () => {
    describe('Default', () => {
      it('given unknown action, should return initial state', () => {
        expect(todoManagerReducer(undefined, { type: 'UNKNOWN' })).to.deep
          .equal(makeTodoManagerState());
      });
    });

    describe('ADD_TODO', () => {
      it('when adding todo, should return new todo', () => {
        const initialState = makeTodoManagerState();

        const action = todoManagerActions.addTodo('item 1');
        const actualState = todoManagerReducer(initialState, action);

        const expectedState = makeTodoManagerState({
          todos: List([
            makeTodoState({ id: action.id, text: 'item 1', completed: false }),
          ]),
        });

        expect(actualState.toJS()).to.deep.equal(expectedState.toJS());
      });
    });

    describe('TOGGLE_TODO', () => {
      it('when toggling incomplete todo, should return completed flag', () => {
        const initialState = makeTodoManagerState({
          todos: List([
            makeTodoState({ id: 1, text: 'item 1', completed: false }),
            makeTodoState({ id: 2, text: 'item 2', completed: false }),
          ]),
        });

        const actualState = todoManagerReducer(initialState, todoManagerActions.toggleTodo(1));

        const expectedState = makeTodoManagerState({
          todos: List([
            makeTodoState({ id: 1, text: 'item 1', completed: true }),
            makeTodoState({ id: 2, text: 'item 2', completed: false }),
          ]),
        });

        expect(actualState.toJS()).to.deep.equal(expectedState.toJS());
      });
    });

    describe('SET_VISIBILITY_FILTER', () => {
      it('given a filter, should return action', () => {
        const initialState = makeTodoManagerState();

        const actualState = todoManagerReducer(
          initialState,
          todoManagerActions.setVisibilityFilter('ALL'),
        );

        const expectedState = makeTodoManagerState({ visibilityFilter: 'ALL' });

        expect(actualState.toJS()).to.deep.equal(expectedState.toJS());
      });
    });
  });
});
