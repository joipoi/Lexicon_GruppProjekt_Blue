import React, { useState } from 'react';
import RecipeSearch from './RecipeSearch';
import VeckoMeny from './VeckoMeny';
import ShoppingList from './ShoppingList';

const FoodPlanner = () => {
  const [activeTab, setActiveTab] = useState('recipes'); // default tab

  const renderTabContent = () => {
    switch (activeTab) {
      case 'recipes':
        return <RecipeSearch />;
      case 'meal-plan':
        return <VeckoMeny />;
      case 'shopping-list':
        return <ShoppingList />;
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-center">Matplaneraren</h1>
        <p className="text-center text-[#8C7B6B] mt-2">
          Planera dina måltider och skapa inköpslistor enkelt
        </p>
      </header>

      <nav className="flex justify-center mb-8">
        <div className="flex space-x-1 bg-[#F3E9DC] p-1 rounded-lg">
          <button
            onClick={() => setActiveTab('recipes')}
            className={`px-4 py-2 rounded-md font-medium ${
              activeTab === 'recipes' ? 'bg-white' : ''
            }`}
          >
            Recept
          </button>
          <button
            onClick={() => setActiveTab('meal-plan')}
            className={`px-4 py-2 rounded-md font-medium ${
              activeTab === 'meal-plan' ? 'bg-white' : ''
            }`}
          >
            Veckomeny
          </button>
          <button
            onClick={() => setActiveTab('shopping-list')}
            className={`px-4 py-2 rounded-md font-medium ${
              activeTab === 'shopping-list' ? 'bg-white' : ''
            }`}
          >
            Inköpslista
          </button>
        </div>
      </nav>

      <main>{renderTabContent()}</main>
    </div>
  );
};

export default FoodPlanner;
