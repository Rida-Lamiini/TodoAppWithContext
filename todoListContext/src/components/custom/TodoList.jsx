import React, { useContext } from 'react';
import TodoContext from '@/context/TodoContext';
import TodoItem from './TodoItem';

const TodoList = () => {
  const { state } = useContext(TodoContext);

  const filteredTodos = state.todos.filter(todo => {
    if (state.filter === 'all') return true;
    if (state.filter === 'completed') return todo.completed;
    if (state.filter === 'incompleted') return !todo.completed;
  });

  return (
    <div className="max-w-md mx-auto mt-8">
      {filteredTodos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
