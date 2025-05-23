import React, { useState, useEffect } from 'react';
import { DndContext, useDraggable, useDroppable } from '@dnd-kit/core';
const VeckoMeny = () => {

const [menuRecipes, setMenuRecipes] = useState([]);

//LocalStorage Code
  useEffect(() => {
    const storedMenu = JSON.parse(localStorage.getItem('valdaRecept')) || [];
    setMenuRecipes(storedMenu);
  }, []);

  useEffect(() => {
  const savedMenu = JSON.parse(localStorage.getItem("VeckoMeny")) || {};
  setAssignedRecipes(savedMenu);
}, []);

  //drag and drop code
    const [dropped, setDropped] = useState(false);
    const [assignedRecipes, setAssignedRecipes] = useState({});

  const { attributes, listeners, setNodeRef: setDraggableRef, transform } = useDraggable({
    id: 'draggable-1',
  });

  const { setNodeRef: setDroppableRef, isOver } = useDroppable({
    id: 'droppable-1',
  });

  const style = {
    transform: transform ? `translate(${transform.x}px, ${transform.y}px)` : undefined,
    cursor: 'grab',
  };

const handleDragEnd = (event) => {
  const { active, over } = event;

  if (over) {
    const recipeId = active.id;
    const dropZoneId = over.id;

    const droppedRecipe = menuRecipes.find((r) => r.id === recipeId);

    if (droppedRecipe) {
      // Update the UI state
      setAssignedRecipes((prev) => ({
        ...prev,
        [dropZoneId]: droppedRecipe,
      }));

      // Get existing menu from localStorage
      const storedMenu = JSON.parse(localStorage.getItem("VeckoMeny")) || {};

      // Update the slot with the new recipe
      const updatedMenu = {
        ...storedMenu,
        [dropZoneId]: droppedRecipe,
      };

      // Save it back
      localStorage.setItem("VeckoMeny", JSON.stringify(updatedMenu));
    }
  }
};




  

  //HELPER COMPONENET FOR DRAGGING
const DraggableRecipe = ({ recipe }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: recipe.id,
  });

  const style = {
    transform: transform ? `translate(${transform.x}px, ${transform.y}px)` : undefined,
    cursor: 'grab',
  };

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      style={style}
      className="drag-item bg-white p-3 rounded-lg shadow-sm border border-[#8A9B7E]"
    >
   <div className="flex justify-between items-center gap-2">
  <h4 className="font-medium flex-1 truncate">{recipe.name}</h4>
  <span
    className={`text-xs px-2 py-1 rounded-full inline-flex items-center justify-center min-w-[60px] flex-shrink-0 ${
      recipe.category === 'Lunch'
        ? 'bg-[#8A9B7E] text-white'
        : 'bg-[#D4A55E] text-[#3A3226]'
    }`}
  >
    {recipe.category}
  </span>
</div>
      <p className="text-sm text-[#8C7B6B] mt-1">
        {recipe.protein} • {recipe.cookTime}
      </p>
    </div>
  );
};

