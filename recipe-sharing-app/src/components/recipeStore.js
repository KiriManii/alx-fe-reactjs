import create from 'zustand';

const useRecipeStore = create(set => ({
  recipes: [], // All recipes
  searchTerm: '', // Search term
  filteredRecipes: [], // Filtered recipes based on search term

  // Action to set the search term
  setSearchTerm: (term) => set({ searchTerm: term }),

  // Action to filter recipes based on the search term
  filterRecipes: () => set(state => ({
    filteredRecipes: state.recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
    ),
  })),

  // Action to add a new recipe
  addRecipe: (newRecipe) => set(state => ({ recipes: [...state.recipes, newRecipe] })),
  
  // Action to set recipes (used when initializing)
  setRecipes: (recipes) => set({ recipes }),
}));

export { useRecipeStore };
