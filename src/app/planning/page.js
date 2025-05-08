'use client';
import Navbar from "../../componenets/Navbar";
import RecipeSearch from "../../componenets/RecipeSearch";
import React from 'react'

const Planning = () => {
  return (
    <div id="planning" className='w-full px-[12%] py-10 scroll-mt-20'>
       <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
          <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Lexend">
            Plannering</h3>
            <p className="max-w-2xl mx-auto font-Ovo">
              Recepthantering
              Under "Recepthantering" kan du:
              Visa recept med detaljerad information som titel, beskrivning, tillagningstid och svårighetsgrad.
              Få åtkomst till ingredienslistor med mängder och steg-för-steg tillagningsinstruktioner.
              Utforska näringsinformation inklusive kalorier, protein, kolhydrater och fett per portion.
              Lägga till nya recept i vår databas med hjälp av ett formulär som inkluderar titel, beskrivning, kategori, ingredienser med mängder, tillagningsinstruktioner och näringsvärden (antingen manuellt eller automatiskt beräknat).
              Filtrera recept baserat på kriterier som protein typ (t.ex. kyckling, nötkött, vegetariskt), receptnamn, specifika ingredienser eller kategori (frukost, lunch, middag, dessert).
              Veckomeny Planering
              Inom "Veckomeny Planering" kan du:
              Skapa veckomenyer genom att dra och släppa eller manuellt lägga till recept för varje dag i veckan (måndag–söndag).
              Spara flera veckomenyer för bekvämlighet.
              Generera inköpslistor automatiskt genom att sammanställa alla ingredienser från valda recept.
              Gruppera liknande varor tillsammans (t.ex. alla grönsaker under "Grönsaker").
              Redigera listan manuellt genom att lägga till eller ta bort varor.
              Näringsberäkning
              För näringsberäkningar:
              Beräkna det totala näringsinnehållet för din veckomeny genom att summera kalorier, protein, kolhydrater och fett per dag eller vecka.
            </p> 
        </div>        
    </div>
  )
}

export default Planning
