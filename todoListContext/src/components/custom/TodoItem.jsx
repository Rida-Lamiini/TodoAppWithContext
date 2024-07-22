import React, { useContext } from 'react';
import { Checkbox } from '../ui/checkbox';
import { Button } from '../ui/button';
import TodoContext from '@/context/TodoContext';

function TodoItem({ todo }) {
  const { dispatch } = useContext(TodoContext);

  return (
    <div className="flex items-center justify-between p-4 border-b border-gray-300">
      <div className="flex items-center">
        <Checkbox
          checked={todo.completed}
          onClick={() => dispatch({ type: 'TOGGLE_TODO', payload: todo.id })}
          className="mr-2"
        />
        <span className={todo.completed ? 'line-through text-gray-500' : 'text-gray-800'}>
          {todo.text}
        </span>
      </div>
      <Button
        variant="outline"
        onClick={() => dispatch({ type: 'REMOVE_TODO', payload: todo.id })}
        className="ml-4"
      >
        Remove
      </Button>
    </div>
  );
}

export default TodoItem;
