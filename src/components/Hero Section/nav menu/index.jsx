import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; 
import "./style.scss";
import logo from "../../../assets/Logo.svg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };
 
  return (
    <nav className="navbar">
      <div className="nav__logo">
        <img src={logo} alt="Logo" />
      </div>

      <div
        className="hamburger"
        onClick={toggleMenu}
        aria-label="Toggle menu"
        role="button"
        tabIndex={0}
      >
        {isMenuOpen ? <FaTimes /> : <FaBars />}{" "}
        {/* Toggle between hamburger and close icon */}
      </div>

      <div className={`nav__items ${isMenuOpen ? "active" : ""}`}>
        <ul>
          <li>Marketplace</li>
          <li>Rankings</li>
          <li>Connect a wallet</li>
          <li>
            <button className="nav__button">Sign Up</button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
