'use client';
import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../lib/firebase'; // Adjust the path if needed
import RecipeSearch from '../../componenets/RecipeSearch';
import UploadRecipe from '../../componenets/UploadRecipe';
import { useRouter } from 'next/navigation';


const Recipes = () => {
  const [recipes, setRecipes] = useState([]);

  // Fetch recipes from Firestore when the component mounts
  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'recipes')); // Get all recipes from Firestore
        const fetchedRecipes = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setRecipes(fetchedRecipes); // Store recipes in state
      } catch (error) {
        console.error('Error fetching recipes: ', error);
      }
    };

    fetchRecipes(); // Call the function to fetch recipes
  }, []);

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
          4.2 LUNCH/MIDDAG Ta en smakresa under lunchtimmen med våra härliga lunchrecept. Vi har handplockat recept
          från respekterade kockar och Atlas Food för att ge dig en varierad och smakrik matupplevelse under lunchen.
          Vårt fokus ligger på att tillgodose matentusiaster som vill organisera sina recept, hälsomedvetna personer som
          vill ha kontroll över sina näringsvärden och familjer som behöver enkla och näringsrika lunchalternativ för
          veckan. Njut av lunchen med våra noggrant utvalda recept!
        </p>
      </div>
      <p className="text-center text-lg font-semibold mt-8">Förslag:</p>

      {/* Render each recipe directly */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {recipes.length > 0 ? (
          recipes.map((recipe) => (
            <div key={recipe.id} className="recipe-card border p-4 rounded-lg shadow-lg">
              <img
                src={recipe.image}
                alt={recipe.name}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <h4 className="text-xl font-semibold mt-4">{recipe.name}</h4>
              <p className="text-gray-600">{recipe.cookTime}</p>
              <ul className="mt-2">
                <li><strong>Calories:</strong> {recipe.nutrition.Calories}</li>
                <li><strong>Protein:</strong> {recipe.nutrition.Protein}</li>
                <li><strong>Carbs:</strong> {recipe.nutrition.Carbs}</li>
                <li><strong>Fat:</strong> {recipe.nutrition.Fat}</li>
              </ul>
              <div className="mt-4">
                <button className="bg-blue-500 text-white py-2 px-4 rounded">View Recipe</button>
              </div>
            </div>
          ))
        ) : (
          <p>No recipes available</p>
        )}
      </div>

      <div className="mt-20">
        <h2 className="text-center text-2xl font-bold mb-6">Lägg till nytt recept</h2>
        <UploadRecipe />
      </div>

      {/* RecipeSearch Component */}
      <RecipeSearch />

    </div>
  );
};

export default Recipes;