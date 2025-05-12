'use client';
import FoodPlanner from "../../componenets/FoodPlanner";

import React from 'react';

const Recipes = () => {

  return (
    <div id="recipes" className="w-full px-[12%] py-10 scroll-mt-20">
      <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
        <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Lexend">Recept</h3>
        <p className="max-w-2xl mx-auto font-Lexend">
          4.1 FRUKOST/MELLANMÅL Välkommen till vår frukostsida där du kan hitta inspirerande recept för en härlig start
          på dagen. Här presenterar vi noggrant utvalda recept från gedigna kockar över hela världen, med ett urval från
          Atlas Food för en internationell smakupplevelse. Målgruppen för våra frukostrecept är matentusiaster som vill
          organisera sina recept, hälsomedvetna individer som vill räkna näringsvärden och familjer som behöver planera
          för en smakfull och näringsrik frukost varje dag.
          <br />
          <br />
          4.2 LUNCH/MIDDAG Ta en smakresa under lunchtimmen med våra härliga lunch recept. Vi har handplockat recept
          från respekterade kockar och Atlas Food för att ge dig en varierad och smakrik matupplevelse under lunchen.
          Vårt fokus ligger på att tillgodose matentusiaster som vill organisera sina recept, hälsomedvetna personer som
          vill ha kontroll över sina näringsvärden och familjer som behöver enkla och näringsrika lunchalternativ för
          veckan. Njut av lunchen med våra noggrant utvalda recept!
        </p>
      </div>
      <FoodPlanner />

    </div>
  );
};

export default Recipes;