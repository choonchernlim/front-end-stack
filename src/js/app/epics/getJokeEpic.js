// @flow
import { Observable, of } from 'rxjs';
import type { AjaxError } from 'rxjs/ajax';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { ofType } from 'redux-observable';
import actions, { ACTIONS } from '../actions';
import type { Apis } from '../apis/types';

type GetJokeEpicFn = (action$: Observable, store: *, apis: Apis) => Observable;

const getJokeEpic: GetJokeEpicFn = (action$, store, { getJokeApi }) =>
  action$.pipe(
    ofType(ACTIONS.GET_JOKE),
    mergeMap(() =>
      getJokeApi().pipe(
        map((value: string) => actions.getJokeSucceeded(value)),
        catchError((error: AjaxError) => of(actions.getJokeFailed(error.message))),
      ),
    ),
  );

export default getJokeEpic;
