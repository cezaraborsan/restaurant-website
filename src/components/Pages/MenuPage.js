import React, { useState } from "react";
import Navbar from "../Layout/Navbar.js";
import Footer from "../Layout/Footer";
import FoodTab from "../Tabs/FoodTab.js";
import DessertsTab from "../Tabs/DessertsTab.js";
import BeveragesTab from "../Tabs/BeveragesTab.js";

import "../../menuPage.css";

function MenuPage() {
  const [activeTab, setActiveTab] = useState("food");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <Navbar />
      <div className="menu-page">
        <div className="menu-page-content">
          <h1 className="menu-page-title">Our Menu</h1>
          <section className="tabs">
            <button
              className={`tab ${activeTab === "food" ? "active" : ""}`}
              onClick={() => handleTabClick("food")}
            >
              Food
            </button>

            <button
              className={`tab ${activeTab === "desserts" ? "active" : ""}`}
              onClick={() => handleTabClick("desserts")}
            >
              Desserts
            </button>
            <button
              className={`tab ${activeTab === "beverages" ? "active" : ""}`}
              onClick={() => handleTabClick("beverages")}
            >
              Beverages
            </button>
          </section>
          {activeTab === "food" && <FoodTab />}
          {activeTab === "desserts" && <DessertsTab />}
          {activeTab === "beverages" && <BeveragesTab />}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default MenuPage;
