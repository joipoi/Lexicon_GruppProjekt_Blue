'use client';

import Navbar from "../../componenets/Navbar";

export default function Contact() {
    return (
      <div id="contact" className='w-full px-[12%] py-10 scroll-mt-20'>
       <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
          <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Lexend">
            Kontakt!</h3>
            <p className="max-w-2xl mx-auto font-Ovo">
              Hjälp Oss Växa!
              Fi jo ka måltidsplanering,  utvecklas ständigt. Har du förbättringsförslag eller ett recept du vill dela?
              📩 Kontakta oss på hello@fijoka.se

            </p> 
        </div>        
    </div>
    );
  }