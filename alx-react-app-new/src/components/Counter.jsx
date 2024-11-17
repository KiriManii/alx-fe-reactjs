import React, { useState } from 'react';

function Counter() {
  // Declare state variable for count
  const [count, setCount] = useState(0);

  return (
    <div
      style={{
        textAlign: 'center',
        padding: '20px',
        border: '1px solid gray',
        borderRadius: '8px',
        margin: '10px auto',
        maxWidth: '300px',
        backgroundColor: '#f5f5f5',
      }}
    >
      {/* Display the current count */}
      <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Current Count: {count}</p>

      {/* Buttons for increment, decrement, and reset */}
      <button
        style={{
          margin: '5px',
          padding: '10px',
          borderRadius: '5px',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
        }}
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>

      <button
        style={{
          margin: '5px',
          padding: '10px',
          borderRadius: '5px',
          backgroundColor: '#f44336',
          color: 'white',
          border: 'none',
        }}
        onClick={() => setCount(count - 1)}
      >
        Decrement
      </button>

      <button
        style={{
          margin: '5px',
          padding: '10px',
          borderRadius: '5px',
          backgroundColor: '#008CBA',
          color: 'white',
          border: 'none',
        }}
        onClick={() => setCount(0)}
      >
        Reset
      </button>
    </div>
  );
}

export default Counter;
