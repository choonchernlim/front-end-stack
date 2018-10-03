// @flow

export type ChuckNorrisState = {|
  completed: boolean,
  joke: ?string,
  error: ?string,
|};

export type LayoutState = {|
  shouldMenuLeftOpened: boolean,
  isMenuCurrentlyOpened: boolean,
|};

export type TodoState = {|
  id: number,
  text: string,
  completed: boolean,
|};

export type TodoManagerState = {|
  todos: Array<TodoState>,
  visibilityFilter: string,
|};

export type State = {
  layout: LayoutState,
  chuckNorris: ChuckNorrisState,
  todoManager: TodoManagerState,
};
