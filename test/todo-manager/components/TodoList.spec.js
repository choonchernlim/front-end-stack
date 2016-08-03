import { describe, it } from 'mocha';
import React from 'react'; // eslint-disable-line no-unused-vars
import TestUtils from 'react-addons-test-utils';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { fromJS } from 'immutable';
import TodoList from '../../../src/js/todo-manager/components/TodoList';

describe('TodoList', () => {
  it('given todos, should render LI items', () => {
    const actions = [];

    const todoList = TestUtils.renderIntoDocument(new TodoList({
      todos: fromJS([
        { id: 1, text: 'Item 1', completed: false },
        { id: 2, text: 'Item 2', completed: true }
      ]),
      toggleTodo(id) {
        actions.push(id);
      }
    }));

    expect(todoList.tagName).to.equal('UL');
    expect(todoList.children.length).to.equal(2);

    expect(todoList.children[0].textContent).to.equal('Item 1');
    expect(todoList.children[1].textContent).to.equal('Item 2');

    TestUtils.Simulate.click(todoList.children[1]);
    TestUtils.Simulate.click(todoList.children[0]);

    expect(actions).to.deep.equal([2, 1]);
  });

  it('(Enzyme) given todos, should render LI items', () => {
    const actions = [];

    const todos = fromJS([
      { id: 1, text: 'Item 1', completed: false },
      { id: 2, text: 'Item 2', completed: true }
    ]);

    const toggleTodo = (id) => actions.push(id);

    const wrapper = shallow(<TodoList todos={todos} toggleTodo={toggleTodo} />);

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
