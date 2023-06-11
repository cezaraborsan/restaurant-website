import { React, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function MainButton(props) {
  const { label, bgColor, color, hoverBgColor, hoverColor, path } = props;
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

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

  const handleClick = () => {
    navigate.push(path); // Navigate to the specified path
    window.scrollTo(0, 0); // Scroll the page to the top
  };

  return (
    <div className="main-button-container">
      <Link
        onClick={handleClick}
        className="main-button"
        style={isHovered ? buttonHoverStyle : buttonStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        to={path}
      >
        {label}
      </Link>
    </div>
  );
}

export default MainButton;
