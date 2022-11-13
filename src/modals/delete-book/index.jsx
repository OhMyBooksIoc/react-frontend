import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faClose } from "@fortawesome/free-solid-svg-icons";

import OMBModal from "../../components/modal";

import "./styles.scss";

function DeleteBookContent({ closeModal }) {
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
      <div className="delete-book__footer">
        <button className="delete-book__footer__button delete-book__footer__button--cancel">
          Cancelar
        </button>
        <button className="delete-book__footer__button delete-book__footer__button--delete">
          Eliminar
        </button>
      </div>
    </div>
  );
}

function DeleteBookModal({ onRequestClose, ...props }) {
  return (
    <OMBModal
      className="omb-modal delete-book"
      {...{ onRequestClose, ...props }}
    >
      <DeleteBookContent closeModal={onRequestClose} />
    </OMBModal>
  );
}

export default DeleteBookModal;
