import React from "react";
import MainButton from "../MainButton";
import IntersectionObserver from "../IntersectionObserver";

function MenuSection() {
  const handleIntersection = (target) => {
    target.classList.add("visible");
  };

  const targetRef = IntersectionObserver(handleIntersection, {
    threshold: 0.3,
  });

  return (
    <section className="menu-section intersectionObserver" ref={targetRef}>
      <div className="menu-content">
        <h2 className="menu-title">Japanese Cuisine</h2>
        <p className="menu-paragraph">
          Experience the art of Japanese cuisine like never before at our
          restaurant. Our creative and authentic menu brings together
          traditional Japanese dishes with innovative twists that are sure to
          satisfy your palate. From elegantly crafted sushi rolls to
          mouthwatering ramen bowls, our culinary team has curated a selection
          of dishes that showcase the best of Japanese flavors.
        </p>
        <MainButton
          label="Our Menu"
          bgColor="#e56e0c"
          color="#f3ede1"
          hoverBgColor="#f3ede1"
          hoverColor="#e56e0c"
          path="/menu"
        />
      </div>
    </section>
  );
}

export default MenuSection;
