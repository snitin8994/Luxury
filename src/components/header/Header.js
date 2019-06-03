import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header(props) {

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">
          <Link className="header__logo-item" to="/">
            Luxury
          </Link>
        </div>
        <div>
          <Link className="header__item" to="/company">
            Our Company
          </Link>
        </div>
        <div>
          <Link className="header__item" to="/login">
            Log in
          </Link>
        </div>
        <Link className="header__button" to="/register">
          Sign up
        </Link>
      </div>
    </header>
  );
}

export default Header;
