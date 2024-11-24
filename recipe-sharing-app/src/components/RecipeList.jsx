import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import { useRecipeStore } from './recipeStore';

const RecipeList = () => {
  // Use filtered recipes if search term exists, else show all recipes
  const recipes = useRecipeStore(state => state.filteredRecipes.length > 0 ? state.filteredRecipes : state.recipes);

  return (
    <div>
      {recipes.length > 0 ? (
        recipes.map((recipe) => (
          <div key={recipe.id}>
            <h3>
              {/* Wrap the recipe title with a Link to navigate to the recipe details */}
              <Link to={`/recipe/${recipe.id}`}>
                {recipe.title}
              </Link>
            </h3>
            <p>{recipe.description}</p>
          </div>
        ))
      ) : (
        <p>No recipes found</p>
      )}
    </div>
  );
};

export default RecipeList;
