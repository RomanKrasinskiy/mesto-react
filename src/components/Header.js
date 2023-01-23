import React from "react";
import '../pages/index.css';
import logo from '../logo.svg';

function Header() {
    return (
      <header className="page__header header">
        <img
          className="header__logo logo"
          src={logo}
          alt="Логотип 'Mesto Russia'"
        />
      </header>
    );
}

export default Header;