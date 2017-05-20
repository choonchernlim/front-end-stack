// @flow
import { Record, List } from 'immutable';

const TodoManagerRecord = Record({
  todos: List(),
  visibilityFilter: 'SHOW_ALL',
});

export default TodoManagerRecord;
