'use client';

import Header from "../componenets/Header";
import Navbar from "../componenets/Navbar";
import About from "./about/page";
import Contact from "./contact/page";
import Recipes from "./recipes/page";
import LoginForm from "../componenets/LoginForm";

export default function Home() {
    return (
      <>
      <Navbar />
      <Header />
      <Recipes />
      <About />
      <Contact />
      <LoginForm />
      {/* Add any other components you want to include */}
      </>
    );
  }