// @flow

type ActionTypes = { [key: string]: string };

const ACTION_TYPES: ActionTypes = {
  GET_JOKE: 'CHUCK_NORRIS/GET_JOKE',
  GET_JOKE_FAILED: 'CHUCK_NORRIS/GET_JOKE_FAILED',
  GET_JOKE_SUCCEEDED: 'CHUCK_NORRIS/GET_JOKE_SUCCEEDED',
};

type ActionType = $Keys<typeof ACTION_TYPES>;

type GetJokeAction = {
  +type: ActionType,
  state: {
    completed: boolean,
    joke?: string,
    error?: string
  }
};

export type {
  GetJokeAction,
};

export default ACTION_TYPES;
