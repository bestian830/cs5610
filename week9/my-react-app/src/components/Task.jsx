import React from 'react'
import { MdDelete } from "react-icons/md"

export default function Task({task, onDelete}) {
  function deletePressed() {
    onDelete(task.id);
  }
  return (
    <li>
        <div className="task">
          <div className="task-info">
            <p>{task.title}</p>
            <MdDelete onClick={deletePressed}/>
            <p>{task.date}</p>
          </div>
        </div>
    </li>
  );
}
