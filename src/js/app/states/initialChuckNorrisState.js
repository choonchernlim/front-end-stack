// @flow

export type ChuckNorrisState = {|
  completed: boolean,
  joke: ?string,
  error: ?string,
|};

const initialChuckNorrisState: ChuckNorrisState = Object.freeze({
  completed: true,
  joke: null,
  error: null,
});

export default initialChuckNorrisState;
