'use client';
import { useParams } from 'next/navigation';
import RecipeCard from "../../../componenets/Recipe"

export default function Recipe() {
  const params = useParams();
  const recipeID = params.id;

  const fakeRecipes = [
    {
      id: '1',
      name: 'Spaghetti Bolognese',
      image: '/frukost//ID-17.png',
      ingredients: ['Spaghetti', 'Ground beef', 'Tomato sauce'],
      instructions: ['Cook pasta', 'Cook beef', 'Mix with sauce'],
      nutrition: { Calories: '600 kcal', Protein: '25g', Carbs: '70g', Fat: '20g' },
    },
    {
      id: '2',
      name: 'Chicken Alfredo',
      image: '/frukost//ID-1.png',
      ingredients: ['Chicken', 'Fettuccine', 'Cream'],
      instructions: ['Cook chicken', 'Boil pasta', 'Combine with cream'],
      nutrition: { Calories: '750 kcal', Protein: '40g', Carbs: '65g', Fat: '35g' },
    },
    {
      id: '3',
      name: 'Beef Tacos',
      image: '/frukost//ID-2.png',
      ingredients: ['Beef', 'Taco shells', 'Lettuce', 'Cheese'],
      instructions: ['Cook beef', 'Fill shells', 'Add toppings'],
      nutrition: { Calories: '500 kcal', Protein: '30g', Carbs: '40g', Fat: '25g' },
    },
  ];

  const currentRecipe = fakeRecipes.find(recipe => recipe.id === recipeID);

  return (
    <div>
      <h1>User Page</h1>
      <RecipeCard {...currentRecipe} />
    </div>
  );
  }