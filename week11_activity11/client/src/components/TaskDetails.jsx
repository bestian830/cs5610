// src/components/TaskDetails.jsx
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAuth0 } from '@auth0/auth0-react';

function TaskDetails() {
    const { taskId } = useParams();
    const [task, setTask] = useState(null);
    const [loading, setLoading] = useState(true);
    const { getAccessTokenSilently } = useAuth0();

    useEffect(() => {
        const fetchTaskDetails = async () => {
            try {
                const token = await getAccessTokenSilently();
                
                const response = await fetch(`http://localhost:5001/api/tasks/${taskId}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                
                if (!response.ok) {
                    throw new Error('获取任务详情失败');
                }
                
                const data = await response.json();
                setTask(data);
            } catch (error) {
                console.error("Error fetching task details:", error);
            } finally {
                setLoading(false);
            }
        };
        
        fetchTaskDetails();
    }, [taskId, getAccessTokenSilently]);

    if (loading) {
        return <div>加载中...</div>;
    }

    if (!task) {
        return <div>未找到任务</div>;
    }

    return (
        <div>
            <h1>任务详情</h1>
            <h2>{task.title}</h2>
            <p>ID: {taskId}</p>
            {task.description && <p>描述: {task.description}</p>}
            {task.date && <p>日期: {new Date(task.date).toLocaleDateString()}</p>}
        </div>
    );
}

export default TaskDetails;