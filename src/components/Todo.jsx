import InputTodo from './InputTodo';
import TodosList from './TodosList';

import { TodosProvider } from '../context/TodosContext';

const Todo = () => {
  return (
    <TodosProvider>
      <InputTodo />
      <TodosList />
    </TodosProvider>
  );
};
export default Todo;
