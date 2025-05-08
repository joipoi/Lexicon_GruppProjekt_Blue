import React from 'react'

const Header = () => {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
        <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Lexend">
            En bra måltidsplan är hälften av matglädjen!</h3>
            <p className="max-w-2xl mx-auto font-Ovo">
            Hungrig efter enklare vardagsmat? 	
	          Slösar du tid på att planera middagar eller handla utan riktig lista? 
	          Hos oss får du inspiration, struktur och mer tid till det roliga i livet!
            Med vår tjänst kan du:
            ✔ Planera veckans måltider – slipp den sista-minuten-paniken.
            ✔ Generera smarta inköpslistor – inget mer glömska i affären.
            ✔ Upptäck nya recept – perfekt för både vardag och fest.
            ✔ Följ dina näringsbehov – ät smartare utan krångel.
            Spara tid, äta godare och minska svinnet – en måltid i taget.

            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
                <a href="#planning"
                className="px-10 py-3 border border-white rounded-lg bg-black text-white flex items-center gap-2"
                >Kom igång nu – skapa din första veckomeny! <span className="material-symbols-outlined">north_east </span>
                </a>          
            </div>
        
    </div>
  )
}

export default Header
