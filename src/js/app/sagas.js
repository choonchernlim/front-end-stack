import chuckNorris from '../chuck-norris';

// flatten nested arrays
const sagas = [].concat(
  ...[
    chuckNorris.sagas
  ]
);

export default sagas;
