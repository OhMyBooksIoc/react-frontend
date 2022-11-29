import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faClose } from "@fortawesome/free-solid-svg-icons";

import OMBModal from "../../components/modal";
import FormError from "../../components/form-error";

import "./styles.scss";

const token = localStorage.getItem("token") || "";

function DeleteAccountContent({ closeModal }) {
  const [error, setError] = useState(null);

  const disableAccount = async () => {
    const requestOptions = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      const response = await fetch(
        "http://localhost:8080/user/changeStatus",
        requestOptions
      );

      if (response.status !== 201) {
        setError("No s'ha pogut desactivar l'usuari. Intenta-ho més tard.");
        return;
      }

      localStorage.clear();
      window.location.href = "/";
      return;
    } catch (err) {
      setError("No s'ha pogut connectar amb l'API. Intenta-ho més tard.");
    }
  };

  return (
    <div className="delete-account">
      <div className="delete-account__header">
        <FontAwesomeIcon
          icon={faClose}
          className="delete-account__header__close"
          onClick={() => closeModal()}
        />
      </div>
      <div className="delete-account__content">
        {error ? <FormError message={error} /> : null}
        <div className="delete-account__content__title">
          Vols eliminar el teu comtpe?
        </div>
        <div className="delete-account__content__text">
          Si elimines el teu compte, perdras tots els teus llibres i tot el
          contingut publicat.
        </div>
      </div>
      <div className="delete-account__footer">
        <button
          className="delete-account__footer__button delete-account__footer__button--cancel"
          onClick={() => closeModal()}
        >
          Cancelar
        </button>
        <button
          className="delete-account__footer__button delete-account__footer__button--delete"
          onClick={() => disableAccount()}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
}

function DeleteAccountModal({ onRequestClose, ...props }) {
  return (
    <OMBModal
      className="omb-modal delete-account"
      {...{ onRequestClose, ...props }}
    >
      <DeleteAccountContent closeModal={onRequestClose} />
    </OMBModal>
  );
}

export default DeleteAccountModal;
