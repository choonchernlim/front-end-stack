import { describe, it } from 'mocha';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import { expect } from 'chai';
import TodoList from '../../../src/js/todo-manager/components/TodoList'; // eslint-disable-line no-unused-vars

describe('TodoList', () => {
  it('given todos, should render LI items', () => {
    const actions = [];

    const todoList = TestUtils.renderIntoDocument(new TodoList({
      todos: [
        { id: 1, text: 'Item 1', completed: false },
        { id: 2, text: 'Item 2', completed: true }
      ],
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
});

