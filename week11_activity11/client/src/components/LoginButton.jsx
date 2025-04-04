import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LoginButton = () => {
    // 从Auth0上下文中获取loginWithRedirect方法
    const { loginWithRedirect } = useAuth0();

    return (
        <button
            onClick={() => loginWithRedirect()}
        >
            Log in
        </button>
    );
};

export default LoginButton;