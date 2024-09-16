"use client"
import TodoList from '../app/components/TodoList'
import AddTodo from '../app/components/AddTodo'
import { useEffect, useState } from 'react'

export default function Home() {
  const [listData, setListData] = useState(() => JSON.parse(localStorage.getItem('listItem')) || []);

  const sendToList = (data) => {
    setListData([...listData, data]);
  }

  useEffect(() => {
    localStorage.setItem('listItem', JSON.stringify(listData));
  }, [listData]);

  function deleteTodo(id) {
    const newListData = listData.filter((todo) => id !== todo.id);
    setListData(newListData);
  }

  return (
    <div className='w-full h-[100vh]  flex  flex-col items-center mt-14'>
      <TodoList deleteTodo={deleteTodo} listData={[listData]} />
      <AddTodo sendToList={sendToList} />
    </div>
  );
}
