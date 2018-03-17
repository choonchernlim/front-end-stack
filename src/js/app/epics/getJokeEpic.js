// @flow
import { type AjaxError, Observable } from 'rxjs';
import { chuckNorrisActions } from '../actions';
import { type Apis } from '../apis';

const getJokeEpic = (action$: Observable, store: *, { chuckNorrisApis }: Apis) => action$
  .ofType(chuckNorrisActions.ACTION_TYPES.GET_JOKE)
  .mergeMap(() => chuckNorrisApis.getJoke()
    .map((value: string) => chuckNorrisActions.getJokeSucceeded(value))
    .catch((error: AjaxError) => Observable.of(chuckNorrisActions.getJokeFailed(error.message))));

export default getJokeEpic;
