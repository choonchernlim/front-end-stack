// @flow
import { takeEvery, call, put } from 'redux-saga/effects';
import { getRandomJokeApi } from '../apis';
import { ACTION_TYPES, getJokeSucceeded, getJokeFailed } from '../actions';

// TODO LIMC remove this?
export function* getJokeAsync(): Generator<*, *, *> {
  try {
    const joke: string = yield call(getRandomJokeApi);
    yield put(getJokeSucceeded(joke));
  }
  catch (e) {
    yield put(getJokeFailed(e.message));
  }
}

export default function* getJokeAsyncSaga(): Generator<*, *, *> {
  yield takeEvery(ACTION_TYPES.GET_JOKE, getJokeAsync);
}
