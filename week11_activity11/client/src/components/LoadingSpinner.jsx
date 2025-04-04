// src/components/LoadingSpinner.jsx

import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="d-flex justify-content-center">
      <img 
        src="https://cdn.auth0.com/blog/auth0-react-sample/assets/loading.svg" 
        alt="Loading..." 
      />
    </div>
  );
};

export default LoadingSpinner;