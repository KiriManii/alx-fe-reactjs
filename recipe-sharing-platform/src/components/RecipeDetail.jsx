import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../data.json';

function RecipeDetail() {
  const { id } = useParams();
  const recipe = data.find((recipe) => recipe.id.toString() === id);

  return (
    <div className="max-w-4xl mx-auto p-6 shadow-lg rounded-lg">
      {recipe ? (
        <>
          <h1 className="text-4xl font-bold mb-4">{recipe.title}</h1>
          <img src={recipe.image} alt={recipe.title} className="w-full h-64 object-cover mb-4" />
          
          <h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
          <ul className="list-disc ml-6 mb-4">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>

          <h2 className="text-2xl font-semibold mb-2">Preparation Steps</h2>
          <p>{recipe.steps}</p>
        </>
      ) : (
        <p>Recipe not found.</p>
      )}
    </div>
  );
}

export default RecipeDetail;
