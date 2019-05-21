import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => (
  <div className="app-banner">
    <div className="container">
      <h1>
        <Link to="/">
          Xenoblade Chronicles 2 <br /> Blade Checklist
        </Link>
      </h1>
      <nav>
        <ul>
          <li>
            <Link to="about">About</Link>
          </li>
          <li>
            <a
              href="https://github.com/arturoalviar/xb2-checklist"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
);

export default Header;
