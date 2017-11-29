// @flow
import { Observable, type AjaxError } from 'rxjs';
import { ACTION_TYPES, getJokeFailed, getJokeSucceeded } from '../actions';
import { type Apis } from '../../app/apis';

const getJokeEpic = (action$: Observable, store: *, { chuckNorrisApis }: Apis) => action$
  .ofType(ACTION_TYPES.GET_JOKE)
  .mergeMap(() => chuckNorrisApis.getJoke()
    .map((value: string) => getJokeSucceeded(value))
    .catch((error: AjaxError) => Observable.of(getJokeFailed(error.message))));

export default getJokeEpic;
