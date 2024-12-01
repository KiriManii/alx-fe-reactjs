import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-blue-500 text-white min-h-screen flex flex-col items-center justify-center">
      <header className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Tailwind CSS!</h1>
        <p className="text-lg mb-4">
          Edit <code className="bg-gray-800 px-2 py-1 rounded">src/App.jsx</code> and save to reload.
        </p>
        <p>
          <button
            onClick={() => setCount((count) => count + 1)}
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition duration-300"
          >
            Count is {count}
          </button>
        </p>
      </header>
    </div>
  );
}

export default App;
