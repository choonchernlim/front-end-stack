// @flow
import { Observable, of } from 'rxjs';
import type { AjaxError } from 'rxjs/ajax';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { ofType } from 'redux-observable';
import type { GetJokeApiFn } from '../apis';
import { chuckNorris } from '../actions';

type Apis = { getJokeApi: GetJokeApiFn };

type GetJokeEpic = (action$: Observable, store: *, apis: Apis) => Observable;

const getJokeEpic: GetJokeEpic = (action$, store, { getJokeApi }) => (
  action$.pipe(
    ofType(chuckNorris.ACTION_TYPES.GET_JOKE),
    mergeMap(() => (
      getJokeApi()
        .pipe(
          map((value: string) => chuckNorris.getJokeSucceeded(value)),
          catchError((error: AjaxError) => of(chuckNorris.getJokeFailed(error.message))),
        )
    )),
  ));

export default getJokeEpic;
