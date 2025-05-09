import React from 'react';

const RecipeCard = ({ recipe }) => {
  return (
   
    <div
            key={recipe.id}
            className="border rounded-lg shadow-lg p-4 flex flex-col items-center text-center bg-white"
          >
           <a href={'/recipe/' + recipe.id}>
            <img
              src={recipe.image}
              alt={recipe.name}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
             </a>
            <h4 className="text-xl font-bold mb-2">{recipe.name}</h4>
            <p className="text-sm text-gray-600 mb-2">
              <strong>Ingredients:</strong> {recipe.ingredients.join(', ')}
            </p>
            <p className="text-sm text-gray-600 mb-2">
              <strong>Instructions:</strong> {recipe.instructions.join('. ')}
            </p>
            <p className="text-sm text-gray-600">
              <strong>Nutrition:</strong> Calories: {recipe.nutrition.Calories}, Protein: {recipe.nutrition.Protein}, Carbs: {recipe.nutrition.Carbs}, Fat: {recipe.nutrition.Fat}
            </p>
          </div>
         
  );
};

export default RecipeCard;
