// @flow

import { Observable } from 'rxjs';

export type GetJokeApiFn = () => Observable;

export type Apis = { getJokeApi: GetJokeApiFn };
