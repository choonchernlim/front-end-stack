// @flow
import { describe, it } from 'mocha';
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import TodoList from '../TodoList';

describe('Todo Manager', () => {
  describe('Components', () => {
    describe('TodoList', () => {
      it('Given todos, should render LI items', () => {
        const todos = [
          {
            id: 1,
            text: 'Item 1',
            completed: false,
          },
          {
            id: 2,
            text: 'Item 2',
            completed: true,
          },
        ];

        const wrapper = shallow(<TodoList todos={todos} onToggleTodo={f => f} />);

        expect(wrapper.length).to.equal(1);

        const todoTags = wrapper.find('ul').props().children;

        expect(todoTags.length).to.equal(2);
        expect(todoTags[0].props.text).to.equal('Item 1');
        expect(todoTags[1].props.text).to.equal('Item 2');
      });
    });
  });
});
