import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

// Simulate authentication check (this can be replaced with actual authentication logic)
const isAuthenticated = false; // Set this to true when the user is logged in

const ProtectedRoute = ({ children }) => {
  const location = useLocation();

  if (!isAuthenticated) {
    // Redirect to login page or home page if not authenticated
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default ProtectedRoute;
