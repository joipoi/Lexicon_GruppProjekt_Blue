'use client';

import { useState, useEffect } from 'react';
import { db } from '../../../lib/firebase'; 
import { doc, updateDoc } from 'firebase/firestore';

export default function RecipeViewEdit({ recipe, id }) {
  const [editedRecipe, setEditedRecipe] = useState(recipe);

  useEffect(() => {
    setEditedRecipe(recipe); 
  }, [recipe]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedRecipe((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSave = async () => {
    try {
      const recipeRef = doc(db, 'recipes', id);
      await updateDoc(recipeRef, {
        name: editedRecipe.name,
        ingredients: editedRecipe.ingredients.split(',').map(i => i.trim()),
        instructions: editedRecipe.instructions.split(',').map(i => i.trim()),
        nutrition: {
          Calories: editedRecipe.nutrition.Calories,
          Protein: editedRecipe.nutrition.Protein,
          Carbs: editedRecipe.nutrition.Carbs,
          Fat: editedRecipe.nutrition.Fat,
        },
        cookTime: editedRecipe.cookTime,
        category: editedRecipe.category,
      });
      alert('Recipe updated successfully!');
    } catch (error) {
      console.error('Error updating recipe:', error);
      alert('Error updating recipe');
    }
  };

  return (
    <div>
      <input
        name="name"
        value={editedRecipe.name}
        onChange={handleChange}
        placeholder="Name"
      /><br />
      <textarea
        name="ingredients"
        value={editedRecipe.ingredients.join(', ')}
        onChange={handleChange}
        placeholder="Ingredients (comma-separated)"
      /><br />
      <textarea
        name="instructions"
        value={editedRecipe.instructions.join(', ')}
        onChange={handleChange}
        placeholder="Instructions (comma-separated)"
      /><br />
      <input
        name="calories"
        value={editedRecipe.nutrition?.Calories}
        onChange={handleChange}
        placeholder="Calories"
      /><br />
      <input
        name="protein"
        value={editedRecipe.nutrition?.Protein}
        onChange={handleChange}
        placeholder="Protein"
      /><br />
      <input
        name="carbs"
        value={editedRecipe.nutrition?.Carbs}
        onChange={handleChange}
        placeholder="Carbs"
      /><br />
      <input
        name="fat"
        value={editedRecipe.nutrition?.Fat}
        onChange={handleChange}
        placeholder="Fat"
      /><br />
      <input
        name="cookTime"
        value={editedRecipe.cookTime}
        onChange={handleChange}
        placeholder="Cook Time"
      /><br />
      <input
        name="category"
        value={editedRecipe.category}
        onChange={handleChange}
        placeholder="Category"
      /><br />
      <button onClick={handleSave}>Save Recipe</button>
    </div>
  );
}
