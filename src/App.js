
import React from 'react';
import './App.css';
import Form from './component/Form';
import Header from './component/Header';
import Lists from './component/Lists';
import { useState } from 'react';

const App = () => {

  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [editItem, setEditItem] = useState(null);
  
  return (
    <div className="container">
      <div className="wrapper">
        <Header />
        <Form 
          input={input}
          setInput={setInput}
          todos={todos}
          setTodos={setTodos}
          editItem={editItem}
          setEditItem={setEditItem}
        />
        <Lists todos={todos} setTodos={setTodos} setEditItem={setEditItem} />
      </div>
    </div>
  );
}
export default App