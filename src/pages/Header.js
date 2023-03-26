import { BrowserRouter as Router, NavLink } from "react-router-dom";
import React from "react";
import "./Header.css";

const Header = ({ fontColor, backgroundColor }) => {
  return (
    <div className="hero" style={{ backgroundColor: backgroundColor }}>
      
      <nav>
        <p className="logo" style={{ color: fontColor }}>
        Pets At <span className="logo-text">Home</span>
        </p>

        <ul>
          <NavLink className="nav-link" exact to="/">
            <span className="link-text" style={{ color: fontColor }}>
              Home
            </span>
          </NavLink>
         
          <NavLink className="nav-link" to="./cats">
            <span className="link-text" style={{ color: fontColor }}>
              Cats
            </span>
          </NavLink>
          <NavLink className="nav-link" to="./dogs">
            <span className="link-text" style={{ color: fontColor }}>
              Dogs
            </span>
          </NavLink>
          <NavLink className="nav-link" to="./birds">
            <span className="link-text" style={{ color: fontColor }}>
              Birds
            </span>
          </NavLink>
          <NavLink className="nav-link" to="./otherpets">
            <span className="link-text" style={{ color: fontColor }}>
              Other Pets
            </span>
          </NavLink>
          <NavLink className="nav-link" to="./owners">
            <span className="link-text" style={{ color: fontColor }}>
              Owners
            </span>
          </NavLink>
        </ul>
        <button className="subscribe" type="button">
          Subscribe
        </button>
      </nav>
      <div className="hero-image"></div>
    </div>
  );
};

export default Header;
