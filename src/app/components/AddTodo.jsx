"use client"
import React, { useState } from 'react';
import { nanoid } from 'nanoid';

const AddTodo = ({ sendToList }) => {
  const [todoData, setTodoData] = useState('');

  const handleChange = (e) => {
    setTodoData(e.target.value);
  }

  const handleClick = () => {
    if (!todoData.trim()) {
      alert('Please enter some task');
      return;
    }

    let todoObj = {
      "id": nanoid(),
      "todo": todoData
    };

    sendToList(todoObj);
    setTodoData('');
  }

  return (
    <div className='flex gap-5 border rounded-lg h-24 items-center px-10 mt-5'>
      <input 
        className='border px-3 py-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500'
        onChange={handleChange} 
        value={todoData} 
        placeholder='Enter a task' 
      />
      <button 
        className='border bg-black text-white w-[150px] py-2  rounded-2xl hover:bg-gray-800 transition duration-200'
        onClick={handleClick}
      >
        Add Todo
      </button>
    </div>
  );
}

export default AddTodo;
