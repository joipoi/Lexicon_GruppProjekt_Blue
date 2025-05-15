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
        <h1 className="text-4xl font-bold text-center" style={{ color: '#B5694D' }}>Matplaneraren</h1>
        <p className="text-center text-[#8C7B6B] mt-2">
          Planera dina måltider och skapa inköpslistor enkelt
        </p>
      </header>

      {/* How it Works Section - Added above the tabs */}
      <div className="mt-8 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Step 1 */}
          <div className={`bg-white p-5 rounded-xl shadow-md transition-all duration-300 border-l-4 ${
            activeTab === 'recipes' ? 'border-[#B5694D] scale-105' : 'border-[#F3E9DC]'
          }`}>
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 rounded-full bg-[#B5694D] text-white flex items-center justify-center text-sm font-bold mr-3">
                1
              </div>
              <h3 className="text-lg font-semibold" style={{ color: '#3A3226' }}>Upptäck Recept</h3>
            </div>
            <p className="text-sm text-[#8C7B6B]">
              Använd vår <span className="font-medium" style={{ color: '#8A9B7E' }}>Smart Receptbank</span> för att hitta och filtrera recept efter dina preferenser.
            </p>
          </div>

          {/* Step 2 */}
          <div className={`bg-white p-5 rounded-xl shadow-md transition-all duration-300 border-l-4 ${
            activeTab === 'meal-plan' ? 'border-[#B5694D] scale-105' : 'border-[#F3E9DC]'
          }`}>
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 rounded-full bg-[#B5694D] text-white flex items-center justify-center text-sm font-bold mr-3">
                2
              </div>
              <h3 className="text-lg font-semibold" style={{ color: '#3A3226' }}>Bygg Veckomeny</h3>
            </div>
            <p className="text-sm text-[#8C7B6B]">
              <span className="font-medium" style={{ color: '#8A9B7E' }}>Dra och släpp</span> recept för att skapa din perfekta veckomeny.
            </p>
          </div>

          {/* Step 3 */}
          <div className={`bg-white p-5 rounded-xl shadow-md transition-all duration-300 border-l-4 ${
            activeTab === 'shopping-list' ? 'border-[#B5694D] scale-105' : 'border-[#F3E9DC]'
          }`}>
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 rounded-full bg-[#B5694D] text-white flex items-center justify-center text-sm font-bold mr-3">
                3
              </div>
              <h3 className="text-lg font-semibold" style={{ color: '#3A3226' }}>Inköpslista</h3>
            </div>
            <p className="text-sm text-[#8C7B6B]">
              Få en <span className="font-medium" style={{ color: '#8A9B7E' }}>automatisk inköpslista</span> baserad på din veckomeny.
            </p>
          </div>
        </div>
      </div>

      <nav className="flex justify-center mb-8">
        <div className="flex space-x-1 bg-[#F3E9DC] p-1 rounded-lg">
          <button
            onClick={() => setActiveTab('recipes')}
            className={`px-4 py-2 rounded-md font-medium transition-colors ${
              activeTab === 'recipes' 
                ? 'bg-white text-[#B5694D] shadow-sm' 
                : 'text-[#8C7B6B] hover:text-[#B5694D]'
            }`}
          >
            Recept
          </button>
          <button
            onClick={() => setActiveTab('meal-plan')}
            className={`px-4 py-2 rounded-md font-medium transition-colors ${
              activeTab === 'meal-plan' 
                ? 'bg-white text-[#B5694D] shadow-sm' 
                : 'text-[#8C7B6B] hover:text-[#B5694D]'
            }`}
          >
            Veckomeny
          </button>
          <button
            onClick={() => setActiveTab('shopping-list')}
            className={`px-4 py-2 rounded-md font-medium transition-colors ${
              activeTab === 'shopping-list' 
                ? 'bg-white text-[#B5694D] shadow-sm' 
                : 'text-[#8C7B6B] hover:text-[#B5694D]'
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