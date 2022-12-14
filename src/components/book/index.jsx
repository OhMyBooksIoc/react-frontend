import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faEyeSlash,
  faEye,
  faCheck,
  faClock,
  faClose,
  faRotate,
} from "@fortawesome/free-solid-svg-icons";

import DeleteBookModal from "../../modals/delete-book";
import DeleteTradeBookModal from "../../modals/delete-trade-book";
import InfoBookModal from "../../modals/info-book";

import { DEFAULT_BOOK_PIC } from "../../constants/index";

import "./styles.scss";

const token = localStorage.getItem("token") || "";

function BookCard({ actualBook, page }) {
  const { book, readd, hide, trade } = actualBook;

  const [error, setError] = useState(null);
  const [deleteBookIsOpen, setDeleteBookIsOpen] = useState(false);
  const [deleteTradeBookIsOpen, setDeleteTradeBookIsOpen] = useState(false);
  const [infoBookIsOpen, setInfoBookIsOpen] = useState(false);

  const [actualImg, setActualImg] = useState(book.cover || DEFAULT_BOOK_PIC);

  const changeBookVisibility = async () => {
    setError(null);
    const requestOptions = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}/userBook/hide/${book.id}`,
        requestOptions
      );

      if (response.status !== 201) {
        setError(
          "No s'ha pogut mostrar / ocultar el llibre. Intenta-ho més tard."
        );
        return;
      }

      window.location.reload();
      return;
    } catch (err) {
      setError("No s'ha pogut connectar amb l'API. Intenta-ho més tard.");
    }
  };

  const changeBookReadState = async () => {
    setError(null);
    const requestOptions = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}/userBook/read/${book.id}`,
        requestOptions
      );

      if (response.status !== 201) {
        setError(
          "No s'ha pogut marcar com a pendent / llegit el llibre. Intenta-ho més tard."
        );
        return;
      }

      window.location.reload();
      return;
    } catch (err) {
      setError("No s'ha pogut connectar amb l'API. Intenta-ho més tard.");
    }
  };

  const changeBookTradeState = async () => {
    setError(null);
    const requestOptions = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}/userBook/trade/${book.id}`,
        requestOptions
      );

      if (response.status !== 201) {
        setError(
          "No s'ha pogut marcar com a intercanviable el llibre. Intenta-ho més tard."
        );
        return;
      }

      window.location.reload();
      return;
    } catch (err) {
      setError("No s'ha pogut connectar amb l'API. Intenta-ho més tard.");
    }
  };

  return (
    <>
      <DeleteBookModal
        isOpen={deleteBookIsOpen}
        onRequestClose={() => setDeleteBookIsOpen(false)}
        closeTimeoutMS={200}
        bookId={book.id}
      ></DeleteBookModal>
      <DeleteTradeBookModal
        isOpen={deleteTradeBookIsOpen}
        onRequestClose={() => setDeleteTradeBookIsOpen(false)}
        closeTimeoutMS={200}
        bookId={book.id}
      ></DeleteTradeBookModal>
      <InfoBookModal
        isOpen={infoBookIsOpen}
        onRequestClose={() => setInfoBookIsOpen(false)}
        closeTimeoutMS={200}
        book={actualBook.book}
      ></InfoBookModal>

      <div className="book">
        <img
          onClick={() => setInfoBookIsOpen(true)}
          className="book__image"
          src={actualImg}
          onError={(event) => {
            setActualImg(DEFAULT_BOOK_PIC);
            event.onerror = null;
          }}
        />
        <div className="book__content">
          {page === "my-account" ? (
            <span
              className={`book__content__status book__content__status--${
                readd ? "read" : "pending"
              }`}
            >
              <FontAwesomeIcon icon={readd ? faCheck : faClock} />{" "}
              {readd ? "Llegit" : "Pendent"}
            </span>
          ) : null}
          <span className="book__content__title">{book.name}</span>
          <span className="book__content__author">{book.author}</span>

          {page === "my-account" ? (
            <div className="book__content__actions">
              {!trade ? (
                <button
                  className="book__content__actions__trade"
                  onClick={() => changeBookTradeState()}
                >
                  <FontAwesomeIcon icon={faRotate} />
                </button>
              ) : null}
              <button
                className={`book__content__actions__${
                  hide ? "visible" : "hide"
                }`}
                onClick={() => changeBookVisibility()}
              >
                {hide ? (
                  <FontAwesomeIcon icon={faEye} />
                ) : (
                  <FontAwesomeIcon icon={faEyeSlash} />
                )}
              </button>
              <button
                className={`book__content__actions__${
                  readd ? "pending" : "read"
                }`}
                onClick={() => changeBookReadState()}
              >
                {readd ? (
                  <FontAwesomeIcon icon={faClock} />
                ) : (
                  <FontAwesomeIcon icon={faCheck} />
                )}
              </button>
            </div>
          ) : null}
        </div>
        <div className="book__delete">
          <FontAwesomeIcon
            icon={page === "my-account" ? faTrash : faClose}
            onClick={() =>
              page === "my-account"
                ? setDeleteBookIsOpen(true)
                : setDeleteTradeBookIsOpen(true)
            }
          />
        </div>
      </div>
    </>
  );
}

export default BookCard;
