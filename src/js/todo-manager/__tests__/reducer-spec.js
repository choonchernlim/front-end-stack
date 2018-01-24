// @flow
import { describe, it } from 'mocha';
import { expect } from 'chai';
import { List } from 'immutable';
import reducer from '../reducer';
import makeTodoManagerRecord from '../models/todo-manager-record';
import makeTodoRecord from '../models/todo-record';
import { addTodo, setVisibilityFilter, toggleTodo } from '../actions';

describe('Todo Manager', () => {
  describe('Reducer', () => {
    describe('Default', () => {
      it('given unknown action, should return initial state', () => {
        expect(reducer(undefined, { type: 'UNKNOWN' })).to.deep.equal(makeTodoManagerRecord());
      });
    });

    describe('ADD_TODO', () => {
      it('when adding todo, should return new todo', () => {
        const initialState = makeTodoManagerRecord();

        const action = addTodo('item 1');
        const actualState = reducer(initialState, action);

        const expectedState = makeTodoManagerRecord({
          todos: List([
            makeTodoRecord({ id: action.id, text: 'item 1', completed: false }),
          ]),
        });

        expect(actualState.toJS()).to.deep.equal(expectedState.toJS());
      });
    });

    describe('TOGGLE_TODO', () => {
      it('when toggling incomplete todo, should return completed flag', () => {
        const initialState = makeTodoManagerRecord({
          todos: List([
            makeTodoRecord({ id: 1, text: 'item 1', completed: false }),
            makeTodoRecord({ id: 2, text: 'item 2', completed: false }),
          ]),
        });

        const actualState = reducer(initialState, toggleTodo(1));

        const expectedState = makeTodoManagerRecord({
          todos: List([
            makeTodoRecord({ id: 1, text: 'item 1', completed: true }),
            makeTodoRecord({ id: 2, text: 'item 2', completed: false }),
          ]),
        });

        expect(actualState.toJS()).to.deep.equal(expectedState.toJS());
      });
    });

    describe('SET_VISIBILITY_FILTER', () => {
      it('given a filter, should return action', () => {
        const initialState = makeTodoManagerRecord();

        const actualState = reducer(initialState, setVisibilityFilter('ALL'));

        const expectedState = makeTodoManagerRecord({ visibilityFilter: 'ALL' });

        expect(actualState.toJS()).to.deep.equal(expectedState.toJS());
      });
    });
  });
});
