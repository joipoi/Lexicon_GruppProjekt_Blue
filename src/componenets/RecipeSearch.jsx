'use client';

import React, { useState, useEffect } from 'react';
import RecipeCard from './RecipeCard';
import FullRecipe from './FullRecipe';

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
    category:"Frukost",
    description: "Klassisk italiensk pasta med ägg, pancetta och parmesan.",
    protein: "chicken",
    rating: 5,
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
    category:"Middag",
    description: "Klassisk italiensk pasta med ägg, pancetta och parmesan.",
    protein: "Vegeterian",
    rating: 3
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
    category:"Middag",
    description: "Klassisk italiensk pasta med ägg, pancetta och parmesan.",
    protein: "Beef",
    rating: 4
  },
     {
    id: '4',
    name: 'Pasta Carbonara',
    image: '/lunch/ID-112.png',
    ingredients: ['400 g spaghetti', '200 g pancetta', '3 äggulor', '50 g parmesan', 'Svartpeppar'],
    instructions: ['Koka pastan enligt anvisning på förpackningen.', 
      'Stek pancettan knaprig i en torr stekpanna.',
'Vispa ihop äggulor och riven parmesan i en skål.',
'Häll av pastan och blanda snabbt med äggblandningen och pancettan.',
'Krydda med svartpeppar och servera omedelbart.'],
    nutrition: { Calories: '650 kcal', Protein: '25 g', Carbs: '75 g', Fat: '25 g' },
    cookTime: '30 min',
    difficulty: 3,
    category:"Middag",
    description: "En äkta italiensk klassiker som är både enkel och otroligt god. Perfekt för en snabb vardagsmiddag.",
    protein: "Kyckling",
    rating: 4
  },
];

const RecipeSearch = () => {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('Alla');
  const [protein, setProtein] = useState('Alla');
  const [ingredient, setIngredient] = useState('');
  const [sortBy, setSortBy] = useState('popular');
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
    if (category !== 'Alla') {
      results = results.filter(recipe => recipe.category === category);
    }

    // Filter by protein
    if (protein !== 'Alla') {
      results = results.filter(recipe => recipe.protein.toLowerCase() === protein.toLowerCase());
    }

    // Filter by ingredient
    if (ingredient.trim()) {
      results = results.filter(recipe =>
        recipe.ingredients.some(ing => ing.toLowerCase().includes(ingredient.toLowerCase()))
      );
    }

    // Sorting
    results = [...results];
    switch (sortBy) {
      case 'calories':
        results.sort((a, b) =>
          parseInt(a.nutrition.Calories) - parseInt(b.nutrition.Calories)
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
  }, [query, category, protein, ingredient, sortBy]);

  //side panel code

const [selectedRecipe, setSelectedRecipe] = useState(null);
const [isPanelOpen, setIsPanelOpen] = useState(false);

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
              <option>Chicken</option>
              <option>Beef</option>
              <option>Fish</option>
              <option>Vegetarian</option>
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredRecipes.map(recipe => (
          <RecipeCard key={recipe.id} recipe={recipe}  onOpenPanel={handleOpenPanel}  />
        ))}

        {selectedRecipe && (
            <div className={`fixed top-0 right-0 w-80 h-full bg-white shadow-lg transform transition-transform duration-300 z-50 ${isPanelOpen ? 'translate-x-0' : 'translate-x-full'}`}>
   <FullRecipe onClose={handleClosePanel}  recipe={selectedRecipe} /> 
 
  </div>
        )}
      </div>
    </div>
  );
};

export default RecipeSearch;
