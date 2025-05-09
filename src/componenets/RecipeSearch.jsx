import React, { useState, useEffect } from 'react';
import RecipeCard from './RecipeCard';

// Fake data with categories
const fakeRecipes = [
  {
    id: '1',
    name: 'Yogurt med bär',
    image: '/frukost//ID-17.png',
    ingredients: ['Yogurt', 'Granola', 'bär'],
    instructions: ['Dela Banan', 'Blanda ihop'],
    nutrition: { Calories: '500 kcal', Protein: '30g', Carbs: '40g', Fat: '25g' },
    cookTime: '40min',
    difficulty: 2,
    category:"yogurt"
  },
  {
    id: '2',
    name: 'Knäckebröd',
    image: '/frukost//ID-1.png',
    ingredients: ['knäckebröd', 'Pålägg'],
    instructions: ['Bre på smör', 'På med pålägg'],
    nutrition: { Calories: '500 kcal', Protein: '30g', Carbs: '40g', Fat: '25g' },
    cookTime: '10min',
    difficulty: 3,
    category:"knäckebröd"
  },
  {
    id: '3',
    name: 'Yogurt med granola och banan',
    image: '/frukost//ID-2.png',
    ingredients: ['Yogurt', 'Granola', 'Banan'],
    instructions: ['Dela Banan', 'Blanda ihop'],
    nutrition: { Calories: '500 kcal', Protein: '30g', Carbs: '40g', Fat: '25g' },
    cookTime: '20min',
    difficulty: 3,
    category:"yogurt"
  },
];

// Unique categories
const categories = ['All', ...new Set(fakeRecipes.map(r => r.category))];

const RecipeSearch = () => {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');
  const [filteredRecipes, setFilteredRecipes] = useState([]);

  useEffect(() => {
    let results = fakeRecipes;

    // Filter by name
    if (query.trim()) {
      results = results.filter(recipe =>
        recipe.name.toLowerCase().includes(query.toLowerCase())
      );
    }

    // Filter by category
    if (category !== 'All') {
      results = results.filter(recipe => recipe.category === category);
    }

    setFilteredRecipes(results);
  }, [query, category]);

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Search recipes..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          {categories.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      <ul>
        {filteredRecipes.map(recipe => (
          <RecipeCard recipe={recipe} />
        ))}
      </ul>
    </div>
  );
};

export default RecipeSearch;
