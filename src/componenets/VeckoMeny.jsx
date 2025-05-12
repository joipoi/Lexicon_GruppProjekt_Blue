import React, { useState, useEffect } from 'react';

const VeckoMeny = ({ ingredients }) => {

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
];

const [menuRecipes, setMenuRecipes] = useState([]);

  useEffect(() => {
    const storedMenu = JSON.parse(localStorage.getItem('veckoMeny')) || [];
    const matchedRecipes = fakeRecipes.filter(recipe => storedMenu.includes(recipe.id));
    setMenuRecipes(matchedRecipes);
  }, []);

  return (
   
<div id="meal-plan-tab" className="tab-content">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Veckomeny</h2>
        <div className="flex space-x-2">
          <button className="px-4 py-2 rounded-lg border border-[#8A9B7E]">Spara meny</button>
          <button className="px-4 py-2 rounded-lg text-white">Ny veckomeny</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-7 gap-4 mb-8">
      
        <div className="day-column rounded-lg overflow-hidden shadow-md">
          <div className="bg-[#8A9B7E] p-3 text-white font-semibold text-center">Måndag</div>
          <div className="p-3 bg-white">
            <h3 className="font-medium mb-2">Frukost</h3>
            <div className="drop-zone border-2 border-dashed border-[#F3E9DC] rounded p-2 mb-3" data-meal="breakfast" data-day="monday"></div>
            
            <h3 className="font-medium mb-2">Lunch</h3>
            <div className="drop-zone border-2 border-dashed border-[#F3E9DC] rounded p-2 mb-3" data-meal="lunch" data-day="monday"></div>
            
            <h3 className="font-medium mb-2">Middag</h3>
            <div className="drop-zone border-2 border-dashed border-[#F3E9DC] rounded p-2" data-meal="dinner" data-day="monday"></div>
          </div>
        </div>

        <div className="day-column rounded-lg overflow-hidden shadow-md">
          <div className="bg-[#8A9B7E] p-3 text-white font-semibold text-center">Tisdag</div>
          <div className="p-3 bg-white">
            <h3 className="font-medium mb-2">Frukost</h3>
            <div className="drop-zone border-2 border-dashed border-[#F3E9DC] rounded p-2 mb-3" data-meal="breakfast" data-day="tuesday"></div>
            
            <h3 className="font-medium mb-2">Lunch</h3>
            <div className="drop-zone border-2 border-dashed border-[#F3E9DC] rounded p-2 mb-3" data-meal="lunch" data-day="tuesday"></div>
            
            <h3 className="font-medium mb-2">Middag</h3>
            <div className="drop-zone border-2 border-dashed border-[#F3E9DC] rounded p-2" data-meal="dinner" data-day="tuesday"></div>
          </div>
        </div>

      </div>

        <div className="bg-[#F3E9DC] p-6 rounded-lg">
      <h3 className="text-lg font-semibold mb-4">Dina valda recept</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {menuRecipes.map(recipe => (
          <div
            key={recipe.id}
            className="drag-item bg-white p-3 rounded-lg shadow-sm border border-[#8A9B7E]"
            draggable="true"
          >
            <div className="flex justify-between">
              <h4 className="font-medium">{recipe.name}</h4>
              <span
                className={`text-xs px-2 py-1 rounded-full ${
                  recipe.category === 'Lunch'
                    ? 'bg-[#8A9B7E] text-white'
                    : 'bg-[#D4A55E] text-[#3A3226]'
                }`}
              >
                {recipe.category}
              </span>
            </div>
            <p className="text-sm text-[#8C7B6B] mt-1">
              {recipe.protein} • {recipe.cookTime}
            </p>
          </div>
        ))}
      </div>
    </div>
     
    </div>

         
  );
};

export default VeckoMeny;

