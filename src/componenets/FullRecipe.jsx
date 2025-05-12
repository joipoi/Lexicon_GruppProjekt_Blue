const FullRecipe = ({ recipe, onClose }) => {
return (
  <div className="recipe-detail fixed h-full bg-white z-20 overflow-y-auto" data-recipe-id="1">
    <div className="p-6">
    
      <button  onClick={onClose} className="close-recipe mb-6 p-1 rounded-full hover:bg-[#F3E9DC] transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#3A3226">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      
 
      <img src={recipe.image} 
           alt={recipe.name}
           className="w-full h-64 object-cover rounded-lg mb-6" />
      
      <h1 className="text-3xl font-bold mb-2">{recipe.name}</h1>
      <div className="flex items-center text-[#8C7B6B] mb-6">
        <span className="mr-4">🕒 {recipe.cookTime}</span>
        <span className="mr-4">🥓 {recipe.protein}</span>
        <span className="bg-[#D4A55E] text-[#3A3226] text-xs px-2 py-1 rounded-full">{recipe.category}</span>
      </div>
      
      <p className="mb-8">{recipe.description}</p>
      
      <div className="grid grid-cols-2 gap-6 mb-8">
        <div>
          <h3 className="font-bold mb-3">Ingredienser</h3>
          <ul className="space-y-2">
              {recipe.ingredients.map(ingredient => (
               
            <li  key={ingredient} className="flex items-start">
                
              <span className="inline-block w-5 h-5 bg-[#F3E9DC] rounded-full mr-2 mt-1"></span>
              <span>{ingredient}</span>
            </li>
           ))}
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-3">Näringsvärden</h3>
          <ul className="space-y-2">
            <li className="flex justify-between">
              <span>Kalorier</span>
              <span>{recipe.nutrition.Calories}</span>
            </li>
            <li className="flex justify-between">
              <span>Protein</span>
              <span>{recipe.nutrition.Protein}</span>
            </li>
            <li className="flex justify-between">
              <span>Kolhydrater</span>
              <span>{recipe.nutrition.Carbs}</span>
            </li>
            <li className="flex justify-between">
              <span>Fett</span>
              <span>{recipe.nutrition.Fat}</span>
            </li>
          </ul>
        </div>
      </div>
      
      <h3 className="font-bold mb-3">Tillagning</h3>
      <ol className="space-y-4 mb-8">
        {recipe.instructions.map((item, index) => (
 <li key={index} className="flex">
    
          <span className="inline-block w-6 h-6 bg-[#8A9B7E] text-white rounded-full text-center mr-3 flex-shrink-0">{index+1}</span>
          <span>{item}</span>
        </li>
            ))}
      </ol>
      
      <button className="w-full py-3 px-6 rounded-lg font-medium text-white mb-4 transition-colors">
        Lägg till i veckomeny
      </button>
    </div>
  </div>

)
}


export default FullRecipe
