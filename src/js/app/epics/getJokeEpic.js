// @flow
import { type AjaxError, Observable } from 'rxjs';
import { chuckNorrisAction } from '../actions';

type Apis = { getJokeApi: Function };
type GetJokeEpic = (action$: Observable, store: *, apis: Apis) => Observable;

const getJokeEpic: GetJokeEpic = (action$, store, { getJokeApi }) => (
  action$
    .ofType(chuckNorrisAction.ACTION_TYPES.GET_JOKE)
    .mergeMap(() => getJokeApi()
      .map((value: string) => chuckNorrisAction.getJokeSucceeded(value))
      .catch((error: AjaxError) => Observable.of(chuckNorrisAction.getJokeFailed(error.message))))
);

export default getJokeEpic;
