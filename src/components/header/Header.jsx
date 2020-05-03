import React from "react";
import { Link } from "react-router-dom";
import "../../assets/styles/components/header/Header.scss";

const Header = () => (
  <nav className="menu">
    <label htmlFor="toggle">&#9776;</label>
    <input id="toggle" type="checkbox" />
    <div className="menu--items">
      <Link to="/">
        <p>Home</p>
      </Link>
      <Link to="/login">
        <p>Login</p>
      </Link>
      <Link to="/dashboard">
        <p>Dashboard</p>
      </Link>
      <Link to="/profile">
        <p>Profile</p>
      </Link>
      <a></a>
    </div>
    <div className="menu--userName">
      <p>Username</p>
    </div>
  </nav>
);

export default Header;
