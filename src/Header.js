import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">
          <a className="header__logo-item" href="/">
            Luxury
          </a>
        </div>
        <div >
          <a className="header__item" href="/">
            Our Company
          </a>
        </div>
        <div onClick={()=>{
          
        } }>
          <a className="header__item" href="/">
            Log in
          </a>
        </div>
        <button className="header__button">Sign up</button>
      </div>
    </header>
  );
}

export default Header;
