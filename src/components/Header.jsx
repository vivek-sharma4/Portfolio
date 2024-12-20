import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <header className="header">
    <h1>Vivek Kumar</h1>
    <p>Software Developer | Designer | Problem Solver | </p>
    <nav>
      <ul>
        <li><Link to="/">About</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;
