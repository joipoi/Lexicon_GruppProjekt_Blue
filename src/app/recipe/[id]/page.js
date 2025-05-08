'use client';
import { useParams } from 'next/navigation';
import RecipeCard from "../../../componenets/RecipeCard"

export default function Recipe() {
  const params = useParams();
  const recipeID = params.id;

  const fakeRecipes = [
    {
      id: '3',
      name: 'Yogurt med bär',
      image: '/frukost//ID-17.png',
      ingredients: ['Yogurt', 'Granola', 'bär'],
      instructions: ['Dela Banan', 'Blanda ihop'],
      nutrition: { Calories: '500 kcal', Protein: '30g', Carbs: '40g', Fat: '25g' },
      cookTime: '40min',
      difficulty: 2
    },
    {
      id: '3',
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

  const currentRecipe = fakeRecipes.find(recipe => recipe.id === recipeID);

  return (
    <div>
      <h1>User Page</h1>
      <RecipeCard recipe={currentRecipe} />
    </div>
  );
  }