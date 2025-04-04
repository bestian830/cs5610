// src/components/TasksList.jsx
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from '@auth0/auth0-react';

function TasksList() {
  const [tasks, setTasks] = useState([]);
  const { getAccessTokenSilently } = useAuth0();

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        // 获取访问令牌
        const token = await getAccessTokenSilently();
        
        // 发送带令牌的请求
        const response = await fetch("http://localhost:5001/api/tasks", {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        
        if (!response.ok) {
          throw new Error('获取任务失败');
        }
        
        const data = await response.json();
        setTasks(data);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };
    
    fetchTasks();
  }, [getAccessTokenSilently]);

  return (
    <div>
      <h2>任务列表</h2>
      {tasks.length === 0 ? (
        <p>无任务数据</p>
      ) : (
        <ul>
          {tasks.map((task) => (
            <li key={task._id}>
              <Link to={`/tasks/${task._id}`}>{task.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TasksList;