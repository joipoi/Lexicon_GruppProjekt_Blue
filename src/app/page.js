'use client';

import Navbar from "../componenets/Navbar";
import About from "./about/page";
import Contact from "./contact/page";
import Planning from "./planning/page";
import Recipes from "./recipes/page";

export default function Home() {
    return (
      <>
      <About />
      <Contact />
      <Recipes />
      <Planning />
      </>
    );
  }