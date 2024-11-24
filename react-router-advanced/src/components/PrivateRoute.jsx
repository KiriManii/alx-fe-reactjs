import React from 'react';
import { Route, Navigate } from 'react-router-dom';

function PrivateRoute({ element, ...rest }) {
  const isAuthenticated = false; // Simulating authentication status

  return (
    <Route
      {...rest}
      element={isAuthenticated ? element : <Navigate to="/" />}
    />
  );
}

export default PrivateRoute;
