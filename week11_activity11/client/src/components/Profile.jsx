// src/components/Profile.jsx

import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Profile = () => {
  // 获取用户信息和状态
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>加载用户信息中...</div>;
  }

  if (!isAuthenticated) {
    return <div>请先登录查看个人资料</div>;
  }

  return (
    <div className="card">
      <div className="card-body text-center">
        <img 
          src={user.picture} 
          alt={user.name} 
          className="rounded-circle mb-3"
          style={{ width: '100px' }}
        />
        <h2>{user.name}</h2>
        <p className="text-muted">{user.email}</p>
        <div className="text-left">
          <p><strong>用户ID:</strong> {user.sub}</p>
          <p><strong>最近登录时间:</strong> {new Date(user.updated_at).toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;