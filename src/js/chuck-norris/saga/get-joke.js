import { takeEvery } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import { getRandomJoke } from '../api';
import { saveJoke } from '../actions';

export function* getJokeAsync() {
  const response = yield call(getRandomJoke);
  const json = yield response.json();

  yield put(saveJoke(json.value.joke));
}

export default function*() {
  yield* takeEvery('GET_JOKE', getJokeAsync);
}
