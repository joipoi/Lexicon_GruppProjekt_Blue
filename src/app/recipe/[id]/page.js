'use client';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../../lib/firebase';
import RecipePDF from '../../../componenets/RecipePDF';
import FullRecipe from '../../../componenets/FullRecipe';

export default function Recipe() {
  const { id: recipeID } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

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
      category: 'Frukost',
      description: 'Klassisk italiensk pasta med ägg, pancetta och parmesan.',
      protein: 'chicken',
      rating: 5,
    },
    {
      id: '2',
      name: 'Knäckebröd',
      image: '/frukost//ID-1.png',
      ingredients: ['knäckebröd', 'Pålägg'],
      instructions: ['Bre på smör', 'På med pålägg'],
      nutrition: { Calories: '500 kcal', Protein: '30g', Carbs: '40g', Fat: '25g' },
      cookTime: '10min',
      difficulty: 3,
      category: 'Middag',
      description: 'Klassisk italiensk pasta med ägg, pancetta och parmesan.',
      protein: 'Vegeterian',
      rating: 3,
    },
    {
      id: '3',
      name: 'Yogurt med granola och banan',
      image: '/frukost//ID-2.png',
      ingredients: ['Yogurt', 'Granola', 'Banan'],
      instructions: ['Dela Banan', 'Blanda ihop'],
      nutrition: { Calories: '500 kcal', Protein: '30g', Carbs: '40g', Fat: '25g' },
      cookTime: '20min',
      difficulty: 3,
      category: 'Middag',
      description: 'Klassisk italiensk pasta med ägg, pancetta och parmesan.',
      protein: 'Beef',
      rating: 4,
    },
    {
      id: '4',
      name: 'Pasta Carbonara',
      image: '/lunch/ID-112.png',
      ingredients: [
        '400 g spaghetti',
        '200 g pancetta',
        '3 äggulor',
        '50 g parmesan',
        'Svartpeppar',
      ],
      instructions: [
        'Koka pastan enligt anvisning på förpackningen.',
        'Stek pancettan knaprig i en torr stekpanna.',
        'Vispa ihop äggulor och riven parmesan i en skål.',
        'Häll av pastan och blanda snabbt med äggblandningen och pancettan.',
        'Krydda med svartpeppar och servera omedelbart.',
      ],
      nutrition: { Calories: '650 kcal', Protein: '25 g', Carbs: '75 g', Fat: '25 g' },
      cookTime: '30 min',
      difficulty: 3,
      category: 'Middag',
      description:
        'En äkta italiensk klassiker som är både enkel och otroligt god. Perfekt för en snabb vardagsmiddag.',
      protein: 'Kyckling',
      rating: 4,
    },
  ];

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const docRef = doc(db, 'recipes', recipeID);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setRecipe({ id: recipeID, ...docSnap.data() });
        } else {
          const fallback = fakeRecipes.find((r) => r.id === recipeID);
          setRecipe(fallback || null);
        }
      } catch (error) {
        console.error('Error fetching recipe:', error);
        const fallback = fakeRecipes.find((r) => r.id === recipeID);
        setRecipe(fallback || null);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipe();
  }, [recipeID]);

  if (loading) return <div className="p-6 text-center">Loading recipe...</div>;
  if (!recipe) return <div className="p-6 text-center">Recipe not found.</div>;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <FullRecipe recipe={recipe} />

      <div className="mt-8">
        <PDFDownloadLink document={<RecipePDF recipe={recipe} />} fileName={`${recipe.name}.pdf`}>
          {({ loading }) => (loading ? 'Generating PDF...' : 'Download as PDF')}
        </PDFDownloadLink>
      </div>
    </div>
  );
}
