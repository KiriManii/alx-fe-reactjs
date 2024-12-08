import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Recipe Sharing Platform</h1>
      
      <Link
        to="/add-recipe"
        className="inline-block bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700 shadow-md mb-4"
      >
        Add New Recipe
      </Link>

      {/* Displaying recipe list logic goes here */}
    </div>
  );
}

export default HomePage;
