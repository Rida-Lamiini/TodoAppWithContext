import React from 'react'
import { Checkbox } from '../ui/checkbox'
import { Button } from '../ui/button'

function TodoItem({todo}) {
  return (
    <div className='flex items-center justify-between p-4  border-b-2'>
        <div className='items-center'>
        <Checkbox
            
            />
            <span className='ml-2'>
                {todo.text}
            </span>
        </div>

        <Button
        variant="outline"
        color="danger"
        className="ml-4"
      >
        Remove
      </Button>

        
    </div>
  )
}

export default  TodoItem
