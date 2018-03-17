// @flow
import { List, Record, type RecordFactory, type RecordOf } from 'immutable';
import type { TodoState } from './makeTodoState';

type TodoManagerProps = {
  todos: List<TodoState>,
  visibilityFilter: string,
};

export type TodoManagerState = RecordOf<TodoManagerProps>;

const makeTodoManagerState: RecordFactory<TodoManagerProps> = Record({
  todos: List(),
  visibilityFilter: 'SHOW_ALL',
});

export default makeTodoManagerState;
