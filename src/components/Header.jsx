import React from "react";
import { useState } from "react";
import "./Header.css";

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <header>
      <a href="#" className="logo">
        Anirudh
      </a>
      <nav className={menuActive ? "active" : ""}>
        <a href="#" className="active">
          Home
        </a>
        <a href="#">Services</a>
        <a href="#">Skills</a>
        <a href="#">Education</a>
        <a href="#">Experience</a>
        <a href="#">Contact</a>
      </nav>
      <div className="hamburger" onClick={toggleMenu}>
        ☰
      </div>
    </header>
  );
};

export default Header;
