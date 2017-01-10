// @flow
// TODO LIMC need to figure out flow

export const ACTION_TYPES: { [key: string]: string } = {
  SET_VISIBILITY_FILTER: 'todo-manager/setVisibilityFilter',
  TOGGLE_TODO: 'todo-manager/toggleTodo'
};

export type SetVisibilityFilterAction = {
  type: 'todo-manager/setVisibilityFilter',
  filter: string
};

export type ToggleTodoAction = {
  type: 'todo-manager/toggleTodo',
  id: number
};

export type Action = SetVisibilityFilterAction | ToggleTodoAction;

const todoManager = (state: Object, action: Action): Object => {
  switch (action.type) {
    case 'todo-manager/setVisibilityFilter':
      return state.set('visibilityFilter', action.filter);

    default:
      return state;
  }
};

export default todoManager;
