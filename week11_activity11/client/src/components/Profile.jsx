// src/components/Profile.jsx

import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Profile = () => {
  // 获取用户信息和状态
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading user profile...</div>;
  }

  if (!isAuthenticated) {
    return <div>Please log in first.</div>;
  }

  return (
    <div>
      <img src={user.picture} alt={user.name} />
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </div>
  );
};

export default Profile;