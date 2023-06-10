import React from "react";
import MainButton from "./MainButton";

function SpecialityCard(props) {
  const { title, image } = props;

  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <h2 className="card-title">{title}</h2>
      <MainButton
        label="Order Now"
        bgColor="#f3ede1"
        color="#e56e0c"
        hoverBgColor="#e56e0c"
        hoverColor="#f3ede1"
      />
    </div>
  );
}

export default SpecialityCard;
