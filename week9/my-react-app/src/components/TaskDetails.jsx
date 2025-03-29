import React from "react";
import { useParams } from "react-router-dom";
export default function TaskDetails() {
    const {taskId} = useParams();
    console.log("taskId", taskId);
    return (
        <div>
            <h1>Task Details</h1>
        </div>
    );
}