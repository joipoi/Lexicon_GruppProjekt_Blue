import React, { useEffect, useState } from 'react';
import ShoppingListPDF from './ShoppingListPDF';
import { PDFDownloadLink } from '@react-pdf/renderer';

const ShoppingList = () => {
  const [ingredients, setIngredients] = useState([]);
  const [ingredientsSorted, setIngredientsSorted] = useState([]);
  useEffect(() => {
  // Load from VeckoMeny (now an object like { "monday-breakfast": recipe, ... })
  const storedMenu = JSON.parse(localStorage.getItem('VeckoMeny')) || {};

  const weekRecipes = {
  monday: [],
  tuesday: [],
  wednesday: [],
  thursday: [],
  friday: [],
  saturday: [],
  sunday: [],
};

for (const key in storedMenu) {
  const [day, meal] = key.split('-');
  if (weekRecipes[day]) {
    weekRecipes[day].push(storedMenu[key]);
  }
}

setIngredientsSorted(weekRecipes)
  console.log(weekRecipes);

  // Get all recipe objects (values of the storedMenu object)
  const recipes = Object.values(storedMenu);

  // Collect all ingredients from all recipes
  const allIngredients = recipes.flatMap(recipe => recipe.ingredients || []);

  // Save to localStorage and state
  localStorage.setItem('shoppingList', JSON.stringify(allIngredients));
  setIngredients(allIngredients);
}, []);


  const clearList = () => {
    localStorage.setItem('shoppingList', JSON.stringify([]));
    setIngredients([]);
  };

  return (
    <div id="shopping-list-tab" className="tab-content">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Inköpslista</h2>
        <div className="flex space-x-2">
{ingredientsSorted && Object.keys(ingredientsSorted).length > 0 && (
  <PDFDownloadLink
    document={<ShoppingListPDF mealPlan={ingredientsSorted} />}
    fileName="ShoppingList.pdf"
  >
    <button className="cursor-pointer px-4 py-2 rounded-lg border border-[#8A9B7E]">
      Skriv ut
    </button>
  </PDFDownloadLink>
)}

          <button onClick={clearList} className="cursor-pointer px-4 py-2 rounded-lg border border-[#8A9B7E]">
            Rensa allt
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-md p-4">
          <h3 className="font-semibold text-lg mb-3 pb-2 border-b border-[#F3E9DC]">Varor</h3>
          <ul className="space-y-2">
            {ingredients.map((item, index) => (
              <li key={index} className="flex items-center">
                <input
                  type="checkbox"
                  className="mr-2 h-4 w-4 rounded border-[#8A9B7E] text-[#B5694D] focus:ring-[#D4A55E]"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>

        {/*   <div className="mt-4">
            <div className="flex">
              <input
                type="text"
                placeholder="Lägg till vara..."
                className="flex-grow p-2 border border-[#8A9B7E] rounded-l-lg focus:outline-none focus:ring-1 focus:ring-[#D4A55E]"
              />
              <button className="px-3 bg-[#8A9B7E] text-white rounded-r-lg">+</button>
            </div>
          </div>
          */}
        </div> 
      </div>
    </div>
  );
};

export default ShoppingList;
