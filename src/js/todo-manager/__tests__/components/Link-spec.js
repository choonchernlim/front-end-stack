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
        const wrapper = shallow(
          <Link active filter="Show" onSetVisibilityFilter={f => f}>Hello</Link>,
        );

        const button = wrapper.find(Button);

        expect(button).to.have.length(1);
        expect(button.prop('disabled')).to.equal(true);
        expect(button.prop('onClick')).to.equal(undefined);
      });

      it('given unselected link, should be clickable button', () => {
        const wrapper = shallow(
          <Link active={false} filter="Show" onSetVisibilityFilter={f => f}>Hello</Link>,
        );

        const button = wrapper.find(Button);

        expect(button).to.have.length(1);
        expect(button.prop('disabled')).to.equal(undefined);
        expect(button.prop('onClick')).to.be.a('Function');
      });
    });
  });
});
