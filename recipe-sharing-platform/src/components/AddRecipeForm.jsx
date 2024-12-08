import React, { useState } from 'react';

function AddRecipeForm() {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState('');
  const [errors, setErrors] = useState({});

  // Validate function to check for empty fields
  const validate = () => {
    const validationErrors = {};

    if (!title) validationErrors.title = 'Title is required';
    if (!ingredients) validationErrors.ingredients = 'Ingredients are required';
    if (!steps) validationErrors.steps = 'Steps are required';

    return validationErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Get validation errors
    const validationErrors = validate();
    setErrors(validationErrors);

    // If no validation errors, submit the form
    if (Object.keys(validationErrors).length === 0) {
      console.log('Form submitted');
      // Handle form submission logic here (e.g., sending data to an API)
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-lg mx-auto p-6 shadow-lg rounded-lg">
      <div>
        <label htmlFor="title" className="block font-medium text-gray-700">Recipe Title</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-md"
        />
        {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
      </div>

      <div>
        <label htmlFor="ingredients" className="block font-medium text-gray-700">Ingredients</label>
        <textarea
          id="ingredients"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-md"
        />
        {errors.ingredients && <p className="text-red-500 text-sm">{errors.ingredients}</p>}
      </div>

      <div>
        <label htmlFor="steps" className="block font-medium text-gray-700">Preparation Steps</label>
        <textarea
          id="steps"
          value={steps}
          onChange={(e) => setSteps(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-md"
        />
        {errors.steps && <p className="text-red-500 text-sm">{errors.steps}</p>}
      </div>

      <button
        type="submit"
        className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg focus:outline-none hover:bg-blue-700 shadow-md md:w-auto"
      >
        Add Recipe
      </button>
    </form>
  );
}

export default AddRecipeForm;
