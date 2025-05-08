'use client';
import Recipe from "../../componenets/Recipe";

import React from 'react';

const Recipes = () => {
  // Define the recipe data as an array
  const fakeRecipes = [
    {
      id: '1',
      name: 'Spaghetti Bolognese',
      image: '/frukost/ID-17.png',
      ingredients: ['Spaghetti', 'Ground beef', 'Tomato sauce'],
      instructions: ['Cook pasta', 'Cook beef', 'Mix with sauce'],
      nutrition: { Calories: '600 kcal', Protein: '25g', Carbs: '70g', Fat: '20g' },
    },
    {
      id: '2',
      name: 'Chicken Alfredo',
      image: '/frukost/ID-1.png',
      ingredients: ['Chicken', 'Fettuccine', 'Cream'],
      instructions: ['Cook chicken', 'Boil pasta', 'Combine with cream'],
      nutrition: { Calories: '750 kcal', Protein: '40g', Carbs: '65g', Fat: '35g' },
    },
    {
      id: '3',
      name: 'Beef Tacos',
      image: '/frukost/ID-2.png',
      ingredients: ['Beef', 'Taco shells', 'Lettuce', 'Cheese'],
      instructions: ['Cook beef', 'Fill shells', 'Add toppings'],
      nutrition: { Calories: '500 kcal', Protein: '30g', Carbs: '40g', Fat: '25g' },
    },
  ];

  return (
    <div id="recipes" className="w-full px-[12%] py-10 scroll-mt-20">
      <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
        <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Lexend">Recipe</h3>
        <p className="max-w-2xl mx-auto font-Ovo">
          4.1 FRUKOST/MELLANMÅL Välkommen till vår frukostsida där du kan hitta inspirerande recept för en härlig start
          på dagen. Här presenterar vi noggrant utvalda recept från gedigna kockar över hela världen, med ett urval från
          Atlas Food för en internationell smakupplevelse. Målgruppen för våra frukostrecept är matentusiaster som vill
          organisera sina recept, hälsomedvetna individer som vill räkna näringsvärden och familjer som behöver planera
          för en smakfull och näringsrik frukost varje dag.
          <br />
          <br />
          4.2 LUNCH/MIDDAG Ta en smakresa under lunchtimmen med våra härliga lunch recept. Vi har handplockat recept
          från respekterade kockar och Atlas Food för att ge dig en varierad och smakrik matupplevelse under lunchen.
          Vårt fokus ligger på att tillgodose matentusiaster som vill organisera sina recept, hälsomedvetna personer som
          vill ha kontroll över sina näringsvärden och familjer som behöver enkla och näringsrika lunchalternativ för
          veckan. Njut av lunchen med våra noggrant utvalda recept!
        </p>
      </div>
      <p className="text-center text-lg font-semibold mt-8">in recipes</p>
      {/* Render each recipe using the Recipe component */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {fakeRecipes.map((recipe) => (
          <div
            key={recipe.id}
            className="border rounded-lg shadow-lg p-4 flex flex-col items-center text-center bg-white"
          >
            <img
              src={recipe.image}
              alt={recipe.name}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
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
        ))}
      </div>
    </div>
  );
};

export default Recipes;