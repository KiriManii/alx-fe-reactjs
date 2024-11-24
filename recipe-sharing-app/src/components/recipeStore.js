import { create } from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [],
  addRecipe: (newRecipe) => {
    if (!newRecipe.title || !newRecipe.description) {
      console.error('Invalid recipe data');
      return;
    }
    set((state) => ({ recipes: [...state.recipes, newRecipe] }));
  },
  setRecipes: (recipes) => set({ recipes }),
}));

export default useRecipeStore;
