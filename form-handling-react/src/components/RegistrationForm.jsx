// src/components/RegistrationForm.jsx
import React, { useState } from 'react';

const RegistrationForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    
    if (username && email && password) {
      // Handle the registration logic here (e.g., call an API or update state)
      console.log('Form submitted with:', { username, email, password });
    } else {
      console.log('Please fill in all fields');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}   {/* This binds the value to the state */}
          onChange={(e) => setUsername(e.target.value)}   {/* Updates the state */}
          required
        />
      </div>

      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}   {/* This binds the value to the state */}
          onChange={(e) => setEmail(e.target.value)}   {/* Updates the state */}
          required
        />
      </div>

      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}   {/* This binds the value to the state */}
          onChange={(e) => setPassword(e.target.value)}   {/* Updates the state */}
          required
        />
      </div>

      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
