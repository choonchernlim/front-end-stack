import { describe, it } from 'mocha';
import { expect } from 'chai';
import { server } from '../../nock-helper';
import { url, sanitizeContextRoot } from '../../../src/js/common/utils/url-helper';

describe('Common => Utils => Url', () => {
  describe('Default', () => {
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
