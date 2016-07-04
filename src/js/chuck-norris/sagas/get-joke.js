import { takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import { getRandomJokeApi } from '../api';
import { GET_JOKE, getJokeSucceed, getJokeFailed } from '../actions';

export function* getJokeAsync() {
  try {
    const joke = yield call(getRandomJokeApi);
    yield put(getJokeSucceed(joke));
  }
  catch (e) {
    yield put(getJokeFailed(e.message));
  }
}

// 1. Unlike `takeEvery`, which allows concurrent get jokes, `takeLatest` ensures if GET_JOKE
//    gets dispatched while a fetch is already pending, that pending fetch is cancelled
//    and only the latest one will be run.
//
// 2. Instead of `yield* takeLatest(GET_JOKE, getJokeAsync);`,
//    using `yield call(takeLatest, GET_JOKE, getJokeAsync);` to make it more testable.
//    See: https://github.com/yelouafi/redux-saga/issues/318
export default function*() {
  yield call(takeLatest, GET_JOKE, getJokeAsync);
}
