'use client';

import React, { useState, useEffect } from 'react';
import RecipeCard from './RecipeCard';
import FullRecipe from './FullRecipe';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../lib/firebase'; 

const RecipeSearch = () => {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('Alla');
  const [protein, setProtein] = useState('Alla');
  const [ingredient, setIngredient] = useState('');
  const [sortBy, setSortBy] = useState('popular');
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [firebaseRecipes, setFirebaseRecipes] = useState([]);

  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  useEffect(() => {
    const fetchFirebaseRecipes = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'recipes'));
        const recipesFromFirebase = querySnapshot.docs.map(doc => {
          const data = doc.data();
          return {
            id: doc.id,
            rating: 0,
            protein: data.protein || '',
            image: data.image || '/placeholder.png',
            ...data,
          };
        });

        setFirebaseRecipes(recipesFromFirebase);
      } catch (error) {
        console.error('Error fetching Firebase recipes:', error);
      }
    };

    fetchFirebaseRecipes();
  }, []);

  useEffect(() => {
    let results = [...firebaseRecipes];

    if (query.trim()) {
      results = results.filter(recipe =>
        recipe.name.toLowerCase().includes(query.toLowerCase())
      );
    }

    if (category !== 'Alla') {
      results = results.filter(recipe => recipe.category === category);
    }

    if (protein !== 'Alla') {
      results = results.filter(recipe =>
        recipe.protein?.toLowerCase() === protein.toLowerCase()
      );
    }

    if (ingredient.trim()) {
      results = results.filter(recipe =>
        recipe.ingredients?.some(ing => ing.toLowerCase().includes(ingredient.toLowerCase()))
      );
    }

    switch (sortBy) {
      case 'calories':
        results.sort((a, b) =>
          parseInt(a.nutrition?.Calories) - parseInt(b.nutrition?.Calories)
        );
        break;
      case 'time':
        results.sort((a, b) =>
          parseInt(a.cookTime) - parseInt(b.cookTime)
        );
        break;
      case 'popular':
        results.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }

    setFilteredRecipes(results);
  }, [query, category, protein, ingredient, sortBy, firebaseRecipes]);

  const handleOpenPanel = (recipe) => {
    setSelectedRecipe(recipe);
    setIsPanelOpen(true);
  };

  const handleClosePanel = () => {
    setIsPanelOpen(false);
  };



  return (
    <div id="recipes-tab" className="tab-content">
      <div className="bg-[#F3E9DC] p-6 rounded-lg mb-8">
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-3">Sök recept</h2>
          <div className="relative">
            <input
              type="text"
              placeholder="Sök efter recept..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full p-3 pl-10 rounded-lg border border-[#8A9B7E] focus:outline-none focus:ring-2 focus:ring-[#D4A55E]"
            />
            <svg className="absolute left-3 top-3.5 h-5 w-5 text-[#8C7B6B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <h3 className="font-medium mb-2">Protein</h3>
            <select
              value={protein}
              onChange={(e) => setProtein(e.target.value)}
              className="w-full p-2 rounded-lg border border-[#8A9B7E]"
            >
              <option>Alla</option>
              <option value="Kyckling">Chicken</option>
              <option value="Nöt">Beef</option>
              <option value="Fisk">Fish</option>
              <option value="Vegetarisk">Vegetarian</option>
              <option>Vegan</option>
            </select>
          </div>

          <div>
            <h3 className="font-medium mb-2">Ingrediens</h3>
            <input
              type="text"
              placeholder="T.ex. potatis, kyckling..."
              value={ingredient}
              onChange={(e) => setIngredient(e.target.value)}
              className="w-full p-2 rounded-lg border border-[#8A9B7E]"
            />
          </div>

          <div>
            <h3 className="font-medium mb-2">Kategori</h3>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full p-2 rounded-lg border border-[#8A9B7E]"
            >
              <option>Alla</option>
              <option>Frukost</option>
              <option>Lunch</option>
              <option>Middag</option>
              <option>Dessert</option>
              <option>Mellanmål</option>
            </select>
          </div>

          <div>
            <h3 className="font-medium mb-2">Sortera efter</h3>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full p-2 rounded-lg border border-[#8A9B7E]"
            >
              <option value="popular">Mest populära</option>
              <option value="time">Tillagningstid</option>
              <option value="calories">Kalorier</option>
            </select>
          </div>
        </div>
      </div>

      {/* Recipe Cards */}
      <div className="max-h-[1200px] overflow-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredRecipes.map(recipe => (
          <RecipeCard
            key={recipe.id}
            recipe={recipe}
            onOpenPanel={handleOpenPanel}
          />
        ))}
      </div>

      {/* Sliding Side Panel */}
      {selectedRecipe && (
        <div
          className={`fixed top-0 right-0 w-100 h-full bg-white shadow-lg transform transition-transform duration-300 z-50 ${
            isPanelOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <FullRecipe onClose={handleClosePanel} recipe={selectedRecipe} />
        </div>
      )}
    </div>
  );
};

export default RecipeSearch;