import React from "react";
import "../../assets/styles/components/header/Header.scss";

const Header = () => (
  <div className="menu">
    <label htmlFor="toggle">&#9776;</label>
    <input id="toggle" type="checkbox" />
    <div className="menu--items">
      <a href="#" rel="noopener noreferrer">
        <p>Home</p>
      </a>
      <a href="#" rel="noopener noreferrer">
        <p>Shot</p>
      </a>
      <a href="#" rel="noopener noreferrer">
        <p>Profile</p>
      </a>
      <a></a>
      <a></a>
    </div>
    <div className="menu--userName">
      <p>Username</p>
    </div>
  </div>
);

export default Header;
