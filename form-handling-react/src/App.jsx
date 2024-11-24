import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FormikForm from './components/FormikForm';
import RegistrationForm from './components/RegistrationForm';
import { useState } from 'react';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const ProtectedRoute = ({ children }) => {
    return isAuthenticated ? children : <h1>Please log in to access this page</h1>;
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<h1>Welcome to the App</h1>} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/form" element={<FormikForm />} />
        <Route
          path="/protected"
          element={
            <ProtectedRoute>
              <h1>Protected Page</h1>
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
