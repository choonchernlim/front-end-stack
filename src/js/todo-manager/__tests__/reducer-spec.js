// @flow
import { describe, it } from 'mocha';
import { expect } from 'chai';
import { List } from 'immutable';
import reducer from '../reducer';
import TodoManagerRecord from '../models/todo-manager-record';
import TodoRecord from '../models/todo-record';
import { addTodo, setVisibilityFilter, toggleTodo } from '../actions';

describe('Todo Manager', () => {
  describe('Reducer', () => {
    describe('Default', () => {
      it('given unknown action, should return initial state', () => {
        expect(reducer(undefined, { type: 'UNKNOWN' })).to.deep.equal(new TodoManagerRecord());
      });
    });

    describe('ADD_TODO', () => {
      it('when adding todo, should return new todo', () => {
        const initialState = new TodoManagerRecord();

        const action = addTodo('item 1');
        const actualState = reducer(initialState, action);

        const expectedState = new TodoManagerRecord({
          todos: List([
            new TodoRecord({ id: action.id, text: 'item 1', completed: false }),
          ]),
        });

        expect(actualState.toJS()).to.deep.equal(expectedState.toJS());
      });
    });

    describe('TOGGLE_TODO', () => {
      it('when toggling incomplete todo, should return completed flag', () => {
        const initialState = new TodoManagerRecord({
          todos: List([
            new TodoRecord({ id: 1, text: 'item 1', completed: false }),
            new TodoRecord({ id: 2, text: 'item 2', completed: false }),
          ]),
        });

        const actualState = reducer(initialState, toggleTodo(1));

        const expectedState = new TodoManagerRecord({
          todos: List([
            new TodoRecord({ id: 1, text: 'item 1', completed: true }),
            new TodoRecord({ id: 2, text: 'item 2', completed: false }),
          ]),
        });

        expect(actualState.toJS()).to.deep.equal(expectedState.toJS());
      });
    });

    describe('SET_VISIBILITY_FILTER', () => {
      it('given a filter, should return action', () => {
        const initialState = new TodoManagerRecord();

        const actualState = reducer(initialState, setVisibilityFilter('ALL'));

        const expectedState = new TodoManagerRecord({ visibilityFilter: 'ALL' });

        expect(actualState.toJS()).to.deep.equal(expectedState.toJS());
      });
    });
  });
});
