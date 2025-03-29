import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function TasksList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5001/api/tasks")
      .then((res) => res.json())
      .then((data) => setTasks(data))
      .catch((err) => console.error("Error fetching tasks:", err));
  }, []);

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task._id}>
          <Link to={`/tasks/${task._id}`}>{task.title}</Link>
        </li>
      ))}
    </ul>
  );
}

export default TasksList;
