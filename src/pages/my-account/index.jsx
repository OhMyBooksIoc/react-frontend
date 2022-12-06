import { useState, useEffect } from "react";

import { DEFAULT_PROFILE_PIC } from "../../constants";

import ReactivateAccountModal from "../../modals/reactivate-account";
import DisableAccountModal from "../../modals/disable-account";
import AddBookModal from "../../modals/add-book";
import ModifyAccountModal from "../../modals/modify-account";
import ModifyPasswordModal from "../../modals/modify-password";

import Loader from "../../components/loader";
import BookCard from "../../components/book";
import Stats from "../../components/stats";

import "./styles.scss";

const username = localStorage.getItem("username") || "";
const token = localStorage.getItem("token") || "";
const isAuthenticated = localStorage.getItem("isAuthenticated") || false;

function MyAccountPage() {
  const [disableUserIsOpen, setDisableUserIsOpen] = useState(false);
  const [addBookIsOpen, setAddBookIsOpen] = useState(false);
  const [modifyDataIsOpen, setModifyDataIsOpen] = useState(false);
  const [modifPasswordIsOpen, setModifyPasswordIsOpen] = useState(false);
  const [pageIsLoading, setPageIsLoading] = useState(true);
  const [userInfo, setUserInfo] = useState(null);
  const [publicBooks, setPublicBooks] = useState([]);
  const [privateBooks, setPrivateBooks] = useState([]);
  const [cardStats, setCardStats] = useState([]);

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
        setPageIsLoading(false);
        return;
      }

      const { email, name, picture, userName, status } = await response.json();

      setUserInfo({ email, name, picture, username: userName, status });
      setPageIsLoading(false);
    } catch (err) {
      console.error("No s'ha pogut connectar amb l'API. Intenta-ho més tard.");
    }
  };

  const getUserBooks = async () => {
    const requestOptions = {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    };

    try {
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}/userBook/user/`,
        requestOptions
      );

      if (response.status !== 200) {
        setPageIsLoading(false);
        return;
      }

      const allBooks = await response.json();
      setPublicBooks(allBooks.filter((book) => !book.hide));
      setPrivateBooks(allBooks.filter((book) => book.hide));
      setPageIsLoading(false);
    } catch (err) {
      console.error("No s'ha pogut connectar amb l'API. Intenta-ho més tard.");
    }
  };

  const getMyAccountData = async () => {
    await getProfileData();
    await getUserBooks();
    await getPrivateStats();
  };

  const getPrivateStats = async () => {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}/stats/private`,
        requestOptions
      );

      if (response.status !== 200) {
        setPageIsLoading(false);
        return;
      }
      const stats = await response.json();
      setCardStats([
        {
          title: "Total llibres",
          value: stats.totalBooksUser,
        },
        {
          title: "Llibres llegits",
          value: stats.totalBooksReadUser,
        },
        {
          title: "Pàgines llegides",
          value: stats.totalPagesReadUser,
        },
        {
          title: "Intercanviables",
          value: stats.totalBooksInTradeUser,
        },
      ]);
      setPageIsLoading(false);
    } catch (err) {
      setPageIsLoading(false);
    }
  };

  useEffect(() => {
    getMyAccountData();
  }, []);

  if (!isAuthenticated) {
    window.location.href = "/login";
    return;
  }

  if (pageIsLoading) {
    return (
      <div className="my-account">
        <Loader />
      </div>
    );
  }

  if (!userInfo.status) {
    return <ReactivateAccountModal isOpen={true}></ReactivateAccountModal>;
  }

  return (
    <div className="my-account">
      <DisableAccountModal
        isOpen={disableUserIsOpen}
        onRequestClose={() => setDisableUserIsOpen(false)}
        closeTimeoutMS={200}
      ></DisableAccountModal>

      <AddBookModal
        isOpen={addBookIsOpen}
        onRequestClose={() => setAddBookIsOpen(false)}
        closeTimeoutMS={200}
      ></AddBookModal>

      <ModifyAccountModal
        userInfo={userInfo}
        isOpen={modifyDataIsOpen}
        onRequestClose={() => setModifyDataIsOpen(false)}
        closeTimeoutMS={200}
      ></ModifyAccountModal>

      <ModifyPasswordModal
        isOpen={modifPasswordIsOpen}
        onRequestClose={() => setModifyPasswordIsOpen(false)}
        closeTimeoutMS={200}
      ></ModifyPasswordModal>

      <div className="my-account__header">
        <div
          className="my-account__header__profile-pic"
          style={{
            backgroundImage: `url("${
              userInfo.picture ? userInfo.picture : DEFAULT_PROFILE_PIC
            }")`,
          }}
        ></div>
      </div>

      <div className="my-account__content">
        <div className="my-account__content__books">
          <div className="my-account__content__books__head">
            <div className="my-account__content__books__head__title">
              Col·lecció
            </div>
            <div
              className="my-account__content__books__head__add-book"
              onClick={() => setAddBookIsOpen(true)}
            >
              Afegir llibre
            </div>
          </div>
          <div className="my-account__content__books__subtitle">
            Llibres públics
          </div>
          <div className="my-account__content__books__list">
            {!publicBooks.length && (
              <span className="my-account__content__books__list__empty">
                Actualment no tens cap llibre públic.
              </span>
            )}
            {publicBooks.map((book) => (
              <BookCard actualBook={book} key={book.book.id} page="my-account" />
            ))}
          </div>
          <div className="my-account__content__books__subtitle">
            Llibres ocults
          </div>
          <div className="my-account__content__books__list">
            {!privateBooks.length && (
              <span className="my-account__content__books__list__empty">
                Actualment no tens cap llibre ocult.
              </span>
            )}
            {privateBooks.map((book) => (
              <BookCard actualBook={book} key={book.book.id} page="my-account" />
            ))}
          </div>
        </div>

        <div className="personal-container">
          <div className="my-account__content__personal-information">
            <div className="my-account__content__personal-information__head">
              <div className="my-account__content__personal-information__head__title">
                Dades personals
              </div>
              <div
                className="my-account__content__personal-information__head__edit"
                onClick={() => setModifyDataIsOpen(true)}
              >
                Modificar
              </div>
            </div>
            <div className="my-account__content__personal-information__data">
              <span className="my-account__content__personal-information__data__title">
                Nom i Cognoms:
              </span>
              <span className="my-account__content__personal-information__data__value">
                {userInfo.name}
              </span>
            </div>
            <div className="my-account__content__personal-information__data">
              <span className="my-account__content__personal-information__data__title">
                Usuari:
              </span>
              <span className="my-account__content__personal-information__data__value">
                {userInfo.username}
              </span>
            </div>
            <div className="my-account__content__personal-information__data">
              <span className="my-account__content__personal-information__data__title">
                Correu:
              </span>
              <span className="my-account__content__personal-information__data__value">
                {userInfo.email}
              </span>
            </div>

            <div className="my-account__content__personal-information__actions">
              <span
                className="my-account__content__personal-information__actions__change-pwd"
                onClick={() => setModifyPasswordIsOpen(true)}
              >
                Canviar clau
              </span>
              <span
                className="my-account__content__personal-information__actions__delete-user"
                onClick={() => setDisableUserIsOpen(true)}
              >
                Desactivar compte
              </span>
            </div>
          </div>

          <div className="my-account__content__personal-stats">
            <div className="my-account__content__personal-stats__head">
              <div className="my-account__content__personal-stats__head__title">
                Estadístiques personals
              </div>
            </div>
            <div className="my-account__content__personal-stats__list">
              {cardStats.map(({ title, value }) => (
                <Stats key={title} {...{ title, value }} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyAccountPage;
