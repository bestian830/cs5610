// src/components/ProtectedRoute.jsx
import { withAuthenticationRequired } from '@auth0/auth0-react';

const ProtectedRoute = ({ component }) => {
  const Component = withAuthenticationRequired(component, {
    onRedirecting: () => <div>Redirecting to the log in page...</div>,
  });

  return <Component />;
};

export default ProtectedRoute;