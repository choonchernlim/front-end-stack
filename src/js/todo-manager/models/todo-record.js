// @flow
import { Record, type RecordFactory, type RecordOf } from 'immutable';

type TodoProps = {
  id: number,
  text: string,
  completed: boolean,
};

export type TodoRecord = RecordOf<TodoProps>;

const makeTodoRecord: RecordFactory<TodoProps> = Record({
  id: 0,
  text: '',
  completed: false,
});

export default makeTodoRecord;
