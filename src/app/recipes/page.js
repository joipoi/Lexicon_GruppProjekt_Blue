'use client';
import Recipe from "../../componenets/Recipe";

export default function Recipes() {
    
    const fakeRecipes = [
        {
          id: '1',
          name: 'Spaghetti Bolognese',
          image: 'https://via.placeholder.com/150',
          ingredients: ['Spaghetti', 'Ground beef', 'Tomato sauce'],
          instructions: ['Cook pasta', 'Cook beef', 'Mix with sauce'],
          nutrition: { Calories: '600 kcal', Protein: '25g', Carbs: '70g', Fat: '20g' },
        },
        {
          id: '2',
          name: 'Chicken Alfredo',
          image: 'https://via.placeholder.com/150',
          ingredients: ['Chicken', 'Fettuccine', 'Cream'],
          instructions: ['Cook chicken', 'Boil pasta', 'Combine with cream'],
          nutrition: { Calories: '750 kcal', Protein: '40g', Carbs: '65g', Fat: '35g' },
        },
        {
          id: '3',
          name: 'Beef Tacos',
          image: 'https://via.placeholder.com/150',
          ingredients: ['Beef', 'Taco shells', 'Lettuce', 'Cheese'],
          instructions: ['Cook beef', 'Fill shells', 'Add toppings'],
          nutrition: { Calories: '500 kcal', Protein: '30g', Carbs: '40g', Fat: '25g' },
        },
      ];

    return (
      <>
    <p>in recipes</p>
    <Recipe {...fakeRecipes[0]} />
      
      </>
    );
  }