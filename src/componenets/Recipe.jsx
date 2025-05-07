import React from 'react';

const Recipe = ({ image, name, ingredients, instructions, nutrition }) => {
  return (
    <div>
      <img src={image} alt={name} />

      <h2>{name}</h2>

      <section>
        <h3>Ingredients</h3>
        <ul>
          {ingredients.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </section>

      <section>
        <h3>Instructions</h3>
        <ol>
          {instructions.map((step, idx) => (
            <li key={idx}>{step}</li>
          ))}
        </ol>
      </section>

      <section>
        <h3>Nutrition Info</h3>
        <ul>
          {Object.entries(nutrition).map(([key, value]) => (
            <li key={key}>
              {key}: {value}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Recipe;
