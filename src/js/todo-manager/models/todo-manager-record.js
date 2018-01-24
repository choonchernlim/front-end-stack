// @flow
import { List, Record, type RecordFactory, type RecordOf } from 'immutable';
import type { TodoRecord } from './todo-record';

type TodoManagerProps = {
  todos: List<TodoRecord>,
  visibilityFilter: string,
};

export type TodoManagerRecord = RecordOf<TodoManagerProps>;

const makeTodoManagerRecord: RecordFactory<TodoManagerProps> = Record({
  todos: List(),
  visibilityFilter: 'SHOW_ALL',
});

export default makeTodoManagerRecord;
