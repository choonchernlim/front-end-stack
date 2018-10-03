// @flow
import { describe, it } from 'mocha';
import { ActionsObservable } from 'redux-observable';
import { of, throwError } from 'rxjs';
import { toArray } from 'rxjs/operators';
import { expect } from 'chai';
import actions from '../../actions';
import getJokeEpic from '../getJokeEpic';

describe('Chuck Norris', () => {
  describe('Epics', () => {
    describe('getJoke', () => {
      it('given successful call, should return joke succeeded action', () => {
        const action$ = ActionsObservable.of(actions.getJoke());
        const apis = {
          getJokeApi: () => of('test'),
        };

        getJokeEpic(action$, null, apis)
          .pipe(toArray())
          .subscribe(actualActions =>
            expect(actualActions).to.deep.equal([actions.getJokeSucceeded('test')]),
          );
      });

      it('given failed call, should return joke failed action', () => {
        const action$ = ActionsObservable.of(actions.getJoke());
        const apis = {
          getJokeApi: () =>
            throwError({
              message: 'test',
            }),
        };

        getJokeEpic(action$, null, apis)
          .pipe(toArray())
          .subscribe(actualActions =>
            expect(actualActions).to.deep.equal([actions.getJokeFailed('test')]),
          );
      });
    });
  });
});
