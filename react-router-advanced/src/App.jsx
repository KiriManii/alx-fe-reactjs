import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Profile from './components/Profile';
import Login from './components/Login';
import BlogPost from './components/BlogPost';
import ProtectedRoute from './components/ProtectedRoute';  // Import ProtectedRoute

function App() {
  return (
    <Router>
      <Routes>
        {/* Public route */}
        <Route path="/login" element={<Login />} />

        {/* Protected route */}
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />

        {/* Dynamic route for a blog post */}
        <Route path="/blog/:id" element={<BlogPost />} />
      </Routes>
    </Router>
  );
}

export default App;
