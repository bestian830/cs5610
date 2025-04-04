import { Auth0Provider } from "@auth0/auth0-react";
import React from "react";
import { useNavigate } from "react-router-dom";

const Auth0ProviderWithHistory = ({ children }) => {
  // useNavigate是React Router提供的钩子,用于编程试导航
  const navigate = useNavigate();

  // 从环境变量中获取Auth0配置信息
  const domain = import.meta.env.VITE_AUTO_DOMAIN;
  const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;

  // 当Auth0重定向回应用时的回调函数
  const onRedirectCallback = (appState) => {
    // 导航到用户之前尝试访问的页面,如果没有则导航到首页
    navigate(appState?.returnTo || window.location.pathname);
  };

  // Auth0Provider组件包装整个应用,提供认证上下文
  return (
  <Auth0Provider
    domain={domain}
    clientId={clientId}
    authorizationParams={{
      redirect_uri: window.location.origin,
      audience: import.meta.env.VITE_AUTH0_AUDIENCE  // 添加这行
    }}
    onRedirectCallback={onRedirectCallback}
  >
    {children}
  </Auth0Provider>
  );
}

export default Auth0ProviderWithHistory;
