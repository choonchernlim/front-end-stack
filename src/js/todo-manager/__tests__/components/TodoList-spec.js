// @flow
import { describe, it } from 'mocha';
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { fromJS } from 'immutable';
import { TodoList } from '../../components/TodoList';

describe('Todo Manager', () => {
  describe('Components', () => {
    describe('TodoList', () => {
      it('Given todos, should render LI items', () => {
        const actions = [];

        const todos = fromJS([
          { id: 1, text: 'Item 1', completed: false },
          { id: 2, text: 'Item 2', completed: true }
        ]);

        const toggleTodo = id => actions.push(id);

        const wrapper = shallow(<TodoList todos={todos} onToggleTodo={toggleTodo} />);

        const todoTags = wrapper.find('Todo');

        expect(todoTags.parent().is('ul')).to.equal(true);
        expect(todoTags.length).to.equal(2);

        expect(todoTags.at(0).props().text).to.equal('Item 1');
        expect(todoTags.at(1).props().text).to.equal('Item 2');

        todoTags.at(1).simulate('click');
        todoTags.at(0).simulate('click');

        expect(actions).to.deep.equal([2, 1]);
      });
    });
  });
});
