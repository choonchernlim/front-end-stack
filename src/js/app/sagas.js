// @flow
import chuckNorris from '../chuck-norris';

// flatten nested arrays
const sagas: Function[] = [].concat(
  ...[
    chuckNorris.sagas
  ]
);

export default sagas;
