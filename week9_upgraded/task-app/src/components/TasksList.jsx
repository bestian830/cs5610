import Task from "./Task";
import { Link } from "react-router-dom";

function TasksList({ tasks }) {
  return (
        <ul>
          {tasks.map(task => (
            <li key={task._id}>
                <Link to={`/tasks/${task._id}`}>{task.title}</Link>
            </li>
          ))}
        </ul>
  );
}

export default TasksList;
