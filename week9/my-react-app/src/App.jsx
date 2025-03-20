import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import TasksList from './components/TasksList'
import AddTask from './components/AddTask';

export default function App() {
  const [_tasks, _setTasks] = useState([]);
  async function fetchData() {
    try {
      const response = await fetch("http://localhost:5001/todos");
      if (response.ok) {
        const data = await response.json();
        _setTasks(data);
      } else {
        throw new Error("fetch failed with status code")
      }
    } catch (err) {
      console.log("fetchData", err);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);

  const appName = "My Awesome App";
  return (
    <div className='appContainer'>
      <Header myAppName={appName} />
      <AddTask />
      <TasksList tasks={_tasks}/>
    </div>
  );
}
