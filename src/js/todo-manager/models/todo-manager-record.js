import { Record, List } from 'immutable';

const TodoManagerRecord = Record({
  todos: new List(),
  visibilityFilter: 'SHOW_ALL'
});

export default TodoManagerRecord;
