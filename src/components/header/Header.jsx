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
      <a
        href="https://platzi-master-23c57.wl.r.appspot.com/api-docs/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <p>Backend</p>
      </a>
    </div>
    <div className="menu--userName">
      <p>Username</p>
    </div>
  </nav>
);

export default Header;
