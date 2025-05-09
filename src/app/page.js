'use client';

import Header from "../componenets/Header";
import Navbar from "../componenets/Navbar";
import About from "./about/page";
import Contact from "./contact/page";
import Planning from "./planning/page";
import Recipes from "./recipes/page";

export default function Home() {
    return (
      <>
      <Navbar />
      <Header />
      <About />
      <Recipes />
      <Planning />
      <Contact />
      </>
    );
  }