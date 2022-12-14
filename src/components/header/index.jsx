import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

import { DEFAULT_PROFILE_PIC } from "../../constants";

import useWindowDimensions from "../../hooks/useWindowSize";

import "./styles.scss";

const isAuthenticated = !!(localStorage.getItem("isAuthenticated") || false);
const username = localStorage.getItem("username") || "";
const token = localStorage.getItem("token") || "";

function ProfilePic({ isDesktop }) {
  const [userIsHover, setUserIsHover] = useState(false);
  const [userMenuIsHover, setUserMenuIsHover] = useState(false);
  const [userInfo, setUserInfo] = useState(null);

  const getProfileData = async () => {
    const requestOptions = {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    };

    try {
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}/user/userName/${username}/`,
        requestOptions
      );

      if (response.status !== 200) {
        return;
      }

      const { email, name, picture, userName } = await response.json();

      setUserInfo({ email, name, picture, username: userName });
    } catch (err) {
      console.error("No s'ha pogut connectar amb l'API. Intenta-ho més tard.");
    }
  };

  useEffect(() => {
    getProfileData();
  }, []);

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
      {userInfo ? (
        <>
          <a
            href={isDesktop ? "/my-account" : null}
            onMouseEnter={() => setUserIsHover(true)}
            onMouseLeave={() => setTimeout(() => setUserIsHover(false), 200)}
          >
            <div
              className="header__container__items__profile-pic"
              style={{
                backgroundImage: `url("${
                  userInfo && userInfo.picture
                    ? userInfo.picture
                    : DEFAULT_PROFILE_PIC
                }")`,
              }}
            />
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
                Hola, {userInfo.name}
              </div>
              <div className="header__container__items__profile-options__links">
              <a
                  href="/trade-books"
                  className="header__container__items__profile-options__links__link"
                >
                  Intercanvi
                </a>
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
        <>
          <a href="/trade-books" className="header__container__items__item">
            Intercanvi
          </a>
          <a href="/my-account" className="header__container__items__item">
            Compte
          </a>
          {isDesktop ? <ProfilePic {...{ isDesktop }} /> : null}
        </>
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
