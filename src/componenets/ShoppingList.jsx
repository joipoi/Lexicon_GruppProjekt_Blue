import React from 'react';

const ShoppingList = ({ ingredients }) => {
  return (
   
    <div>
       <h1>SHOPPING LIST</h1>
       <hr></hr>
       <ul>
      {ingredients.map(ingredient => (
        <li>{ingredient}</li>
      ))}
    </ul>
       
          </div>
         
  );
};

export default ShoppingList;
