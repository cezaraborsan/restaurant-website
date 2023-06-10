import { React, useState } from "react";

function MainButton(props) {
  const { label, bgColor, color, hoverBgColor, hoverColor } = props;
  const [isHovered, setIsHovered] = useState(false);

  const buttonStyle = {
    backgroundColor: bgColor,
    color: color,
  };

  const buttonHoverStyle = {
    backgroundColor: hoverBgColor,
    color: hoverColor,
  };
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="main-button-container">
      <button
        className="main-button"
        style={isHovered ? buttonHoverStyle : buttonStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {label}
      </button>
    </div>
  );
}

export default MainButton;
