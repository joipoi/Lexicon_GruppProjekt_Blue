import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../../lib/firebase';
import EditableRecipe from '../../../componenets/EditableRecipe'; 

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
      <EditableRecipe initialRecipe={recipe} />
    </div>
  );
}