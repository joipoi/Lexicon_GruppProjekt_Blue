'use client';

import Navbar from "../../componenets/Navbar";

export default function Contact() {
  return (
    <>
      <Navbar />
      <div id="contact" className='w-full px-[12%] pt-32 pb-10 scroll-mt-20 bg-white min-h-screen'>
        <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
          <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Lexend">
            Kontakt!
          </h3>
          <p className="max-w-2xl mx-auto font-Lexend">
            Hjälp Oss Växa!<br />
            Fi jo ka måltidsplanering utvecklas ständigt. Har du förbättringsförslag eller ett recept du vill dela?<br />
            📩 Kontakta oss på <a href="mailto:hello@fijoka.se" className="text-terracotta underline">hello@fijoka.se</a>
          </p>
        </div>
      </div>
    </>
  );
}
