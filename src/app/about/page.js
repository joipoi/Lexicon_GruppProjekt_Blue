'use client';

import React from 'react';
import Navbar from '../../componenets/Navbar';

const About = () => {
  return (
    <>
      <Navbar />
      <div id="about" className="w-full px-[12%] pt-10 pb-10 scroll-mt-20 bg-white min-h-screen flex items-center justify-center">
        <div className="w-11/12 max-w-4xl mx-auto flex flex-col items-center justify-center gap-6 text-umber font-Lexend text-center">
          <h3 className="text-2xl md:text-3xl font-semibold text-terracotta">Om Oss</h3>

          <p>
            Välkommen till vår användarvänliga webbplats för måltidsplanering och recepthantering. Vi erbjuder dig en sömlös upplevelse där du kan:
          </p>

          <ul className="list-disc list-inside space-y-2">
            <li>Söka recept</li>
            <li>Planera veckomenyer</li>
            <li>Generera inköpslistor automatiskt</li>
            <li>Lägga till egna recept</li>
            <li>Beräkna näringsinnehåll per portion</li>
          </ul>

          <p>
            På <strong>Fi jo ka måltidsplanering</strong> vill vi göra vardagen enklare och mer inspirerande genom smarta verktyg för planering, matlagning och hälsosamma val.
          </p>

          <h4 className="text-xl font-semibold text-terracotta mt-4">Vad Erbjuder Vi?</h4>

          <ol className="list-decimal list-inside space-y-2">
            <li>
              <strong>Receptbank med Smart Sökning</strong> <br />
              Filtrera efter kategori, ingredienser eller näringsvärde.
            </li>
            <li>
              <strong>Veckomeny Planerare</strong> <br />
              Dra och släpp recept, spara kombinationer.
            </li>
            <li>
              <strong>Automatisk Inköpslista</strong> <br />
              Få sorterade listor efter butikens avdelningar.
            </li>
            <li>
              <strong>Personliga Recept & Näringslogg</strong> <br />
              Lägg till egna recept, se kalorier & makron.
            </li>
          </ol>

          <h4 className="text-xl font-semibold text-terracotta mt-4">Vår Filosofi</h4>

          <ul className="list-disc list-inside space-y-2">
            <li>🧠 Enkla lösningar – Matlagning ska vara roligt</li>
            <li>🌱 Hållbarhet – Mindre svinn, bättre planering</li>
            <li>🔍 Transparens – Du vet exakt vad du äter</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default About;
