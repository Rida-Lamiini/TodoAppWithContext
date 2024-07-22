import TodoContext from '@/context/TodoContext'
import React, { useContext } from 'react'
import TodoItem from './TodoItem'

function TodoList() {

    const {todos} = useContext(TodoContext)
  return (
    <div>
        {todos.map(todo => (
            <TodoItem key={todo.id} todo ={todo}/>
        ))}
    </div>
  )
}

export default TodoList
