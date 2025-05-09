'use client';

import Navbar from "../../componenets/Navbar";
import RecipeSearch from "../../componenets/RecipeSearch";
import React from 'react';

const Planning = () => {
  return (
    <>
      <Navbar />
      <div id="planning" className='w-full px-[12%] pt-32 pb-10 scroll-mt-20 bg-white min-h-screen'>
        <div className="w-11/12 max-w-3xl text-left mx-auto flex flex-col items-start justify-center gap-6">
          <h3 className="text-2xl md:text-3xl font-Lexend text-umber mb-4">Planering</h3>

          <div className="font-Lexend text-umber space-y-4">
            <div>
              <h4 className="font-semibold text-lg text-terracotta">Recepthantering</h4>
              <ul className="list-disc list-inside">
                <li>Visa recept med titel, beskrivning, tillagningstid och svårighetsgrad.</li>
                <li>Åtkomst till ingredienslistor med mängder och instruktioner.</li>
                <li>Visa näringsinfo: kalorier, protein, kolhydrater, fett per portion.</li>
                <li>Lägg till nya recept med formulär.</li>
                <li>Filtrera recept efter protein, namn, ingredienser, eller kategori.</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg text-terracotta">Veckomeny Planering</h4>
              <ul className="list-disc list-inside">
                <li>Skapa veckomenyer (dra & släpp eller manuellt).</li>
                <li>Spara flera veckomenyer.</li>
                <li>Generera inköpslistor automatiskt.</li>
                <li>Gruppera varor (ex: grönsaker).</li>
                <li>Redigera listor manuellt.</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg text-terracotta">Näringsberäkning</h4>
              <ul className="list-disc list-inside">
                <li>Summera näringsinnehåll (kalorier, protein, kolhydrater, fett) per dag/vecka.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Planning;
