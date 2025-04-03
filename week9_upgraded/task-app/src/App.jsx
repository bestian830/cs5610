import TasksList from "./components/TasksList";
import { Routes, Route, Link } from "react-router-dom";
import TaskDetails from "./components/TaskDetails";

function App() {
  const tasks = [ // 临时数据，后面会从后端拿
    { _id: "1", title: "Learn React", completed: false },
    { _id: "2", title: "Build a MERN app", completed: false },
  ];

  return (
    <div>
      <nav>
        <Link to="/">Home</Link> | <Link to="/tasks">Tasks</Link>
      </nav>
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/tasks" element={<TasksList tasks={tasks} />} />
        <Route path="/tasks/:taskId" element={<TaskDetails />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </div>
  );
}

export default App;