import React from 'react'
import { AiOutlineDelete } from "react-icons/ai";
import  { AiOutlineCheckSquare } from 'react-icons/ai';
import { AiOutlineEdit } from "react-icons/ai";

const Lists = ({todos, setTodos, setEditItem}) => {

    const handleDelete = ({id}) => {
        setTodos(todos.filter((todo) => todo.id !== id))
    }

    const handleComplete = (todo) => {
        setTodos(
            todos.map((item) => {
                if(item.id === todo.id) {
                    return {
                        ...item,
                        completed: !item.completed
                    }
                }
                return item;
            })
        )
    }

    const handleEdit = ({id}) => {
        const findItem = todos.find((todo) => todo.id === id);
        setEditItem(findItem);
    }



  return (
    <div className='List'>
        {todos.map((todo) => (
            <li className='to-do-item' key={todo.id}>
                <input type= 'text' 
                value={todo.title} 
                className={`list ${todo.completed ? 'completed' : ''}`}// set className is 'completed' if todo.completed is true
                onChange={(event) => event.preventDefault()}
                />
                    <button className='btn-complete' onClick={() => handleComplete(todo)}>
                        <AiOutlineCheckSquare /> 
                    </button>
                    <button className='btn-delete' onClick={() => handleDelete(todo)}>
                        <AiOutlineDelete />
                    </button>
                    <button className='btn-edit' onClick={() => handleEdit(todo)}>
                        <AiOutlineEdit />
                    </button>
            </li>
            )

        )}
    </div>
  )
}

export default Lists