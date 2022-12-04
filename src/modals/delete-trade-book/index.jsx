import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faClose } from "@fortawesome/free-solid-svg-icons";

import OMBModal from "../../components/modal";
import FormError from "../../components/form-error";
import Loader from "../../components/loader";

import "./styles.scss";

const token = localStorage.getItem("token") || "";

function DeleteTradeBookContent({ closeModal, bookId }) {
  const [error, setError] = useState(null);
  const [modalIsLoading, setModalIsLoading] = useState(false);

  const deleteBookFromTradeBooks = async (bookId) => {
    setModalIsLoading(true);
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
        `http://localhost:8080/userBook/trade/${bookId}`,
        requestOptions
      );

      if (response.status !== 201) {
        setError(
          "No s'ha pogut eliminar d'intercanviables el llibre. Intenta-ho més tard."
        );
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
    <div className="delete-trade-book">
      <div className="delete-trade-book__header">
        <FontAwesomeIcon
          icon={faClose}
          className="delete-trade-book__header__close"
          onClick={() => closeModal()}
        />
      </div>
      <div className="delete-trade-book__content">
        <div className="delete-trade-book__content__title">
          Vols eliminar aquest llibre d'intercanviables?
        </div>
        <div className="delete-trade-book__content__text">
          Si elimines aquest llibre d'intercanviables, ja no serà visible pels
          altres usuaris. Aquesta acció no eliminarà el llibre ni el seu
          progrés.
        </div>
      </div>
      {error ? <FormError message={error} /> : null}
      {modalIsLoading ? <Loader /> : null}
      {!modalIsLoading && !error ? (
        <div className="delete-trade-book__footer">
          <button
            className="delete-trade-book__footer__button delete-trade-book__footer__button--cancel"
            onClick={() => closeModal()}
          >
            Cancelar
          </button>
          <button
            className="delete-trade-book__footer__button delete-trade-book__footer__button--delete"
            onClick={() => deleteBookFromTradeBooks(bookId)}
          >
            Treure de la llista
          </button>
        </div>
      ) : null}
    </div>
  );
}

function DeleteTradeBookModal({ onRequestClose, bookId, ...props }) {
  return (
    <OMBModal
      className="omb-modal delete-trade-book"
      {...{ onRequestClose, ...props }}
    >
      <DeleteTradeBookContent closeModal={onRequestClose} bookId={bookId} />
    </OMBModal>
  );
}

export default DeleteTradeBookModal;
