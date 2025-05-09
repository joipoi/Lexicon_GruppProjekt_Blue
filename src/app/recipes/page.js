'use client';
import RecipeSearch from "../../componenets/RecipeSearch";

import React from 'react';

const Recipes = () => {
  // Define the recipe data as an array
  const fakeRecipes = [
    {
      id: '1',
      name: 'Yogurt med bär',
      image: '/frukost//ID-17.png',
      ingredients: ['Yogurt', 'Granola', 'bär'],
      instructions: ['Dela Banan', 'Blanda ihop'],
      nutrition: { Calories: '500 kcal', Protein: '30g', Carbs: '40g', Fat: '25g' },
      cookTime: '40min',
      difficulty: 2
    },
    {
      id: '2',
      name: 'Knäckebröd',
      image: '/frukost//ID-1.png',
      ingredients: ['knäckebröd', 'Pålägg'],
      instructions: ['Bre på smör', 'På med pålägg'],
      nutrition: { Calories: '500 kcal', Protein: '30g', Carbs: '40g', Fat: '25g' },
      cookTime: '10min',
      difficulty: 3
    },
    {
      id: '3',
      name: 'Yogurt med granola och banan',
      image: '/frukost//ID-2.png',
      ingredients: ['Yogurt', 'Granola', 'Banan'],
      instructions: ['Dela Banan', 'Blanda ihop'],
      nutrition: { Calories: '500 kcal', Protein: '30g', Carbs: '40g', Fat: '25g' },
      cookTime: '20min',
      difficulty: 3
    },
  ];

  return (
    <div id="recipes" className="w-full px-[12%] py-10 scroll-mt-20">
      <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
        <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Lexend">Recept</h3>
        <p className="max-w-2xl mx-auto font-Lexend">
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
      <p className="text-center text-lg font-semibold mt-8">Förslag:</p>
      {/* Render each recipe using the Recipe component 
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {fakeRecipes.map((temp) => (
        <Recipe key={temp.id} recipe={temp} />
        ))}
        
      </div>
      */}
      <RecipeSearch />

    </div>
  );
};

export default Recipes;