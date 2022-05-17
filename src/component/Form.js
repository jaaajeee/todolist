import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import { useEffect } from 'react';

const Form = ({input, setInput, todos, setTodos, editItem, setEditItem}) => {

  const onChangeInput = (event) => {
    setInput(event.target.value);
  }
  useEffect(() => {
    if(editItem) {
      setInput(editItem.title);
    } else {
      setInput('');
    }
  }, [setInput, editItem]);

  const updateItem = (title, id, completed) => {
    const newTodo = todos.map((todo) => 
    todo.id === id ? { title, id, completed } : todo
    );
    setTodos(newTodo);
    setEditItem("");
  }

  const onFormSubmit = (event) => {
    event.preventDefault();
    if(!editItem){
      setTodos([...todos, { id: uuidv4(), title: input, completed: false }]);
    setInput("");
    }
    else{
    updateItem(input, editItem.id, editItem.completed); 
    }
  }

  return (
    <div className='Form' onSubmit={onFormSubmit}>
        <form>
            <input 
              type='text' 
              placeholder='Create to do list' 
              className='task-input' 
              value={input}
              required
              onChange={onChangeInput}
            />
            <button 
            className='btn-add' 
            type='submit'>{editItem ? "edit" : "+" } </button>
        </form>
    </div>
  )
}
export default Form;