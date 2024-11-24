import { useState, useEffect } from 'react';

// Simulating an authentication hook
const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Simulate checking user authentication from localStorage or an API
    const user = localStorage.getItem('user'); // Replace with actual logic
    if (user) {
      setIsAuthenticated(true);
    }
  }, []);

  return { isAuthenticated };
};

export default useAuth;
