import { describe, it } from 'mocha';
import { expect } from 'chai';
import { List, fromJS } from 'immutable';
import todos from '../../../src/js/todo-manager/reducers/todos';

describe('todos', () => {
  it('given unknown action, should return initial state', () => {
    expect(todos(undefined, { type: 'UNKNOWN' })).to.deep.equal(new List());
  });

  it('when adding todo, should return new todo', () => {
    expect(
      todos(new List(), {
        type: 'ADD_TODO',
        id: 1,
        text: 'item 1'
      }).toJS()
    ).to.deep.equal([
      {
        id: 1,
        text: 'item 1',
        completed: false
      }
    ]);
  });

  it('when toggling incomplete todo, should return completed flag', () => {
    const initialState = fromJS([
      {
        id: 1,
        text: 'item 1',
        completed: false
      },
      {
        id: 2,
        text: 'item 2',
        completed: false
      }

    ]);

    expect(
      todos(initialState, {
        type: 'TOGGLE_TODO',
        id: 1
      }).toJS()
    ).to.deep.equal([
      {
        id: 1,
        text: 'item 1',
        completed: true
      },
      {
        id: 2,
        text: 'item 2',
        completed: false
      }
    ]);
  });
});
