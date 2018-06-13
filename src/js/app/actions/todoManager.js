// @flow
const ACTION_TYPES = Object.freeze({
  ADD_TODO: 'TODO-MANAGER/ADD-TODO',
  SET_VISIBILITY_FILTER: 'TODO-MANAGER/SET-VISIBILITY-FILTER',
  TOGGLE_TODO: 'TODO-MANAGER/TOGGLE-TODO',
});

type ActionType = $Values<typeof ACTION_TYPES>;

export type AddTodoAction = {|
  +type: ActionType,
  id: number,
  text: string,
|};

export type ToggleTodoAction = {|
  +type: ActionType,
  id: number,
|};

export type SetVisibilityFilterAction = {|
  +type: ActionType,
  filter: string,
|};

type AddTodoFn = (text: string) => AddTodoAction;
type SetVisibilityFilterFn = (filter: string) => SetVisibilityFilterAction;
type ToggleTodoFn = (id: number) => ToggleTodoAction;

let nextTodoId: number = 0;

const addTodo: AddTodoFn = (text) => {
  nextTodoId += 1;
  return {
    type: ACTION_TYPES.ADD_TODO,
    id: nextTodoId,
    text,
  };
};

const setVisibilityFilter: SetVisibilityFilterFn = filter => ({
  type: ACTION_TYPES.SET_VISIBILITY_FILTER,
  filter,
});

const toggleTodo: ToggleTodoFn = id => ({
  type: ACTION_TYPES.TOGGLE_TODO,
  id,
});

const todoManagerAction = {
  ACTION_TYPES,
  addTodo,
  setVisibilityFilter,
  toggleTodo,
};

export default todoManagerAction;
