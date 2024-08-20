import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <h1 className="logo">
        <Link to="/">Open Source</Link>
      </h1>
      <nav>
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/login">Zaloguj się</Link>{" "}
          </li>
          <li className="nav-item">
            <Link to="/register">Zarejestruj się</Link>{" "}
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
