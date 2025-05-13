'use client';

import { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../lib/firebase';

export default function UploadRecipe() {
  const [form, setForm] = useState({
    name: '',
    ingredients: '',
    instructions: '',
    calories: '',
    protein: '',
    carbs: '',
    fat: '',
    cookTime: '',
    difficulty: 1,
    category: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleUpload = async () => {
    if (!form.name) return alert("Missing recipe name");

    try {
      const newRecipe = {
        name: form.name,
        ingredients: form.ingredients.split(',').map(i => i.trim()),
        instructions: form.instructions.split(',').map(i => i.trim()),
        nutrition: {
          Calories: form.calories,
          Protein: form.protein,
          Carbs: form.carbs,
          Fat: form.fat,
        },
        cookTime: form.cookTime,
        difficulty: parseInt(form.difficulty),
        category: form.category,
        createdAt: new Date(),
      };

      await addDoc(collection(db, 'recipes'), newRecipe);

      alert('Recipe uploaded successfully!');
    } catch (error) {
      console.error('Upload error:', error.message);
      alert('Error uploading recipe');
    }
  };

  return (
    <div>
      <input name="name" placeholder="Name" onChange={handleChange} /><br />
      <input name="ingredients" placeholder="Ingredients (comma-separated)" onChange={handleChange} /><br />
      <input name="instructions" placeholder="Instructions (comma-separated)" onChange={handleChange} /><br />
      <input name="calories" placeholder="Calories (e.g. 500 kcal)" onChange={handleChange} /><br />
      <input name="protein" placeholder="Protein (e.g. 30g)" onChange={handleChange} /><br />
      <input name="carbs" placeholder="Carbs (e.g. 40g)" onChange={handleChange} /><br />
      <input name="fat" placeholder="Fat (e.g. 25g)" onChange={handleChange} /><br />
      <input name="cookTime" placeholder="Cook Time (e.g. 40min)" onChange={handleChange} /><br />
      <input name="difficulty" type="number" placeholder="Difficulty (1-5)" onChange={handleChange} /><br />
      <input name="category" placeholder="Category" onChange={handleChange} /><br />
      <button onClick={handleUpload}>Upload Recipe</button>
    </div>
  );
}
