import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons
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

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const nav = document.querySelector('.nav__items');
      const hamburger = document.querySelector('.hamburger');
      
      if (isMenuOpen && nav && !nav.contains(event.target) && !hamburger.contains(event.target)) {
        closeMenu();
      }
    };

    if (isMenuOpen) {
      document.body.classList.add("no-scroll");
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.body.classList.remove("no-scroll");
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  // Close menu on escape key
  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === 'Escape' && isMenuOpen) {
        closeMenu();
      }
    };

    document.addEventListener('keydown', handleEscKey);
    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [isMenuOpen]);

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
        {isMenuOpen ? <FaTimes /> : <FaBars />} {/* Toggle between hamburger and close icon */}
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