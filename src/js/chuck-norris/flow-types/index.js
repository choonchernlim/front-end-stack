declare type GetJokeAction = {
  type: string
};

declare type GetJokeFailedAction = {
  type: string,
  error: string
};

declare type GetJokeSucceededAction = {
  type: string,
  joke: string
};
