import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Profile from './components/Profile';
import Home from './components/Home';
import NotFound from './components/NotFound';
import Post from './components/Post';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <PrivateRoute path="/profile/*" element={<Profile />} />
        <Route path="/post/:id" element={<Post />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
