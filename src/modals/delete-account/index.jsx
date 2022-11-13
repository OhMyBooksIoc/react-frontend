import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faClose } from "@fortawesome/free-solid-svg-icons";

import OMBModal from "../../components/modal";

import "./styles.scss";

function DeleteAccountContent({ closeModal }) {
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
            <div className="delete-account__content__title">
              Vols eliminar el teu comtpe?
            </div>
            <div className="delete-account__content__text">
              Si elimines el teu compte, perdras tots els teus llibres i tot el
              contingut publicat.
            </div>
          </div>
          <div className="delete-account__footer">
            <button className="delete-account__footer__button delete-account__footer__button--cancel">Cancelar</button>
            <button className="delete-account__footer__button delete-account__footer__button--delete">Eliminar</button>
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
