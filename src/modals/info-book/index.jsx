import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faClose } from "@fortawesome/free-solid-svg-icons";

import OMBModal from "../../components/modal";

import { DEFAULT_BOOK_PIC } from "../../constants/index";

import "./styles.scss";


function InfoBookContent({ closeModal, book }) {
  const { author, cover, genre, name, pages, saga, year } = book;

  const [actualImg, setActualImg] = useState(cover || DEFAULT_BOOK_PIC);

  return (
    <div className="info-book">
      <div className="info-book__header">
        <FontAwesomeIcon
          icon={faClose}
          className="info-book__header__close"
          onClick={() => closeModal()}
        />
      </div>
      <div className="info-book__content">
        <div className="info-book__content__title">{name}</div>
        <img
          className="info-book__content__img"
          src={actualImg}
          onError={(event) => {
            setActualImg(DEFAULT_BOOK_PIC);
            event.onerror = null;
          }}
        />
        <div className="info-book__content__info-list">
          <div className="info-book__content__info-list__item">
            Autor:
            <span className="info-book__content__info-list__item__value">
              {author}
            </span>
          </div>
          <div className="info-book__content__info-list__item">
            Gènere:
            <span className="info-book__content__info-list__item__value">
              {genre}
            </span>
          </div>
          <div className="info-book__content__info-list__item">
            Total de pàgines:
            <span className="info-book__content__info-list__item__value">
              {pages}
            </span>
          </div>
          <div className="info-book__content__info-list__item">
            Any publicació:
            <span className="info-book__content__info-list__item__value">
              {year}
            </span>
          </div>
          <div className="info-book__content__info-list__item">
            Saga:
            <span className="info-book__content__info-list__item__value">
              {saga}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function InfoBookModal({ onRequestClose, book, ...props }) {
  return (
    <OMBModal className="omb-modal info-book" {...{ onRequestClose, ...props }}>
      <InfoBookContent closeModal={onRequestClose} book={book} />
    </OMBModal>
  );
}

export default InfoBookModal;
