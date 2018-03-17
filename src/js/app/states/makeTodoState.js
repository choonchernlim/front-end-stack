// @flow
import { Record, type RecordFactory, type RecordOf } from 'immutable';

type TodoProps = {
  id: number,
  text: string,
  completed: boolean,
};

export type TodoState = RecordOf<TodoProps>;

const makeTodoState: RecordFactory<TodoProps> = Record({
  id: 0,
  text: '',
  completed: false,
});

export default makeTodoState;
