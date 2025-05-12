import React from 'react'

const Header = () => {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
        <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3 mt-60 font-Lexend text-umber">
            En bra måltidsplan är hälften av matglädjen!</h3>
            <p className="max-w-2xl mx-auto font-Lexend text-umber">
              Hungrig efter enklare vardagsmat? <br />
              Slösar du tid på att planera middagar eller handla utan riktig lista? <br />
              Hos oss får du inspiration, struktur och mer tid till det roliga i livet!
              <br />
                </p>
              Med vår tjänst kan du:
              <ul className="list-none list-inside mt-2">
                <p>✔ Planera veckans måltider - slipp den sista-minuten-paniken.</p>
                <p>✔ Generera smarta inköpslistor - inget mer glömska i affären.</p>
                <p>✔ Upptäck nya recept - perfekt för både vardag och fest.</p>
                <p>✔ Följ dina näringsbehov - ät smartare utan krångel.     </p>
              </ul>
              Spara tid, äta godare och minska svinnet - en måltid i taget.
          
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
                <a href="#planning" className="px-10 py-3 border-3 border-terracotta rounded-lg bg-terracotta text-parchment flex items-center gap-2 hover:bg-cream hover:text-umber transition-colors"
                >Kom igång nu - skapa din första veckomeny! <span className="material-symbols-outlined">table </span>
                </a>          
            </div>
        
    </div>
  )
}

export default Header
