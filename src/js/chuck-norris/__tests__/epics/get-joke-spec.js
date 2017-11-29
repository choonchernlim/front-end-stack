// @flow
import { describe, it } from 'mocha';
import { ActionsObservable } from 'redux-observable';
import { Observable } from 'rxjs/Observable';
import { expect } from 'chai';
import { getJoke, getJokeSucceeded, getJokeFailed } from '../../actions';
import getJokeEpic from '../../epics/get-joke';

describe('Chuck Norris', () => {
  describe('Epics', () => {
    describe('getJoke', () => {
      it('given successful call, should return joke succeeded action', () => {
        const action$ = ActionsObservable.of(getJoke());
        const apis = {
          chuckNorrisApis: {
            getJoke: () => Observable.of('test'),
          },
        };

        getJokeEpic(action$, null, apis)
          .toArray()
          .subscribe(actions => expect(actions).to.deep.equal([
            getJokeSucceeded('test'),
          ]));
      });

      it('given failed call, should return joke failed action', () => {
        const action$ = ActionsObservable.of(getJoke());
        const apis = {
          chuckNorrisApis: {
            getJoke: () => Observable.throw({
              message: 'test',
            }),
          },
        };

        getJokeEpic(action$, null, apis)
          .toArray()
          .subscribe(actions => expect(actions).to.deep.equal([
            getJokeFailed('test'),
          ]));
      });
    });
  });
});
