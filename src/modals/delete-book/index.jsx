import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faClose } from "@fortawesome/free-solid-svg-icons";

import OMBModal from "../../components/modal";
import FormError from "../../components/form-error";
import Loader from "../../components/loader";

import "./styles.scss";

const token = localStorage.getItem("token") || "";

function DeleteBookContent({ closeModal, bookId }) {
  const [error, setError] = useState(null);
  const [modalIsLoading, setModalIsLoading] = useState(false);

  const deleteBookFromCollection = async (bookId) => {
    setModalIsLoading(true);
    setError(null);
    const requestOptions = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}/userBook/deleteBook/${bookId}`,
        requestOptions
      );

      if (response.status !== 204) {
        setError("No s'ha pogut eliminar llibre. Intenta-ho més tard.");
        setModalIsLoading(false);
        return;
      }

      window.location.reload();
      return;
    } catch (err) {
      setError("No s'ha pogut connectar amb l'API. Intenta-ho més tard.");
      setModalIsLoading(false);
    }
  };

  return (
    <div className="delete-book">
      <div className="delete-book__header">
        <FontAwesomeIcon
          icon={faClose}
          className="delete-book__header__close"
          onClick={() => closeModal()}
        />
      </div>
      <div className="delete-book__content">
        <div className="delete-book__content__title">
          Vols eliminar aquest llibre?
        </div>
        <div className="delete-book__content__text">
          Si elimines aquest llibre, perdràs tota la seva informació i el seu
          progrés.
        </div>
      </div>
      {error ? <FormError message={error} /> : null}
      {modalIsLoading ? <Loader /> : null}
      {!modalIsLoading && !error ? (
        <div className="delete-book__footer">
          <button
            className="delete-book__footer__button delete-book__footer__button--cancel"
            onClick={() => closeModal()}
          >
            Cancelar
          </button>
          <button
            className="delete-book__footer__button delete-book__footer__button--delete"
            onClick={() => deleteBookFromCollection(bookId)}
          >
            Eliminar
          </button>
        </div>
      ) : null}
    </div>
  );
}

function DeleteBookModal({ onRequestClose, bookId, ...props }) {
  return (
    <OMBModal
      className="omb-modal delete-book"
      {...{ onRequestClose, ...props }}
    >
      <DeleteBookContent closeModal={onRequestClose} bookId={bookId} />
    </OMBModal>
  );
}

export default DeleteBookModal;
