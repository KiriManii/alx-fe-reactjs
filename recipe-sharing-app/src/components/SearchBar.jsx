import React from 'react';
import { useRecipeStore } from './recipeStore';

const SearchBar = () => {
  const setSearchTerm = useRecipeStore(state => state.setSearchTerm);
  const filterRecipes = useRecipeStore(state => state.filterRecipes);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    filterRecipes(); // Trigger the filtering action every time the search term changes
  };

  return (
    <input
      type="text"
      placeholder="Search recipes..."
      onChange={handleSearchChange}
    />
  );
};

export default SearchBar;