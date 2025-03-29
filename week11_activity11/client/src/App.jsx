import TasksList from "./components/TasksList";
import { Routes, Route, Link } from "react-router-dom";
import TaskDetails from "./components/TaskDetails";

function App() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> | <Link to="/tasks">Tasks</Link>
      </nav>
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/tasks" element={<TasksList />} /> {/* 直接调用，无需传props */}
        <Route path="/tasks/:taskId" element={<TaskDetails />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
