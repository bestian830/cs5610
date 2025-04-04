// src/components/ProtectedRoute.jsx

import React from 'react';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import LoadingSpinner from './LoadingSpinner';

const ProtectedRoute = ({ component }) => {
  // withAuthenticationRequired是一个高阶组件(HOC),
  // 它确保用户已认证,否则重定向到登录页面
  const Component = withAuthenticationRequired(component, {
    onRedirecting: () => <LoadingSpinner />
  });

  return <Component />;
};

export default ProtectedRoute;