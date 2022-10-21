import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

import useWindowDimensions from "../../hooks/useWindowSize";

import "./styles.scss";

function MenuItems() {
  return (
    <div className="header__container__items">
      <a href="/" className="header__container__items__item">
        Home
      </a>
      <a href="/ohmybooks" className="header__container__items__item">
        Qué es OhMyBooks?
      </a>
      <a href="/registro" className="header__container__items__item">
        Registro
      </a>
      <a className="header__container__items__button">INICIA SESIÓN</a>
    </div>
  );
}

function Header() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const { width, height } = useWindowDimensions();

  useEffect(() => {
    if (width > 768) {
      setMenuIsOpen(false);
      setIsDesktop(true);
      return;
    }
    setIsDesktop(false);
  }, [width]);

  console.log(width, height);

  return (
    <header className="header">
      <div className="header__container">
        <span>OhMyBooks</span>
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
        <div className="header__mobile">
          <MenuItems />
        </div>
      ) : null}
    </header>
  );
}

export default Header;
