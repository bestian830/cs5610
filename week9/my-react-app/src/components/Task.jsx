import React from 'react'

export default function Task({task}) {
  return (
    <li>
        <div>
            <p>{task.title}</p>
            <p>{task.date}</p>
        </div>
    </li>
  );
}
