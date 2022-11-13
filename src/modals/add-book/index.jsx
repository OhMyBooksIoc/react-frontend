import { useState } from "react";

import { useForm } from "react-hook-form";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faClose } from "@fortawesome/free-solid-svg-icons";

import OMBModal from "../../components/modal";
import FormError from "../../components/form-error";

import "./styles.scss";

function AddBookContent({ closeModal }) {

  const [error, setError] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
  });

  const onSubmit = () => console.log('submit');

  return (
    <div className="add-book">
      <div className="add-book__header">
        <FontAwesomeIcon
          icon={faClose}
          className="add-book__header__close"
          onClick={() => closeModal()}
        />
      </div>
      <div className="add-book__content">
        <div className="add-book__content__title">Afegir nou llibre</div>

        <div className="add-book__content__text">Afegeix un llibre i comença a gestionar la teva llibreria física de forma digital.</div>

        {error ? <FormError message={error} /> : null}
        <form
          className="add-book__content__form"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="add-book__content__form__item">
            <label
              className="add-book__content__form__item__label"
              htmlFor="title"
            >
              Títol
            </label>

            <input
              className="add-book__content__form__item__input"
              id="title"
              type="text"
              required
              {...register("title", { required: true })}
            />

            {!!errors["title"] && (
              <span className="add-book__content__form__item__error">
                Introdueix un títol vàlid
              </span>
            )}
          </div>
          <div className="add-book__content__form__item">
            <label
              className="add-book__content__form__item__label"
              htmlFor="author"
            >
              Autor
            </label>

            <input
              className="add-book__content__form__item__input"
              id="author"
              type="text"
              required
              {...register("author", { required: true })}
            />

            {!!errors["author"] && (
              <span className="add-book__content__form__item__error">
                Introdueix un autor vàlid
              </span>
            )}
          </div>
          <div className="add-book__content__form__item">
            <label
              className="add-book__content__form__item__label"
              htmlFor="gender"
            >
              Gènere
            </label>

            <input
              className="add-book__content__form__item__input"
              id="gender"
              type="text"
              required
              {...register("gender", { required: true })}
            />

            {!!errors["gender"] && (
              <span className="add-book__content__form__item__error">
                Introdueix un gènere vàlid
              </span>
            )}
          </div>
          <div className="add-book__content__form__item">
            <label
              className="add-book__content__form__item__label"
              htmlFor="year"
            >
              Any
            </label>

            <input
              className="add-book__content__form__item__input"
              id="year"
              type="number"
              required
              {...register("year", { required: true })}
            />

            {!!errors["year"] && (
              <span className="add-book__content__form__item__error">
                Introdueix una any vàlid
              </span>
            )}
          </div>
          <div className="add-book__content__form__item">
            <label
              className="add-book__content__form__item__label"
              htmlFor="total-pages"
            >
              Total de pàgines
            </label>

            <input
              className="add-book__content__form__item__input"
              id="total-pages"
              type="number"
              required
              {...register("totalPages", { required: true })}
            />

            {!!errors["totalPages"] && (
              <span className="add-book__content__form__item__error">
                Introdueix una nombre de pàgines vàlid
              </span>
            )}
          </div>
          <div className="add-book__content__form__item">
            <label
              className="add-book__content__form__item__label"
              htmlFor="pic"
            >
              URL: Imatge de la portada
            </label>

            <input
              className="add-book__content__form__item__input"
              id="pic"
              type="text"
              required
              {...register("pic", { required: true })}
            />

            {!!errors["pic"] && (
              <span className="add-book__content__form__item__error">
                Introdueix una url vàlida
              </span>
            )}
          </div>
          <button className="add-book__content__form__button">
            Afegeix
          </button>
        </form>
      </div>
    </div>
  );
}

function AddBookModal({ onRequestClose, ...props }) {
  return (
    <OMBModal className="omb-modal add-book" {...{ onRequestClose, ...props }}>
      <AddBookContent closeModal={onRequestClose} />
    </OMBModal>
  );
}

export default AddBookModal;
