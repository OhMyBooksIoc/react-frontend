import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faEyeSlash,
  faEye,
  faCheck,
  faClock,
} from "@fortawesome/free-solid-svg-icons";

import DeleteBookModal from "../../modals/delete-book";

import { DEFAULT_BOOK_PIC } from "../../constants/index";

import "./styles.scss";

const token = localStorage.getItem("token") || "";

function BookCard({ actualBook }) {
  const { book, readd, hide } = actualBook;

  const [error, setError] = useState(null);
  const [deleteBookIsOpen, setDeleteBookIsOpen] = useState(false);

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
        `http://localhost:8080/userBook/hide/${book.id}`,
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

  return (
    <>
      <DeleteBookModal
        isOpen={deleteBookIsOpen}
        onRequestClose={() => setDeleteBookIsOpen(false)}
        closeTimeoutMS={200}
      ></DeleteBookModal>

      <div className="book">
        <img
          className="book__image"
          src={actualImg}
          onError={(event) => {
            setActualImg(DEFAULT_BOOK_PIC);
            event.onerror = null;
          }}
        />
        <div className="book__content">
          <span className="book__content__status book__content__status--pending">
            <FontAwesomeIcon icon={readd ? faCheck : faClock} />{" "}
            {readd ? "Llegit" : "Pendent"}
          </span>
          <span className="book__content__title">{book.name}</span>
          <span className="book__content__author">{book.author}</span>

          <div className="book__content__actions">
            <button
              className={`book__content__actions__${hide ? "visible" : "hide"}`}
              onClick={() => changeBookVisibility()}
            >
              {hide ? (
                <FontAwesomeIcon icon={faEye} />
              ) : (
                <FontAwesomeIcon icon={faEyeSlash} />
              )}
            </button>
            <button className="book__content__actions__read">
              {readd ? (
                <FontAwesomeIcon icon={faClock} />
              ) : (
                <FontAwesomeIcon icon={faCheck} />
              )}
            </button>
          </div>
        </div>
        <div className="book__delete">
          <FontAwesomeIcon
            icon={faTrash}
            onClick={() => setDeleteBookIsOpen(true)}
          />
        </div>
      </div>
    </>
  );
}

export default BookCard;
