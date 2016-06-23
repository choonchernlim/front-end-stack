const { describe, it } = global;
import { expect } from 'chai';
import { addTodo, setVisibilityFilter, toggleTodo } from '../../../src/js/todo-manager/actions';

describe('addTodo', () => {
  it('given 2 todos, should increment id', () => {
    expect(addTodo('item 1')).to.deep.equal({ type: 'ADD_TODO', id: 1, text: 'item 1' });

    expect(addTodo('item 2')).to.deep.equal({ type: 'ADD_TODO', id: 2, text: 'item 2' });
  });
});

describe('setVisibilityFilter', () => {
  it('given a filter, should return action', () => {
    expect(setVisibilityFilter('all')).to.deep.equal({
      type: 'SET_VISIBILITY_FILTER',
      filter: 'all'
    });
  });
});

describe('toggleTodo', () => {
  it('given an id, should return action', () => {
    expect(toggleTodo(1)).to.deep.equal({ type: 'TOGGLE_TODO', id: 1 });
  });
});
