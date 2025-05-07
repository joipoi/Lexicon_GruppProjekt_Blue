'use client';

import Header from "../componenets/Header";
import Navbar from "../componenets/Navbar";
import About from "../pages/About";
import Planning from "../pages/Planning";
import Recipes from "../pages/Recipes";

export default function Home() {
    return (
      <>
      <Navbar />
      <Header />
      <Home_Page />
      <About />
      <Recipes />
      <Planning />
      </>
    );
  }