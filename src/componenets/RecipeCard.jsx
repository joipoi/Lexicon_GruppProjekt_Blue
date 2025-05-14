import React from 'react';

const RecipeCard = ({ recipe, onOpenPanel  }) => {
const handleAddToMenu = () => {
  const storedMenu = JSON.parse(localStorage.getItem('valdaRecept')) || [];

  // Check if a recipe with the same id already exists
  const alreadyExists = storedMenu.some(item => item.id === recipe.id);

  if (!alreadyExists) {
    const updatedMenu = [...storedMenu, recipe];
    localStorage.setItem('valdaRecept', JSON.stringify(updatedMenu));
  }
};

  return (
    <div key={recipe.id} className="recipe-card bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <img src={recipe.image} alt={recipe.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-semibold">{recipe.name}</h3>
          <span className="bg-[#D4A55E] text-[#3A3226] text-xs px-2 py-1 rounded-full">{recipe.category}</span>
        </div>
        <div className="flex items-center text-sm text-[#8C7B6B] mb-3">
          <span className="mr-3">🕒 {recipe.cookTime}</span>
          <span>{recipe.protein}</span>
        </div>
        <p className="text-sm mb-4">{recipe.description}</p>
        <div className="flex justify-between items-center">
          <button className="cursor-pointer text-sm font-medium" onClick={() => onOpenPanel(recipe)}>
           Se recept
          </button>
          <button
            onClick={handleAddToMenu}
            className="add-to-plan text-sm px-3 py-1 rounded-lg border border-[#8A9B7E] hover:bg-[#8A9B7E] hover:text-white transition-colors cursor-pointer"
          >
            Lägg till i meny
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
