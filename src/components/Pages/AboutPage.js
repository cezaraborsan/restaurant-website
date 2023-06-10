import React from "react";
import Navbar from "../Layout/Navbar.js";
import Footer from "../Layout/Footer";
import "../../aboutPage.css";
import MainButton from "../MainButton.js";

function AboutPage() {
  return (
    <>
      <Navbar />
      <div className="about-page">
        <div className="about-content">
          <section className="ingredients-section">
            <h1 className="about-page-title">About Us</h1>
            <h2 className="about-subtitle">Our Ingredients</h2>
            <p className="about-paragraph">
              At our Japanese restaurant, we take pride in using only the
              freshest and highest quality ingredients. We carefully select
              locally sourced produce, premium meats, and authentic Japanese
              ingredients to ensure the utmost quality and flavor in every dish
              we serve.
              <br /> We believe that great food starts with great ingredients,
              and that's why we strive to bring the best flavors to your table,
              providing you with an unforgettable dining experience.
            </p>
          </section>
          <section className="family-business-section">
            <h2 className="about-subtitle">A Family Business</h2>

            <p className="about-paragraph">
              Our restaurant is not just a place to enjoy delicious Japanese
              cuisine; it's a family business that has been passed down through
              generations. We are proud to continue the legacy started by our
              ancestors, who brought their love and passion for Japanese food to
              this community.
              <br />
              As a family business, we value the relationships we build with our
              customers and treat them as an extension of our own family. We
              strive to provide a warm and welcoming atmosphere where everyone
              feels at home.
            </p>
          </section>
          <section className="japanese-cuisine-section">
            <h2 className="about-subtitle">Japanese Cuisine</h2>
            <p className="about-paragraph">
              Our restaurant specializes in serving authentic Japanese cuisine,
              showcasing the rich flavors and culinary traditions of Japan. From
              sushi and sashimi to ramen and tempura, each dish is crafted with
              precision and attention to detail. <br /> We believe in preserving
              the essence of Japanese cuisine while infusing it with our own
              unique touches. Our experienced chefs combine traditional cooking
              techniques with modern influences to create a dining experience
              that is both authentic and innovative.
            </p>
            <MainButton
              label="See Our Menu"
              bgColor="#e56e0c"
              color="#f3ede1"
              hoverBgColor="#f3ede1"
              hoverColor="#e56e0c"
              className="about-btn"
            />
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AboutPage;
