import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faClose } from "@fortawesome/free-solid-svg-icons";

import OMBModal from "../../components/modal";
import FormError from "../../components/form-error";

import "./styles.scss";

const token = localStorage.getItem("token") || "";

function ReactivateAccountContent() {
  const [error, setError] = useState(null);

  const closeModal = () => {
    localStorage.clear();
    window.location.href = "/";
    return;
  };

  const reactivateAccount = async () => {
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
        "http://localhost:8080/user/changeStatus",
        requestOptions
      );

      if (response.status !== 201) {
        setError("No s'ha pogut desactivar l'usuari. Intenta-ho més tard.");
        return;
      }

      window.location.reload();
      return;
    } catch (err) {
      setError("No s'ha pogut connectar amb l'API. Intenta-ho més tard.");
    }
  };

  return (
    <div className="reactivate-account">
      <div className="reactivate-account__header">
        <FontAwesomeIcon
          icon={faClose}
          className="reactivate-account__header__close"
          onClick={() => closeModal()}
        />
      </div>
      <div className="reactivate-account__content">
        {error ? <FormError message={error} /> : null}
        <div className="reactivate-account__content__title">
          Vols reactivar el teu comtpe?
        </div>
        <div className="reactivate-account__content__text">
          Si reactives el teu compte, recuperaràs tots els teus llibres i tot el
          contingut publicat serà visible.
        </div>
      </div>
      <div className="reactivate-account__footer">
        <button
          className="reactivate-account__footer__button reactivate-account__footer__button--cancel"
          onClick={() => closeModal()}
        >
          Cancelar
        </button>
        <button
          className="reactivate-account__footer__button reactivate-account__footer__button--reactivate"
          onClick={() => reactivateAccount()}
        >
          reactivar
        </button>
      </div>
    </div>
  );
}

function ReactivateAccountModal({ ...props }) {
  return (
    <OMBModal className="omb-modal reactivate-account" {...props}>
      <ReactivateAccountContent />
    </OMBModal>
  );
}

export default ReactivateAccountModal;
