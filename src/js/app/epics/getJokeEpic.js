// @flow
import { type AjaxError, Observable } from 'rxjs';
import { chuckNorrisActions } from '../actions';

type Apis = { getJokeApi: Function };
type GetJokeEpic = (action$: Observable, store: *, apis: Apis) => Observable;

const getJokeEpic: GetJokeEpic = (action$, store, { getJokeApi }) => (
  action$
    .ofType(chuckNorrisActions.ACTION_TYPES.GET_JOKE)
    .mergeMap(() => getJokeApi()
      .map((value: string) => chuckNorrisActions.getJokeSucceeded(value))
      .catch((error: AjaxError) => Observable.of(chuckNorrisActions.getJokeFailed(error.message))))
);

export default getJokeEpic;
