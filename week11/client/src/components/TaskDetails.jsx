import { useParams } from "react-router-dom";

function TaskDetails() {
    const { taskId } = useParams();
    return <h1>Task Details for ID: {taskId}</h1>;
}

export default TaskDetails;