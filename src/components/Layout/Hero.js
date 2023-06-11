import React from "react";
import Navbar from "./Navbar";
import MainButton from "../MainButton";

export default function Hero() {
  return (
    <>
      <Navbar />
      <section className="hero-section">
        <h1 className="hero-title">Taste the tradition of Japan</h1>
        <p className="hero-paragraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem nobis deleniti nam possimus reprehenderit a nostrum
          fuga, illo molestiae accusamus?
        </p>

        <MainButton
          label="Order Now"
          bgColor="#e56e0c"
          color="#f3ede1"
          hoverBgColor="#f3ede1"
          hoverColor="#e56e0c"
          path="/contact"
        />

        <img className="hero-image" src="../hero-ramen-img.png" alt="ramen" />
      </section>
    </>
  );
}
