// @flow
import { describe, it } from 'mocha';
import React from 'react'; // eslint-disable-line no-unused-vars
import Button from 'material-ui/Button';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { Link } from '../../components/Link';

describe('Todo Manager', () => {
  describe('Components', () => {
    describe('Link', () => {
      it('given selected link, should be not a clickable button', () => {
        const wrapper = shallow( // eslint-disable-line function-paren-newline
          <Link // eslint-disable-line jsx-a11y/anchor-is-valid
            active
            filter="Show"
            onSetVisibilityFilter={f => f}
            classes={{ link: 'link' }}
          >Hello
          </Link>);

        const button = wrapper.find(Button);

        expect(button).to.have.length(1);
        expect(button.prop('disabled')).to.equal(true);
        expect(button.prop('onClick')).to.equal(undefined);
      });

      it('given unselected link, should be clickable button', () => {
        const wrapper = shallow( // eslint-disable-line function-paren-newline
          <Link // eslint-disable-line jsx-a11y/anchor-is-valid
            active={false}
            filter="Show"
            onSetVisibilityFilter={f => f}
            classes={{ link: 'link' }}
          >Hello
          </Link>);

        const button = wrapper.find(Button);

        expect(button).to.have.length(1);
        expect(button.prop('disabled')).to.equal(undefined);
        expect(button.prop('onClick')).to.be.a('Function');
      });
    });
  });
});
