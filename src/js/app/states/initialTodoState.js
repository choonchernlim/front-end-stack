// @flow

export type TodoState = {
  id: number,
  text: string,
  completed: boolean,
};

const initialTodoState: TodoState = Object.freeze({
  id: 0,
  text: '',
  completed: false,
});

export default initialTodoState;
