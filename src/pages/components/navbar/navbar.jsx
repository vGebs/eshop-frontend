import "./navbar.css"

import { Link } from 'react-router-dom';
import logo from "../../../assets/Elle's-1.png";
import React, { useState, useEffect } from 'react';
import { FiShoppingCart, FiMenu } from 'react-icons/fi';

import { DropDown }  from "./dropDown"
import { RoundedButton } from "./roundedButton";

const Navbar = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleWindowResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src={logo} alt="Your logo"/>
      </div>
      {screenWidth > 600 ? (
        <ul className="navbar-nav">
          <li className="nav-item">
            <RoundedButton title="Home" url="/"/>
          </li>
          <li className="nav-item">
            <RoundedButton title="Products" url="/products"/>
          </li>
          <li className="nav-item">
            <RoundedButton title="Our Mission" url="/ourMission"/>
          </li>
          <li className="nav-item">
            <RoundedButton title="Contact" url="/contact"/>
          </li>
        </ul>
      ) : (
        <div className="dropDown">
            <DropDown/>
        </div>
      )}
      <div className="shopping-cart">
        <FiShoppingCart />
      </div>
    </nav>
  );
};

export default Navbar;
