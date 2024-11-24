import create from 'zustand';

const useRecipeStore = create(set => ({
  recipes: [],
  favorites: [],  // Array to store the favorite recipe IDs
  recommendations: [],  // Array for recipe recommendations

  // Action to add a recipe to favorites
  addFavorite: (recipeId) => set(state => ({
    favorites: [...state.favorites, recipeId]
  })),

  // Action to remove a recipe from favorites
  removeFavorite: (recipeId) => set(state => ({
    favorites: state.favorites.filter(id => id !== recipeId)
  })),

  // Action to generate recommendations based on favorites (mock implementation)
  generateRecommendations: () => set(state => {
    const recommended = state.recipes.filter(recipe =>
      state.favorites.includes(recipe.id) && Math.random() > 0.5  // Randomized recommendation for simplicity
    );
    return { recommendations: recommended };
  }),

  // Action to initialize the list of recipes
  setRecipes: (recipes) => set({ recipes }),
}));

export { useRecipeStore };
