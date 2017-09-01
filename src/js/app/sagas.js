// @flow
import chuckNorris from '../chuck-norris/sagas';

// flatten nested arrays
const sagas: Function[] = [].concat(
  ...[
    chuckNorris,
  ],
);

export default sagas;
