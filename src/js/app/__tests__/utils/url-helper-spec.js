// @flow
import { describe, it, beforeEach, afterEach } from 'mocha';
import { expect } from 'chai';
import { url, sanitizeContextRoot } from '../../utils/url-helper';

const existingContextRoot = process.env.CONTEXT_ROOT;

describe('Common', () => {
  describe('Utils', () => {
    describe('URL Helper', () => {
      describe('Default', () => {
        const server = 'http://server';

        beforeEach(() => {
          process.env.CONTEXT_ROOT = server;
        });

        afterEach(() => {
          process.env.CONTEXT_ROOT = existingContextRoot;
        });

        it(`given /, should be ${server}/`, () => {
          expect(url('/')).to.deep.equal(`${server}/`);
        });

        it(`given /app, should be ${server}/app`, () => {
          expect(url('/app')).to.deep.equal(`${server}/app`);
        });

        it(`given empty string, should be ${server}`, () => {
          expect(url('')).to.deep.equal(`${server}`);
        });
      });

      describe('sanitizeContextRoot', () => {
        it('given undefined value, should be CONTEXT_ROOT', () => {
          process.env.CONTEXT_ROOT = '/abc';

          expect(sanitizeContextRoot(undefined)).to.deep.equal('/abc');

          process.env.CONTEXT_ROOT = existingContextRoot;
        });

        it('given /, should be empty string', () => {
          expect(sanitizeContextRoot('/')).to.deep.equal('');
        });

        it('given /app, should be /app', () => {
          expect(sanitizeContextRoot('/app')).to.deep.equal('/app');
        });

        it('given /app/, should be /app', () => {
          expect(sanitizeContextRoot('/app/')).to.deep.equal('/app');
        });

        it('given /app/path/, should be /app/path', () => {
          expect(sanitizeContextRoot('/app/path/')).to.deep.equal('/app/path');
        });
      });
    });
  });
});
