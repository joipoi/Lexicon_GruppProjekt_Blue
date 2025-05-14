'use client';

import React from 'react';
import { deleteDoc, doc } from 'firebase/firestore';
import { db } from '../lib/firebase'; 
import { useRouter } from 'next/navigation';

const RecipeCard = ({ recipe, onOpenPanel }) => {
  const router = useRouter();

  const isFirebaseRecipe = !!recipe?.id;

 const handleAddToMenu = () => {
  const storedMenu = JSON.parse(localStorage.getItem('valdaRecept')) || [];

  // Check if a recipe with the same id already exists
  const alreadyExists = storedMenu.some(item => item.id === recipe.id);

  if (!alreadyExists) {
    const updatedMenu = [...storedMenu, recipe];
    localStorage.setItem('valdaRecept', JSON.stringify(updatedMenu));
  }
};

  const handleDelete = async () => {
    if (!recipe?.id) return;

    const confirmDelete = window.confirm('Är du säker på att du vill ta bort detta recept?');
    if (!confirmDelete) return;

    try {
      await deleteDoc(doc(db, 'recipes', recipe.id));
      alert('Receptet har tagits bort.');
      router.push('/'); 
    } catch (err) {
      console.error('Error deleting recipe:', err);
      alert('Fel vid borttagning av recept.');
    }
  };

  const handleEdit = () => {
    router.push(`/edit-recipe/${recipe.id}`);
  };

  return (
    <div
      key={recipe.id}
      className="recipe-card bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
    >
      {recipe.image && (
        <img src={recipe.image} alt={recipe.name} className="w-full h-48 object-cover" />
      )}

      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-semibold">{recipe.name}</h3>
          {recipe.category && (
            <span className="bg-[#D4A55E] text-[#3A3226] text-xs px-2 py-1 rounded-full">
              {recipe.category}
            </span>
          )}
        </div>

        <div className="flex items-center text-sm text-[#8C7B6B] mb-3">
          {recipe.cookTime && <span className="mr-3">🕒 {recipe.cookTime}</span>}
          {recipe.protein && <span>{recipe.protein}</span>}
        </div>

        {recipe.description && <p className="text-sm mb-4">{recipe.description}</p>}

        <div className="flex justify-between items-center mb-2">
          <button className="text-sm font-medium" onClick={() => onOpenPanel(recipe)}>
            Se recept
          </button>
          <button
            onClick={handleAddToMenu}
            className="add-to-plan text-sm px-3 py-1 rounded-lg border border-[#8A9B7E] hover:bg-[#8A9B7E] hover:text-white transition-colors"
          >
            Lägg till i meny
          </button>
        </div>

        {isFirebaseRecipe && (
          <div className="flex justify-between gap-2 mt-2">
            <button
              onClick={handleEdit}
              className="text-sm text-blue-600 border border-blue-500 px-3 py-1 rounded hover:bg-blue-100 transition"
            >
              ✏️ Redigera
            </button>
            <button
              onClick={handleDelete}
              className="text-sm text-red-600 border border-red-500 px-3 py-1 rounded hover:bg-red-100 transition"
            >
              🗑️ Ta bort
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default RecipeCard;