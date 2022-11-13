import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

import useWindowDimensions from "../../hooks/useWindowSize";

import "./styles.scss";

const isAuthenticated = !!(localStorage.getItem("isAuthenticated") || false);

function ProfilePic({ isDesktop }) {
  const [userIsHover, setUserIsHover] = useState(false);
  const [userMenuIsHover, setUserMenuIsHover] = useState(false);

  useEffect(() => {
    if (!userIsHover && userMenuIsHover) {
      setUserIsHover(true);
    }
  }, [userMenuIsHover, userIsHover]);

  const logout = () => {
    if (isAuthenticated) {
      localStorage.clear();
      window.location.href = "/";
      return;
    }
  };

  return (
    <>
      <a
        href={isDesktop ? "/my-account" : null}
        onMouseEnter={() => setUserIsHover(true)}
        onMouseLeave={() => setTimeout(() => setUserIsHover(false), 200)}
      >
        <div className="header__container__items__profile-pic" />
      </a>
      {userIsHover ? (
        <div
          id="prova"
          className="header__container__items__profile-options"
          onMouseEnter={() => {
            setUserIsHover(true);
            setUserMenuIsHover(true);
          }}
          onMouseLeave={() => {
            setUserMenuIsHover(false);
            setUserIsHover(false);
          }}
        >
          <div className="header__container__items__profile-options__title">
            Hola Lore
          </div>
          <div className="header__container__items__profile-options__links">
            <a
              href="/my-account"
              className="header__container__items__profile-options__links__link"
            >
              Compte
            </a>
            <button
              className="header__container__items__profile-options__links__link__logout"
              onClick={() => logout()}
            >
              Tancar Sessió
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}

function MenuItems({ isDesktop }) {
  return (
    <div className="header__container__items">
      <a href="/" className="header__container__items__item">
        Inici
      </a>
      <a href="/about-us" className="header__container__items__item">
        Qui som?
      </a>
      {!isAuthenticated ? (
        <>
          <a href="/register" className="header__container__items__item">
            Registre
          </a>
          <a href="/login" className="header__container__items__button">
            Inicia sessió
          </a>
        </>
      ) : (
        <>{isDesktop ? <ProfilePic {...{ isDesktop }} /> : null}</>
      )}
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
        <div className="header-left">
          {!isDesktop ? (
            <FontAwesomeIcon
              icon={!menuIsOpen ? faBars : faTimes}
              onClick={() => setMenuIsOpen(!menuIsOpen)}
            />
          ) : null}
          <a className="header__container__logo" href="/">
            <img src="./images/logo.png" />
          </a>
        </div>

        {isDesktop ? (
          <MenuItems {...{ isDesktop }} />
        ) : (
          <> {isAuthenticated ? <ProfilePic {...{ isDesktop }} /> : null} </>
        )}
      </div>
      {menuIsOpen && !isDesktop ? (
        <div
          className={`header__mobile ${
            menuIsOpen ? "header__mobile--open" : ""
          }`}
        >
          <MenuItems {...{ isDesktop }} />
        </div>
      ) : null}
    </header>
  );
}

export default Header;