//HELPER COMPONENET FOR DROPPING
const DroppableZone = ({ id, children, assignedRecipe }) => {
  const { setNodeRef, isOver } = useDroppable({ id });

  const style = {
    backgroundColor: isOver ? '#F3E9DC' : undefined,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="border-2 border-dashed border-[#F3E9DC] rounded p-2 mb-3 min-h-[60px]"
    >
      {assignedRecipe ? (
        <div className="text-sm text-[#3A3226]">
          <strong>{assignedRecipe.name}</strong><br />
        </div>
      ) : children}
    </div>
  );
};


  return (
        <DndContext onDragEnd={handleDragEnd}>
<div id="meal-plan-tab" className="tab-content">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Veckomeny</h2>
       
        <div className="flex space-x-2">
          {/* <button className="px-4 py-2 rounded-lg border border-[#8A9B7E]">Spara meny</button> */} 
          <button
  className="px-4 py-2 rounded-lg cursor-pointer"
  onClick={() => {
    localStorage.removeItem('VeckoMeny'); // Clear from localStorage
    setAssignedRecipes({}); // Clear the displayed state
  }}
>
  Rensa VeckoMeny
</button>

        </div>
        
      </div>

      <div className="grid grid-cols-1 md:grid-cols-7 gap-4 mb-8">
      
        <div className="day-column rounded-lg overflow-hidden shadow-md">
          <div className="bg-[#8A9B7E] p-3 text-white font-semibold text-center">Måndag</div>
          <div className="p-3 bg-white">
       <h3 className="font-medium mb-2">Frukost</h3>
<DroppableZone id="monday-breakfast" assignedRecipe={assignedRecipes["monday-breakfast"]} />

<h3 className="font-medium mb-2">Lunch</h3>
<DroppableZone id="monday-lunch" assignedRecipe={assignedRecipes["monday-lunch"]} />

<h3 className="font-medium mb-2">Middag</h3>
<DroppableZone id="monday-dinner" assignedRecipe={assignedRecipes["monday-dinner"]} />


          </div>
        </div>

        <div className="day-column rounded-lg overflow-hidden shadow-md">
          <div className="bg-[#8A9B7E] p-3 text-white font-semibold text-center">Tisdag</div>
          <div className="p-3 bg-white">
            <h3 className="font-medium mb-2">Frukost</h3>
<DroppableZone id="tuesday-breakfast" assignedRecipe={assignedRecipes["tuesday-breakfast"]} />

<h3 className="font-medium mb-2">Lunch</h3>
<DroppableZone id="tuesday-lunch" assignedRecipe={assignedRecipes["tuesday-lunch"]} />

<h3 className="font-medium mb-2">Middag</h3>
<DroppableZone id="tuesday-dinner" assignedRecipe={assignedRecipes["tuesday-dinner"]} />
          </div>
        </div>

        <div className="day-column rounded-lg overflow-hidden shadow-md">
          <div className="bg-[#8A9B7E] p-3 text-white font-semibold text-center">Onsdag</div>
          <div className="p-3 bg-white">
       <h3 className="font-medium mb-2">Frukost</h3>
<DroppableZone id="wednesday-breakfast" assignedRecipe={assignedRecipes["wednesday-breakfast"]} />

<h3 className="font-medium mb-2">Lunch</h3>
<DroppableZone id="wednesday-lunch" assignedRecipe={assignedRecipes["wednesday-lunch"]} />

<h3 className="font-medium mb-2">Middag</h3>
<DroppableZone id="wednesday-dinner" assignedRecipe={assignedRecipes["wednesday-dinner"]} />


          </div>
        </div>

        <div className="day-column rounded-lg overflow-hidden shadow-md">
          <div className="bg-[#8A9B7E] p-3 text-white font-semibold text-center">Torsdag</div>
          <div className="p-3 bg-white">
       <h3 className="font-medium mb-2">Frukost</h3>
<DroppableZone id="thursday-breakfast" assignedRecipe={assignedRecipes["thursday-breakfast"]} />

<h3 className="font-medium mb-2">Lunch</h3>
<DroppableZone id="thursday-lunch" assignedRecipe={assignedRecipes["thursday-lunch"]} />

<h3 className="font-medium mb-2">Middag</h3>
<DroppableZone id="thursday-dinner" assignedRecipe={assignedRecipes["thursday-dinner"]} />


          </div>
        </div>

        <div className="day-column rounded-lg overflow-hidden shadow-md">
          <div className="bg-[#8A9B7E] p-3 text-white font-semibold text-center">Fredag</div>
          <div className="p-3 bg-white">
       <h3 className="font-medium mb-2">Frukost</h3>
<DroppableZone id="friday-breakfast" assignedRecipe={assignedRecipes["friday-breakfast"]} />

<h3 className="font-medium mb-2">Lunch</h3>
<DroppableZone id="friday-lunch" assignedRecipe={assignedRecipes["friday-lunch"]} />

<h3 className="font-medium mb-2">Middag</h3>
<DroppableZone id="friday-dinner" assignedRecipe={assignedRecipes["friday-dinner"]} />


          </div>
        </div>

        
           <div className="day-column rounded-lg overflow-hidden shadow-md">
          <div className="bg-[#8A9B7E] p-3 text-white font-semibold text-center">Lördag</div>
          <div className="p-3 bg-white">
       <h3 className="font-medium mb-2">Frukost</h3>
<DroppableZone id="saturday-breakfast" assignedRecipe={assignedRecipes["saturday-breakfast"]} />

<h3 className="font-medium mb-2">Lunch</h3>
<DroppableZone id="saturday-lunch" assignedRecipe={assignedRecipes["saturday-lunch"]} />

<h3 className="font-medium mb-2">Middag</h3>
<DroppableZone id="saturday-dinner" assignedRecipe={assignedRecipes["saturday-dinner"]} />


          </div>
        </div>

           <div className="day-column rounded-lg overflow-hidden shadow-md">
          <div className="bg-[#8A9B7E] p-3 text-white font-semibold text-center">Söndag</div>
          <div className="p-3 bg-white">
       <h3 className="font-medium mb-2">Frukost</h3>
<DroppableZone id="sunday-breakfast" assignedRecipe={assignedRecipes["sunday-breakfast"]} />

<h3 className="font-medium mb-2">Lunch</h3>
<DroppableZone id="sunday-lunch" assignedRecipe={assignedRecipes["sunday-lunch"]} />

<h3 className="font-medium mb-2">Middag</h3>
<DroppableZone id="sunday-dinner" assignedRecipe={assignedRecipes["sunday-dinner"]} />


          </div>
        </div>

      </div>

        <div className="bg-[#F3E9DC] p-6 rounded-lg">
          <div className="flex justify-between items-center mb-6">
      <h3 className="text-lg font-semibold mb-4">Dina valda recept</h3>
          <div className="flex space-x-2">
          <button
  className="px-4 py-2 rounded-lg cursor-pointer"
  onClick={() => {
    localStorage.removeItem('valdaRecept'); // Clear from localStorage
    setMenuRecipes([]); // Clear the displayed state
  }}
>
  Rensa VeckoMeny
</button>

        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      
        {menuRecipes.map((recipe) => (
  <DraggableRecipe key={recipe.id} recipe={recipe} />
))}
        
      </div>
      
      
    </div>
     
    </div>
    </DndContext>
  );
};

export default VeckoMeny;

