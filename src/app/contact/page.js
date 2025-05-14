'use client';

import Navbar from "../../componenets/Navbar";
import Image from "next/image";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Navbar />
      <div 
        id="contact" 
        className="w-full px-4 sm:px-[12%] pt-10 pb-20 scroll-mt-20 min-h-screen flex items-center justify-center"
        style={{
          background: 'linear-gradient(to bottom right, #C45C3D, #B5694D)'
        }}
      >
        <div className="w-full max-w-4xl mx-auto flex flex-col items-center justify-center gap-8 text-white">
          {/* Logo */}
          <div className="w-24 h-24 relative mb-4">
            <Image 
              src="/icon/logo_icon_vit.png" 
              alt="Fijoka Logo"
              fill
              className="object-contain"
              priority
            />
          </div>

          <h3 className="text-3xl md:text-4xl font-bold font-Lexend">
            Kontakta Oss
          </h3>

          <p className="text-lg md:text-xl max-w-2xl text-center opacity-90">
            Har du frågor, förslag eller ett recept att dela? Vi vill höra från dig!
          </p>

          {/* Contact Form */}
          <form 
            onSubmit={handleSubmit}
            className="w-full max-w-lg bg-white/10 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-white/20 mt-6"
          >
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-100/90 text-green-800 rounded-lg">
                Tack för ditt meddelande! Vi återkommer så snart vi kan.
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-100/90 text-red-800 rounded-lg">
                Något gick fel. Försök igen senare.
              </div>
            )}

            <div className="mb-6">
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 border-b border-white/30 focus:border-white/80 focus:outline-none transition-all duration-300 peer"
                  placeholder=" "
                  required
                />
                <label 
                  htmlFor="name" 
                  className="absolute left-0 -top-3.5 text-white/80 text-sm transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:text-white/60 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-white/80 peer-focus:text-sm"
                >
                  Namn
                </label>
              </div>
            </div>

            <div className="mb-6">
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 border-b border-white/30 focus:border-white/80 focus:outline-none transition-all duration-300 peer"
                  placeholder=" "
                  required
                />
                <label 
                  htmlFor="email" 
                  className="absolute left-0 -top-3.5 text-white/80 text-sm transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:text-white/60 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-white/80 peer-focus:text-sm"
                >
                  E-post
                </label>
              </div>
            </div>

            <div className="mb-8">
              <div className="relative">
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-3 bg-white/5 border-b border-white/30 focus:border-white/80 focus:outline-none transition-all duration-300 peer resize-none"
                  placeholder=" "
                  required
                ></textarea>
                <label 
                  htmlFor="message" 
                  className="absolute left-0 -top-3.5 text-white/80 text-sm transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:text-white/60 peer-placeholder-shown:top-4 peer-focus:-top-3.5 peer-focus:text-white/80 peer-focus:text-sm"
                >
                  Meddelande
                </label>
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 px-6 bg-white text-terracotta font-semibold rounded-lg hover:bg-white/90 transition-all duration-300 flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-terracotta" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Skickar...
                </>
              ) : (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Skicka meddelande
                </>
              )}
            </button>
          </form>

          <div className="mt-8 text-center text-white/80">
            <p className="text-lg">
              Eller maila oss direkt på{' '}
              <a href="mailto:hello@fijoka.se" className="text-white font-semibold underline hover:text-white/90 transition-colors">
                hello@fijoka.se
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}