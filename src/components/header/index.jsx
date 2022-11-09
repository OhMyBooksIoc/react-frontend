import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

import useWindowDimensions from "../../hooks/useWindowSize";

import "./styles.scss";

const isAuthenticated = !!(localStorage.getItem("isAuthenticated") || false);

function MenuItems() {
  const logout = () => {
    if (isAuthenticated) {
      localStorage.clear();
      if (window.location.href.indexOf("mi-cuenta") > -1) {
        window.location.href = "/";
        return;
      }
      window.reload();
    }
  };

  return (
    <div className="header__container__items">
      <a href="/" className="header__container__items__item">
        Home
      </a>
      <a href="/ohmybooks" className="header__container__items__item">
        Qué es OhMyBooks?
      </a>
      {!isAuthenticated ? (
        <a href="/registro" className="header__container__items__item">
          Registro
        </a>
      ) : null}

      <a
        href="/login"
        className="header__container__items__button"
        onClick={logout}
      >
        {!isAuthenticated ? "Inicia sessió" : "Tancar sessión"}
      </a>
    </div>
  );
}

function Header() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const { width, height } = useWindowDimensions();

  useEffect(() => {
    if (width >= 768) {
      setMenuIsOpen(false);
      setIsDesktop(true);
      return;
    }
    setIsDesktop(false);
  }, [width]);

  return (
    <header className="header">
      <div className="header__container">
        <a className="header__container__logo" href="/">
          <img src="./images/logo.png" />
        </a>
        {isDesktop ? (
          <MenuItems />
        ) : (
          <FontAwesomeIcon
            icon={!menuIsOpen ? faBars : faTimes}
            onClick={() => setMenuIsOpen(!menuIsOpen)}
          />
        )}
      </div>
      {menuIsOpen && !isDesktop ? (
        <div
          className={`header__mobile ${
            menuIsOpen ? "header__mobile--open" : ""
          }`}
        >
          <MenuItems />
        </div>
      ) : null}
    </header>
  );
}

export default Header;
