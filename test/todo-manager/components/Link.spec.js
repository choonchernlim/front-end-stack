import { describe, it } from 'mocha';
import React from 'react'; // eslint-disable-line no-unused-vars
import TestUtils from 'react-addons-test-utils';
import { expect } from 'chai';
import { Link } from '../../../src/js/todo-manager/components/Link';

describe('Link', () => {
  it('given active link, should be SPAN tag', () => {
    const span = TestUtils.renderIntoDocument(new Link({
      active: true,
      children: 'Hello',
      onClick: undefined
    }));

    expect(span.tagName).to.equal('SPAN');
    expect(span.textContent).to.equal('Hello');
  });
});
