import React from "react";
import "./Header.css"

function Header() {
    return (
      <header className="header">
        <div className="header__container">
          <div className="header__logo">
            <a class="header__logo-item" href="/">
              Luxury
            </a>
          </div>
          <div className="header__item">Our Company</div>
          <div className="header__item">Log in</div>
          <button className="header__button">Sign up</button>
        </div>
      </header>
    );

}

export default Header;