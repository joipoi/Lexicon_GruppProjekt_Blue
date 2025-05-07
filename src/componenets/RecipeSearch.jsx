import React, { useState, useEffect } from 'react';

// Fake data with categories
const fakeRecipes = [
  { id: 1, name: 'Spaghetti Bolognese', category: 'Pasta' },
  { id: 2, name: 'Chicken Alfredo', category: 'Pasta' },
  { id: 3, name: 'Beef Tacos', category: 'Mexican' },
  { id: 4, name: 'Vegetarian Pizza', category: 'Pizza' },
  { id: 5, name: 'Shrimp Fried Rice', category: 'Asian' },
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
          <li key={recipe.id}>{recipe.name} ({recipe.category})</li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeSearch;
