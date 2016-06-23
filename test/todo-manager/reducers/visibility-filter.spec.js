const { describe, it } = global;
import { expect } from 'chai';
import visibilityFilter from '../../../src/js/todo-manager/reducers/visibility-filter';

describe('visibilityFilter', () => {
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
        type: 'SET_VISIBILITY_FILTER',
        filter: 'all'
      })
    ).to.deep.equal('all');
  });
});
