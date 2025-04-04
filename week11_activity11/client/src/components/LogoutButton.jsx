// src/components/LogoutButton.jsx

import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button 
      onClick={() => logout({
        logoutParams: {
          // 登出后重定向到应用首页
          returnTo: window.location.origin
        }
      })}
    >
      登出
    </button>
  );
};

export default LogoutButton;