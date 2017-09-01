// @flow
import makeGetVisibleTodos from '../../todo-manager/selectors/make-get-visible-todos';

type ReselectSelector = {
  makeGetVisibleTodos: Function
};

const reselectSelector: ReselectSelector = {
  makeGetVisibleTodos,
};

export default reselectSelector;
