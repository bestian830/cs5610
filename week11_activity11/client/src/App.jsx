import TasksList from "./components/TasksList";
import { Routes, Route, Link } from "react-router-dom";
import TaskDetails from "./components/TaskDetails";
import AuthButton from "./components/AuthButton";
import Profile from "./components/Profile";
import ProtectedRoute from "./components/ProtectedRoute";
import { useAuth0 } from '@auth0/auth0-react';

function App() {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <div>加载中...</div>;
  }

  return (
    <div>
      <nav>
        <Link to="/">Home</Link> | 
        <Link to="/tasks">Tasks</Link> | 
        <Link to="/profile">Profile</Link> | 
        <AuthButton />
      </nav>
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
        
        {/* 保护任务列表路由 */}
        <Route path="/tasks" element={<ProtectedRoute component={TasksList} />} />
        
        {/* 保护任务详情路由 */}
        <Route path="/tasks/:taskId" element={<ProtectedRoute component={TaskDetails} />} />
        
        {/* 保护个人资料路由 */}
        <Route path="/profile" element={<ProtectedRoute component={Profile} />} />
        
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </div>
  );
}

export default App;