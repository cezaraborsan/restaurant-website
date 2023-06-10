import React, { useRef, useState } from "react";
import SpecialityCard from "../SpecialityCard";
import Marquee from "../Marquee";

function Specialities() {
  const containerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(null);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setDragStartX(e.clientX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setDragStartX(null);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;

    const container = containerRef.current;
    const scrollAmount = dragStartX - e.clientX;
    container.scrollLeft += scrollAmount;
    setDragStartX(e.clientX);
  };
  return (
    <>
      <Marquee label="最高の日本食" />
      <section className="specialities-section">
        <h2>Our Specialities</h2>
        <div
          className="cards-container"
          ref={containerRef}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          <SpecialityCard image="./speciality_1.png" title="Sushi" />
          <SpecialityCard image="./speciality_2.png" title="Ramen" />
          <SpecialityCard image="./speciality_3.png" title="Mochi" />
          <SpecialityCard image="./speciality_4.png" title="Onigiri" />
        </div>
      </section>
    </>
  );
}

export default Specialities;
