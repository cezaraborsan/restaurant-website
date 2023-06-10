import React from "react";
import Hero from "../Layout/Hero.js";
import Specialities from "../Layout/Specialities";
import Reviews from "../Layout/Reviews";
import Footer from "../Layout/Footer";
import MenuSection from "../Layout/MenuSection.js";

function HomePage() {
  return (
    <>
      <Hero />
      <MenuSection />
      <Specialities />
      <Reviews />
      <Footer />
    </>
  );
}

export default HomePage;
