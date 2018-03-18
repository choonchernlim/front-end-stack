// @flow
import { type AjaxError, Observable } from 'rxjs';
import { chuckNorris } from '../actions';

type Apis = { getJokeApi: Function };
type GetJokeEpic = (action$: Observable, store: *, apis: Apis) => Observable;

const getJokeEpic: GetJokeEpic = (action$, store, { getJokeApi }) => (
  action$
    .ofType(chuckNorris.ACTION_TYPES.GET_JOKE)
    .mergeMap(() => getJokeApi()
      .map((value: string) => chuckNorris.getJokeSucceeded(value))
      .catch((error: AjaxError) => Observable.of(chuckNorris.getJokeFailed(error.message))))
);

export default getJokeEpic;
