import { takeEvery } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import { getRandomJoke } from '../api';

export function* getJokeAsync() {
  const response = yield call(getRandomJoke);
  const json = yield response.json();

  yield put({ type: 'SAVE_JOKE', value: json.value.joke });
}

export default function* getJoke() {
  yield* takeEvery('GET_JOKE', getJokeAsync);
}
