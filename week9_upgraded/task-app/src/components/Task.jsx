import { FaTrash } from "react-icons/fa";

function Task({ task, onDelete }) {
  return (
    <li>
      <div className="task">
        <div className="task-content">
          <p>{task.title}</p>
          <p>{task.date}</p>
        </div>
        <FaTrash className="delete-icon" onClick={() => onDelete(task.id)} />
      </div>
    </li>
  );
}

export default Task;
