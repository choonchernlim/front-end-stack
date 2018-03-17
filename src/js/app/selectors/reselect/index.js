// @flow
import makeGetVisibleTodos from './makeGetVisibleTodos';

type ReselectSelector = {
  makeGetVisibleTodos: Function
};

const reselectSelector: ReselectSelector = {
  makeGetVisibleTodos,
};

export default reselectSelector;
