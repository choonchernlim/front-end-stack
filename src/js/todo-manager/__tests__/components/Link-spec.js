// @flow
import { describe, it } from 'mocha';
import React from 'react'; // eslint-disable-line no-unused-vars
import TestUtils from 'react-dom/test-utils';
import { expect } from 'chai';
import { Link } from '../../components/Link';

describe('Todo Manager', () => {
  describe('Components', () => {
    describe('Link', () => {
      it('given active link, should be SPAN tag', () => {
        const span = TestUtils.renderIntoDocument(new Link({
          active: true,
          filter: 'Show',
          children: 'Hello',
          onSetVisibilityFilter: f => f,
        }));

        expect(span.tagName).to.equal('SPAN');
        expect(span.textContent).to.equal('Hello');
      });
    });
  });
});
