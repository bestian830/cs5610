import React, { useState } from 'react'
import Task from './Task'

export default function TasksList() {
    const [tasks, setTasks] = useState([
{
    id: 1,
    title: "Review week 9 material",
    date: "June 4th at 1 pm",
  },
  {
    id: 2,
    title: "Do quiz 9",
    date: "June 4th at 6 pm",
  },
  {
    id: 3,
    title: "Work on assignment 2",
    date: "June 5th at 8 am",
  }]);

  function deleteTask(deletedId) {
    // update the array
    console.log("delete pressed from TaskList", deletedId);
    const newArray = tasks.filter((task) => {return task.id !== deletedId});
    setTasks(newArray);
  }

//   setTasks([]);
  console.log(tasks);
  return (
    tasks.length === 0? <p>No tasks left</p> :
    <>
      <ul>
        {tasks.map((tasks) => {
            return <Task key={tasks.id} task={tasks} onDelete={deleteTask}/>;
        })}
      </ul>
    </>
  )
}
