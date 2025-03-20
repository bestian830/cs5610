// import React, { useState } from 'react'
import React from 'react'
import Task from './Task'

export default function TasksList({tasks}) {
 

  async function deleteTask(deletedId) {
    // update the array
    console.log("delete pressed from TaskList", deletedId);
    // const newArray = tasks.filter((task) => {return task.id !== deletedId});
    // setTasks(newArray);
    try {
      await fetch('http://localhost:5001/todos/' + deletedId, {
        method: 'DELETE'
      });
    }
    catch (err) {
      console.log("deleteTask", err);
    }
  }

//   setTasks([]);
  console.log(tasks);
  return tasks.length === 0? (
    <p>No tasks left</p>
  ):(
      <ul>
        {tasks.map((tasks) => {
            return <Task key={tasks.id} task={tasks} onDelete={deleteTask}/>;
        })}
      </ul>
  );
}
