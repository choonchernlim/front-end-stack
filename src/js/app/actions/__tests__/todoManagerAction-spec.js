// @flow
import { describe, it } from 'mocha';
import { expect } from 'chai';
import { todoManagerAction } from '../../actions';

describe('Todo Manager', () => {
  describe('Actions', () => {
    describe('addTodo', () => {
      it('given 2 todos, should increment id', () => {
        expect(todoManagerAction.addTodo('item 1')).to.deep.equal({
          type: todoManagerAction.ACTION_TYPES.ADD_TODO,
          id: 1,
          text: 'item 1',
        });

        expect(todoManagerAction.addTodo('item 2')).to.deep.equal({
          type: todoManagerAction.ACTION_TYPES.ADD_TODO,
          id: 2,
          text: 'item 2',
        });
      });
    });

    describe('setVisibilityFilter', () => {
      it('given a filter, should return action', () => {
        expect(todoManagerAction.setVisibilityFilter('all')).to.deep.equal({
          type: todoManagerAction.ACTION_TYPES.SET_VISIBILITY_FILTER,
          filter: 'all',
        });
      });
    });

    describe('toggleTodo', () => {
      it('given an id, should return action', () => {
        expect(todoManagerAction.toggleTodo(1)).to.deep
          .equal({ type: todoManagerAction.ACTION_TYPES.TOGGLE_TODO, id: 1 });
      });
    });
  });
});
