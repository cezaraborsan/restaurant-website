import React from "react";
import menuData from "../Data/menuData";
import "../../menuPage.css";

function DessertsTab() {
  const activeTab = "desserts";
  const data = menuData[activeTab];

  return (
    <>
      <div className="food-menu">
        <h2 className="menu-subtitle">{activeTab}</h2>
        {data.map((category, index) => (
          <div key={index}>
            <h4 className="food-category">{category.category}</h4>
            <ul className="food-list">
              {category.items.map((item, itemIndex) => (
                <li className="food-item" key={itemIndex}>
                  <h5 className="food-item-title">
                    {item.name}
                    <span className="food-item-description">
                      {item.description}
                    </span>
                  </h5>
                  <p className="food-item-price">{item.price}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
}

export default DessertsTab;
