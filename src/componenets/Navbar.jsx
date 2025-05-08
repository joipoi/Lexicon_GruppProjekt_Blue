
import Image from "next/image"
import React, { useEffect, useRef, useState } from "react"
import { assets } from "../assets/assets"

const Navbar = () => {

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
      <div className="fixed top-0 right-0 w-full opacity-15 bg -z-10 translate-y-[-15%]">
        <Image src={assets.header_bg_color} alt="" className="w-full" />
      </div>

      <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${isScroll ? "bg-white shadow-sm" : ""}`}>
        <a href="#top">
          <Image src={assets.fijoka_logo_terracota} alt='' className='w-38 alt="" cursor-pointer mr-14'/>
        </a>
        {/* -- -------- Desktop Menu -------- -- */}
        <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-lg px-12 py-3 ${isScroll ? "" : "bg-white shadow-sm bg-opacity-30 "} `}>
          <li><a className="font-Lexend" href="#top">Home</a></li>
          <li><a className="font-Lexend" href="#about">About</a></li>
          <li><a className="font-Lexend" href="#planning">Planning</a></li> 
          <li><a className="font-Lexend" href="#recipes">Recipes</a></li>
          <li><a className="font-Lexend" href="#contact">Contact Us</a></li>
        </ul>

        <div className="flex items-center gap-4">

          <button>
            <span class="material-symbols-outlined">dark_mode</span>
          </button>

          <a
            href="#contact" className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-lg ml-4 font-Lexend">Contact
            <span className="material-symbols-outlined">north_east </span></a>

          <button className="block md:hidden ml-3" onClick={openMenu}>
            <span class="material-symbols-outlined">menu</span>
          </button>
        </div>

        {/* -- -------- Mobile Menu -------- -- */}

        <ul ref={sideMenuRef} className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500">

          <div className="absolute right-6 top-6" onClick={closeMenu}>
            <span class="material-symbols-outlined">close</span>
         </div>

          <li><a className="font-Lexend" onClick={closeMenu} href="#top">Home</a></li>
          <li><a className="font-Lexend" onClick={closeMenu} href="#about">About</a></li>
          <li><a className="font-Lexend" onClick={closeMenu} href="#recipes">Recipes</a></li>
          <li><a className="font-Lexend" onClick={closeMenu} href="#planning">Planning</a></li>
          <li><a className="font-Lexend" onClick={closeMenu} href="#contact">Contact Ue</a></li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar
