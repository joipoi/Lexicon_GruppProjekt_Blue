'use client';
import { useParams } from 'next/navigation';
import { PDFDownloadLink } from '@react-pdf/renderer';
import RecipeCard from '../../../componenets/RecipeCard';
import ShoppingList from '../../../componenets/ShoppingList';
import RecipePDF from '../../../componenets/RecipePDF';

export default function Recipe() {
  const params = useParams();
  const recipeID = params.id;

  const fakeRecipes = [
    {
      id: '1',
      name: 'Yogurt med bär',
      image: '/frukost//ID-17.png',
      ingredients: ['Yogurt', 'Granola', 'bär'],
      instructions: ['Dela Banan', 'Blanda ihop'],
      nutrition: { Calories: '500 kcal', Protein: '30g', Carbs: '40g', Fat: '25g' },
      cookTime: '40min',
      difficulty: 2,
      category: "frukost"
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

  const currentRecipe = fakeRecipes.find(recipe => recipe.id === recipeID);

  return (
    <div>
      <h1>{currentRecipe.name}</h1>
      <RecipeCard recipe={currentRecipe} />
   

      <PDFDownloadLink
        document={<RecipePDF recipe={currentRecipe} />}
        fileName={`${currentRecipe.name}.pdf`}
      >
        {({ loading }) => (loading ? 'Generating PDF...' : 'Download as PDF')}
      </PDFDownloadLink>

     {/*<ShoppingList ingredients={currentRecipe.ingredients} />  */} 
    </div>
  );
  }