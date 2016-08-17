import { describe, it } from 'mocha';
import { expect } from 'chai';
import visibilityFilter from '../../../src/js/todo-manager/reducers/visibility-filter';
import { SET_VISIBILITY_FILTER } from '../../../src/js/todo-manager/actions';

describe('Todo Manager => Reducer => Visibility Filter', () => {
  describe('Default', () => {
    it('given unknown action, should return initial state', () => {
      expect(
        visibilityFilter(undefined, {
          type: 'UNKNOWN'
        })
      ).to.deep.equal('SHOW_ALL');
    });

    it('given a filter, should return action', () => {
      expect(
        visibilityFilter('INITIAL', {
          type: SET_VISIBILITY_FILTER,
          filter: 'all'
        })
      ).to.deep.equal('all');
    });
  });
});
