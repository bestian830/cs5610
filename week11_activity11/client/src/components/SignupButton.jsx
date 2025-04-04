import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const SignupButton = () => {
    const { loginWithRedirect } = useAuth0();

    return (
        <button
            onClick={() => loginWithRedirect({
                // screen_hint参数告诉Auth0显示注册页面而不是登录页面
                authorizationParams: {
                    screen_hint: 'signup',
                }
            })}
            className="btn btn-success"
        >
            Sign up
        </button>
    );
};

export default SignupButton;