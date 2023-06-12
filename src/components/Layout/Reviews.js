import React, { useRef, useState } from "react";
import ReviewCard from "../ReviewCard";

function Reviews() {
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
      <section className="reviews-section">
        <h2>Customer Experience</h2>
        <div
          className="cards-container"
          ref={containerRef}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          <ReviewCard
            review="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis congue ac ipsum vel porta. Nunc ac erat rutrum, bibendum nunc."
            name="- Miyoko Yasu"
          />
          <ReviewCard
            review="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate nulla diam, et fermentum augue tempus quis. Etiam aliquet velit ut maximus sodales. Nam nisl."
            name="- Darcie Brittain"
          />
          <ReviewCard
            review="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a sapien nec est dictum lobortis. Nunc tristique, sapien in mattis maximus, dui."
            name="- Aureole Denzil"
          />
          <ReviewCard
            review="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis congue ac ipsum vel porta. Nunc ac erat rutrum, bibendum nunc. Etiam efficitur congue mauris"
            name="- Cadence Royceston"
          />
          <ReviewCard
            review="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum erat est, vitae sodales felis pellentesque at. Nulla ut scelerisque neque, a condimentum ipsum. Etiam efficitur congue mauris."
            name="- Miyoko Yasu"
          />
          <ReviewCard
            review="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis congue ac ipsum vel porta. Nunc ac erat rutrum, bibendum nunc.Nulla condimentum erat est."
            name="- Chiyoko Ishida"
          />
        </div>
      </section>
    </>
  );
}

export default Reviews;
