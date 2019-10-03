// @flow
import { describe, it } from 'mocha';
import React from 'react';
import Button from '@material-ui/core/Button';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Link from '../Link';
import actions from '../../../app/actions';

describe('Todo Manager', () => {
  describe('Components', () => {
    describe('Link', () => {
      it('given selected link, should be not a clickable button', () => {
        const wrapper = shallow(
          <Link // eslint-disable-line jsx-a11y/anchor-is-valid
            active
            filter="Show"
            onSetVisibilityFilter={actions.setVisibilityFilter}
          >
            Hello
          </Link>,
        );

        const button = wrapper.find(Button);

        expect(button).to.have.length(1);
        expect(button.prop('disabled')).to.equal(true);
        expect(button.prop('onClick')).to.equal(undefined);
      });

      it('given unselected link, should be clickable button', () => {
        const wrapper = shallow(
          <Link // eslint-disable-line jsx-a11y/anchor-is-valid
            active={false}
            filter="Show"
            onSetVisibilityFilter={actions.setVisibilityFilter}
          >
            Hello
          </Link>,
        );

        const button = wrapper.find(Button);

        expect(button).to.have.length(1);
        expect(button.prop('disabled')).to.equal(undefined);
        expect(button.prop('onClick')).to.be.a('Function');
      });
    });
  });
});
