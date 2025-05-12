import React from 'react';

const ShoppingList = ({ ingredients }) => {
  return (
   
 <div id="shopping-list-tab" className="tab-content">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Inköpslista</h2>
        <div className="flex space-x-2">
          <button className="px-4 py-2 rounded-lg border border-[#8A9B7E]">Skriv ut</button>
          <button className="px-4 py-2 rounded-lg border border-[#8A9B7E]">Rensa allt</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-md p-4">
          <h3 className="font-semibold text-lg mb-3 pb-2 border-b border-[#F3E9DC]">Grönsaker</h3>
          <ul className="space-y-2">
            <li className="flex items-center">
              <input type="checkbox" className="mr-2 h-4 w-4 rounded border-[#8A9B7E] text-[#B5694D] focus:ring-[#D4A55E]" />
              <span>2 st salladshuvuden</span>
            </li>
            <li className="flex items-center">
              <input type="checkbox" className="mr-2 h-4 w-4 rounded border-[#8A9B7E] text-[#B5694D] focus:ring-[#D4A55E]"/>
              <span>5 st tomater</span>
            </li>
            <li className="flex items-center">
              <input type="checkbox" className="mr-2 h-4 w-4 rounded border-[#8A9B7E] text-[#B5694D] focus:ring-[#D4A55E]"/>
              <span>1 st gurka</span>
            </li>
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-md p-4">
          <h3 className="font-semibold text-lg mb-3 pb-2 border-b border-[#F3E9DC]">Kött & Fisk</h3>
          <ul className="space-y-2">
            <li className="flex items-center">
              <input type="checkbox" className="mr-2 h-4 w-4 rounded border-[#8A9B7E] text-[#B5694D] focus:ring-[#D4A55E]"/>
              <span>500 g kycklingbröst</span>
            </li>
            <li className="flex items-center">
              <input type="checkbox" className="mr-2 h-4 w-4 rounded border-[#8A9B7E] text-[#B5694D] focus:ring-[#D4A55E]"/>
              <span>200 g pancetta</span>
            </li>
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-md p-4">
          <h3 className="font-semibold text-lg mb-3 pb-2 border-b border-[#F3E9DC]">Torrvaror</h3>
          <ul className="space-y-2">
            <li className="flex items-center">
              <input type="checkbox" className="mr-2 h-4 w-4 rounded border-[#8A9B7E] text-[#B5694D] focus:ring-[#D4A55E]"/>
              <span>1 förp spaghetti</span>
            </li>
            <li className="flex items-center">
              <input type="checkbox" className="mr-2 h-4 w-4 rounded border-[#8A9B7E] text-[#B5694D] focus:ring-[#D4A55E]"/>
              <span>1 burk soltorkade tomater</span>
            </li>
          </ul>

          <div className="mt-4">
            <div className="flex">
              <input type="text" placeholder="Lägg till vara..." className="flex-grow p-2 border border-[#8A9B7E] rounded-l-lg focus:outline-none focus:ring-1 focus:ring-[#D4A55E]"/>
              <button className="px-3 bg-[#8A9B7E] text-white rounded-r-lg">+</button>
            </div>
      </div>
      </div>
    </div>
  </div>
         
  );
};

export default ShoppingList;
