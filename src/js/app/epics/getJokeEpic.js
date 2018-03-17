// @flow
import { Observable, type AjaxError } from 'rxjs';
import ACTION_TYPES from '../types/chuckNorrisTypes';
import { getJokeFailed, getJokeSucceeded } from '../actions/chuckNorrisActions';
import { type Apis } from '../apis';

const getJokeEpic = (action$: Observable, store: *, { chuckNorrisApis }: Apis) => action$
  .ofType(ACTION_TYPES.GET_JOKE)
  .mergeMap(() => chuckNorrisApis.getJoke()
    .map((value: string) => getJokeSucceeded(value))
    .catch((error: AjaxError) => Observable.of(getJokeFailed(error.message))));

export default getJokeEpic;
