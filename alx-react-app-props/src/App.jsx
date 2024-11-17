// src/App.jsx
import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import WelcomeMessage from './components/WelcomeMessage';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import ProfilePage from './ProfilePage'; // Add ProfilePage import
import UserContext from './UserContext'; // Import UserContext

function App() {
  const [count, setCount] = useState(0);

  // User data that we want to share across components
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <UserContext.Provider value={userData}> {/* Provide context to child components */}
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <WelcomeMessage />
      <Header /> {/* Include Header */}
      <MainContent /> {/* Include MainContent */}
      <Footer /> {/* Include Footer */}
      <ProfilePage /> {/* ProfilePage no longer needs props */}
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </UserContext.Provider>
  );
}

export default App;
