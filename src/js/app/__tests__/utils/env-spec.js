// @flow
import { describe, it, beforeEach, afterEach } from 'mocha';
import { expect } from 'chai';
import env from '../../utils/env';

describe('Common', () => {
  describe('Utils', () => {
    describe('env', () => {
      const originalProcessEnv = {};

      beforeEach(() => {
        originalProcessEnv.NODE_ENV = process.env.NODE_ENV;
        originalProcessEnv.CONTEXT_ROOT = process.env.CONTEXT_ROOT;
        originalProcessEnv.APP_NAME = process.env.APP_NAME;
        originalProcessEnv.VERSION = process.env.VERSION;
      });

      afterEach(() => {
        process.env.NODE_ENV = originalProcessEnv.NODE_ENV;
        process.env.CONTEXT_ROOT = originalProcessEnv.CONTEXT_ROOT;
        process.env.APP_NAME = originalProcessEnv.APP_NAME;
        process.env.VERSION = originalProcessEnv.VERSION;
      });

      it('given process.env.NODE_ENV, should return correct value', () => {
        process.env.NODE_ENV = 'test-value';
        expect(env.getNodeEnv()).to.deep.equal('test-value');
      });

      it('given process.env.CONTEXT_ROOTV, should return correct value', () => {
        process.env.CONTEXT_ROOT = 'test-value';
        expect(env.getContextRoot()).to.deep.equal('test-value');
      });

      it('given process.env.APP_NAME, should return correct value', () => {
        process.env.APP_NAME = 'test-value';
        expect(env.getAppName()).to.deep.equal('test-value');
      });

      it('given process.env.VERSION, should return correct value', () => {
        process.env.VERSION = 'test-value';
        expect(env.getVersion()).to.deep.equal('test-value');
      });

      it('given process.env.NODE_ENV is production, should return true', () => {
        process.env.NODE_ENV = 'production';
        expect(env.isProduction()).to.be.equal(true);
      });

      it('given process.env.NODE_ENV is development, should return false', () => {
        process.env.NODE_ENV = 'development';
        expect(env.isProduction()).to.be.equal(false);
      });
    });
  });
});
