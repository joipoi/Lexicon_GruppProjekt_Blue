'use client';
import Image from "next/image"
import React, { useEffect, useRef, useState } from "react"
import { assets } from "../assets/assets"
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../lib/firebase';
import { handleLogout } from './Logout';
import { useRouter } from "next/navigation";
import { TransitionLink } from './TransitionLink';


const Navbar = () => {

  const router = useRouter();

  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
    });

    return () => unsubscribe();
  }, []);

  const [isScroll, setIsScroll] = useState(false)
  const sideMenuRef = useRef();

  const openMenu = ()=>{
    sideMenuRef.current.style.transform = 'translateX(-16rem)'
    }
  const closeMenu = ()=>{
    sideMenuRef.current.style.transform = 'translateX(16rem)'
    }

    useEffect(() => {
        window.addEventListener('scroll', () =>{
            if(scrollY > 50){
                setIsScroll(true)
            }else{
                setIsScroll(false)
            }
        })
    },[])

  return (
    <>
      {/* -- -------- Header Background -------- -- */}
      <div className="fixed top-0 right-0 w-full opacity-15 bg-z-10 translate-y-[-15%] bg-cream">
      </div>
      {/* -- -------- Navbar -------- -- */}
      <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${isScroll ? "bg-parchment shadow-sm" : ""}`}>
        {/* -- -------- Logo -------- -- */}
        <TransitionLink href="/">
          <Image src={assets.LogoTerracote} alt='' className='w-38 alt="" cursor-pointer mr-14'/></TransitionLink>
        
        {/* -- -------- Desktop Menu -------- -- */}
        <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-lg px-12 py-3 ${isScroll ? "" : "bg-parchment shadow-sm bg-opacity-30 "} `}>
          <TransitionLink className="font-Lexend text-umber hover:text-terracotta transition-colors" href="/">Hem</TransitionLink>
          <TransitionLink className="font-Lexend text-umber hover:text-terracotta transition-colors" href="/recipes">Plannering</TransitionLink> 
          <TransitionLink className="font-Lexend text-umber hover:text-terracotta transition-colors" href="/about">Om Oss</TransitionLink>
          <TransitionLink className="font-Lexend text-umber hover:text-terracotta transition-colors" href="/contact">Kontakt</TransitionLink>
          
        </ul>
        {/* -- -------- Right Section -------- -- */}
        <div className="flex items-center gap-4">
        {/* Dark Mode Button */}
          <button>
            <span className="material-symbols-outlined text-umber hover:text-terracotta transition-colors">dark_mode</span>
          </button>
        {/* Login Button */}
          {!user && (
                     
          <TransitionLink href="/login" className="hidden lg:flex items-center gap-3 px-10 py-2.5 border-3 border-terracotta text-umber rounded-lg ml-4 font-Lexend hover:bg-terracotta hover:text-parchment transition-colors">Logga In
            <span className="material-symbols-outlined">Login </span></TransitionLink>
            )}
          {user && (
            <TransitionLink className="font-Lexend text-umber hover:text-terracotta transition-colors" href="/logout" onClick={(e) => { e.preventDefault(); handleLogout(router); }}>Logga Ut</TransitionLink>          
          )}
        {/* Hamburger Menu Button */}
          <button className="block md:hidden ml-3 text-umber hover:text-terracotta transition-colors" onClick={openMenu}>
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>

        {/* -- -------- Mobile Menu -------- -- */}

        <ul ref={sideMenuRef} className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-cream transition duration-500">

          <div className="absolute right-6 top-6 text-umber hover:text-terracotta transition-colors" onClick={closeMenu}>
            <span className="material-symbols-outlined">close</span>
         </div>

          <TransitionLink className="font-Lexend text-umber hover:text-terracotta transition-colors" onClick={closeMenu} href="/top">Hem</TransitionLink>
                    
          <TransitionLink className="font-Lexend text-umber hover:text-terracotta transition-colors" onClick={closeMenu} href="/planning">Plannering</TransitionLink>
          <TransitionLink className="font-Lexend text-umber hover:text-terracotta transition-colors" onClick={closeMenu} href="/about">Om</TransitionLink>
          <TransitionLink className="font-Lexend text-umber hover:text-terracotta transition-colors" onClick={closeMenu} href="/contact">Kontakt</TransitionLink>
          <TransitionLink className="font-Lexend text-umber hover:text-terracotta transition-colors" onClick={closeMenu} href="/login">Logga In</TransitionLink>
          <TransitionLink className="font-Lexend text-umber hover:text-terracotta transition-colors" onClick={closeMenu} href="/logout">Logga Ut</TransitionLink>
        </ul>
      </nav>
    </>
  )
}

export default Navbar
