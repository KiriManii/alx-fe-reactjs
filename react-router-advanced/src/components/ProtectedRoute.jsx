import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';  // Import the useAuth hook

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();  // Use the hook to check authentication
  const location = useLocation();

  if (!isAuthenticated) {
    // If not authenticated, redirect to login page
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;  // If authenticated, render the children components
};

export default ProtectedRoute;
