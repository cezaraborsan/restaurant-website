import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/Pages/HomePage.js";
import MenuPage from "./components/Pages/MenuPage.js";
import AboutPage from "./components/Pages/AboutPage.js";
import ContactPage from "./components/Pages/ContactPage.js";
import CopyRights from "./components/Layout/CopyRights.js";

function App() {
  return (
    <Router>
      <div className="container">
        <div className="content">
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </div>
        <CopyRights />
      </div>
    </Router>
  );
}

export default App;
