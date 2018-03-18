// @flow
import { describe, it } from 'mocha';
import { ActionsObservable } from 'redux-observable';
import { Observable } from 'rxjs/Observable';
import { expect } from 'chai';
import { chuckNorrisAction } from '../../actions';
import getJokeEpic from '../getJokeEpic';

describe('Chuck Norris', () => {
  describe('Epics', () => {
    describe('getJoke', () => {
      it('given successful call, should return joke succeeded action', () => {
        const action$ = ActionsObservable.of(chuckNorrisAction.getJoke());
        const apis = {
          getJokeApi: () => Observable.of('test'),
        };

        getJokeEpic(action$, null, apis)
          .toArray()
          .subscribe(actions => expect(actions).to.deep.equal([
            chuckNorrisAction.getJokeSucceeded('test'),
          ]));
      });

      it('given failed call, should return joke failed action', () => {
        const action$ = ActionsObservable.of(chuckNorrisAction.getJoke());
        const apis = {
          getJokeApi: () => Observable.throw({
            message: 'test',
          }),
        };

        getJokeEpic(action$, null, apis)
          .toArray()
          .subscribe(actions => expect(actions).to.deep.equal([
            chuckNorrisAction.getJokeFailed('test'),
          ]));
      });
    });
  });
});
