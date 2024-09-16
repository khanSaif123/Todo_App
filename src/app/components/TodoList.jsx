"use client"
import React, { useState } from 'react';
import { RiDeleteBin6Line } from "react-icons/ri";

const TodoList = ({ listData, deleteTodo }) => {  
  const [todoArray] = listData;
  const [check, setCheck] = useState({});

  const handleDelete = (id) => {
    deleteTodo(id);
  }

  const handleCheckbox = (id) => {
    setCheck((prevCheck) => ({
      ...prevCheck,
      [id]: !prevCheck[id],
    }));
  }

  if (listData[0].length === 0) {
    return (
      <>
        <h1 className='text-2xl font-bold'>Todo App</h1>
        <div className='mt-10 mb-5 text-gray-500'>There is no Todos Yet!</div>
      </>
    );
  } else {
    return (
      <div className='border rounded-lg min-w-[400px] text-center p-5'>
        <h1 className='text-2xl font-bold'>Todo App</h1>
        {
          todoArray.map((todoObj) => {
            return (
              <div key={todoObj.id} className='mt-5 mb-3 relative flex justify-between items-center px-10 border-b pb-3'>
                {/* Adjust the width and height of the line */}
                {check[todoObj.id] && (
                  <div className='absolute left-0 w-[60%] h-0.5 bg-gray-400'></div>
                )}
                <div 
                  className='max-w-[250px] text-left break-words'
                  style={{ wordWrap: 'break-word' }}
                >
                  {todoObj.todo}
                </div>
                <div className='flex gap-3 items-center'>
                  <input 
                    type='checkbox' 
                    className='w-4 h-4 border rounded' 
                    onClick={() => handleCheckbox(todoObj.id)} 
                    checked={!!check[todoObj.id]} 
                  />
                  <button 
                    className='text-red-600 hover:text-red-800 transition duration-200' 
                    onClick={() => handleDelete(todoObj.id)}
                  >
                    <RiDeleteBin6Line />
                  </button>
                </div>
              </div>
            );
          })
        }
      </div>
    );
  }
}

export default TodoList;
