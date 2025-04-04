// src/components/AuthenticationButton.jsx

import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import LoadingSpinner from './LoadingSpinner';

const AuthenticationButton = () => {
  // 获取认证状态和加载状态
  const { isAuthenticated, isLoading } = useAuth0();

  // 如果正在加载,显示加载指示器
  if (isLoading) {
    return <LoadingSpinner />;
  }

  // 根据认证状态显示不同的按钮
  return isAuthenticated ? <LogoutButton /> : <LoginButton />;
};

export default AuthenticationButton;