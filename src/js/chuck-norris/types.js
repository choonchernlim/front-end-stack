// @flow

type State = {
  completed: boolean,
  joke?: string,
  error?: string
};

export type GetJokeAction = {
  type: string,
  state: State
};

export type GetJokeFailedAction = {
  type: string,
  state: State
};

export type GetJokeSucceededAction = {
  type: string,
  state: State
};

export type Action = GetJokeAction | GetJokeFailedAction | GetJokeSucceededAction;
