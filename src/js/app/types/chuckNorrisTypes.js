// @flow

type ActionTypes = { [key: string]: string };

const ACTION_TYPES: ActionTypes = {
  GET_JOKE: 'CHUCK-NORRIS/GET-JOKE',
  GET_JOKE_FAILED: 'CHUCK-NORRIS/GET-JOKE-FAILED',
  GET_JOKE_SUCCEEDED: 'CHUCK-NORRIS/GET-JOKE-SUCCEEDED',
};

type ActionType = $Keys<typeof ACTION_TYPES>;

export type GetJokeAction = {
  +type: ActionType,
  state: {
    completed: boolean,
    joke?: string,
    error?: string
  }
};

export default ACTION_TYPES;
