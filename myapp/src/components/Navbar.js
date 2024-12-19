import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand"> Faiz kc </div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/" className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link">about us</Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className="nav-link">contact us</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
