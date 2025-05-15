import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../../lib/firebase'; 

export async function generateStaticParams() {
  return [];
}

export default async function RecipePage({ params }) {
  const { id } = params;

  const docRef = doc(db, 'recipes', id);
  const docSnap = await getDoc(docRef);

  if (!docSnap.exists()) {
    return <div className="p-10 text-center">Recipe not found.</div>;
  }

  const recipe = docSnap.data();

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{recipe.name}</h1>
      {recipe.image && (
        <img
          src={recipe.image}
          alt={recipe.name}
          className="w-full h-64 object-cover rounded mb-4"
        />
      )}
      <p className="mb-2"><strong>Cook Time:</strong> {recipe.cookTime}</p>
      <p className="mb-2"><strong>Category:</strong> {recipe.category}</p>
      <h3 className="text-xl font-semibold mt-4 mb-2">Ingredients</h3>
      <ul className="list-disc pl-6 mb-4">
        {recipe.ingredients?.map((ing, index) => (
          <li key={index}>{ing}</li>
        ))}
      </ul>
      <h3 className="text-xl font-semibold mb-2">Instructions</h3>
      <ol className="list-decimal pl-6 mb-4">
        {recipe.instructions?.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>
      <h3 className="text-xl font-semibold mb-2">Nutrition</h3>
      <ul className="list-disc pl-6">
        <li>Calories: {recipe.nutrition?.Calories}</li>
        <li>Protein: {recipe.nutrition?.Protein}</li>
        <li>Carbs: {recipe.nutrition?.Carbs}</li>
        <li>Fat: {recipe.nutrition?.Fat}</li>
      </ul>
    </div>
  );
}
