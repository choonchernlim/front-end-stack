// @flow
import type { State, TodoState } from '../states/types';

export type VisibleTodosFn = (filter: string, todos: Array<TodoState>) => Array<TodoState>;
export type VisibleTodosSelectorFn = (state: State) => VisibleTodosFn;
