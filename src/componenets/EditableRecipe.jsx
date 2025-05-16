'use client';

import { useState } from 'react';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../lib/firebase'; 

export default function EditableRecipe({ initialRecipe, id }) {
  const [recipe, setRecipe] = useState(initialRecipe);
  const [editingField, setEditingField] = useState(null);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState('');

  const handleFieldChange = (field, value) => {
    setRecipe((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleNestedChange = (field, index, value) => {
    setRecipe((prev) => ({
      ...prev,
      [field]: prev[field].map((item, i) => (i === index ? value : item)),
    }));
  };

  const handleSave = async () => {
  console.log('Saving recipe data:', recipe);
  try {
    setSaving(true);
    const docRef = doc(db, 'recipes', id);
    await updateDoc(docRef, recipe);
    setMessage('✅ Changes saved!');
  } catch (error) {
    console.error('Error saving recipe:', error);
    setMessage('❌ Failed to save changes.');
  } finally {
    setSaving(false);
  }
  };

  return (
    <div>
      {/* Name */}
      <h1 className="text-3xl font-bold mb-4 mt-28">
        {editingField === 'name' ? (
          <input
            className="border p-1 w-full"
            value={recipe.name}
            onChange={(e) => handleFieldChange('name', e.target.value)}
            onBlur={() => setEditingField(null)}
            autoFocus
          />
        ) : (
          <span onClick={() => setEditingField('name')} className="cursor-pointer">
            {recipe.name} ✏️
          </span>
        )}
      </h1>

      {/* Image */}
      {recipe.image && (
        <img
          src={recipe.image}
          alt={recipe.name}
          className="w-full h-64 object-cover rounded mb-4"
        />
      )}

      {/* Cook Time */}
      <p className="mb-2">
        <strong>Cook Time:</strong>{' '}
        {editingField === 'cookTime' ? (
          <input
            className="border p-1"
            value={recipe.cookTime}
            onChange={(e) => handleFieldChange('cookTime', e.target.value)}
            onBlur={() => setEditingField(null)}
            autoFocus
          />
        ) : (
          <span onClick={() => setEditingField('cookTime')} className="cursor-pointer">
            {recipe.cookTime} ✏️
          </span>
        )}
      </p>

      {/* Category */}
      <p className="mb-2">
        <strong>Category:</strong>{' '}
        {editingField === 'category' ? (
          <input
            className="border p-1"
            value={recipe.category}
            onChange={(e) => handleFieldChange('category', e.target.value)}
            onBlur={() => setEditingField(null)}
            autoFocus
          />
        ) : (
          <span onClick={() => setEditingField('category')} className="cursor-pointer">
            {recipe.category} ✏️
          </span>
        )}
      </p>

      {/* Ingredients */}
      <h3 className="text-xl font-semibold mt-4 mb-2">Ingredients</h3>
      <ul className="list-disc pl-6 mb-4">
        {recipe.ingredients?.map((ing, index) => (
          <li key={index}>
            {editingField === `ingredient-${index}` ? (
              <input
                className="border p-1"
                value={ing}
                onChange={(e) => handleNestedChange('ingredients', index, e.target.value)}
                onBlur={() => setEditingField(null)}
                autoFocus
              />
            ) : (
              <span
                onClick={() => setEditingField(`ingredient-${index}`)}
                className="cursor-pointer"
              >
                {ing} ✏️
              </span>
            )}
          </li>
        ))}
      </ul>

      {/* Instructions */}
      <h3 className="text-xl font-semibold mb-2">Instructions</h3>
      <ol className="list-decimal pl-6 mb-4">
        {recipe.instructions?.map((step, index) => (
          <li key={index}>
            {editingField === `instruction-${index}` ? (
              <textarea
                className="border p-1 w-full"
                value={step}
                onChange={(e) => handleNestedChange('instructions', index, e.target.value)}
                onBlur={() => setEditingField(null)}
                autoFocus
              />
            ) : (
              <span
                onClick={() => setEditingField(`instruction-${index}`)}
                className="cursor-pointer"
              >
                {step} ✏️
              </span>
            )}
          </li>
        ))}
      </ol>

      {/* Nutrition */}
      <h3 className="text-xl font-semibold mb-2">Nutrition</h3>
      <ul className="list-disc pl-6">
        {['Calories', 'Protein', 'Carbs', 'Fat'].map((key) => (
          <li key={key}>
            {key}:{' '}
            {editingField === `nutrition-${key}` ? (
              <input
                className="border p-1"
                value={recipe.nutrition?.[key]}
                onChange={(e) =>
                  setRecipe((prev) => ({
                    ...prev,
                    nutrition: { ...prev.nutrition, [key]: e.target.value },
                  }))
                }
                onBlur={() => setEditingField(null)}
                autoFocus
              />
            ) : (
              <span
                onClick={() => setEditingField(`nutrition-${key}`)}
                className="cursor-pointer"
              >
                {recipe.nutrition?.[key]} ✏️
              </span>
            )}
          </li>
        ))}
      </ul>
      {/*
      <div className="mt-6">
        <button
          onClick={handleSave}
          disabled={saving}
          className="bg-blue-500 text-white p-2 rounded"
      >
          {saving ? 'Saving...' : 'Save Changes'}
        </button>

        {message && <p className="mt-2 text-sm">{message}</p>}
      </div>
      */}
    </div>
  );
}
