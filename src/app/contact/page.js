'use client';

import Navbar from "../../componenets/Navbar";

export default function Contact() {
  return (
    <>
      <Navbar />
      <div id="contact" className="w-full px-[12%] pt-10 pb-10 scroll-mt-20 bg-white min-h-screen">
      <div className="w-11/12 max-w-4xl mx-auto flex flex-col items-start justify-center gap-6 text-umber font-Lexend">
          <h3 className="text-2xl md:text-3xl font-semibold text-terracotta">Kontakt</h3>

         <p className="mt-4">
            <strong>📩 Hjälp Oss Växa:</strong> Har du förslag eller ett recept att dela med oss? Kontakta oss på{' '}
            <a href="mailto:hello@fijoka.se" className="text-terracotta underline">hello@fijoka.se</a>
          </p>
        </div>
      </div>
    </>
  );
}
