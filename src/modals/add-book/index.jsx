import { useState } from "react";

import { useForm } from "react-hook-form";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faClose } from "@fortawesome/free-solid-svg-icons";

import OMBModal from "../../components/modal";
import FormError from "../../components/form-error";

import "./styles.scss";

const token = localStorage.getItem("token") || "";

function AddBookContent({ closeModal }) {

  const [error, setError] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
  });

  const onSubmit = async (newBook) => {
    setError(null);
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(newBook),
    };

    try {
      const response = await fetch(
        "http://localhost:8080/book/add",
        requestOptions
      );

      if (response.status !== 201) {
        setError(
          response.status === 400
            ? "Ja hi ha un llibre amb aquest nom i autor."
            : "No s'ha pogut afegir el llibre. Intenta-ho més tard."
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
              {...register("name", { required: true })}
            />

            {!!errors["name"] && (
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
              id="genre"
              type="text"
              required
              {...register("genre", { required: true })}
            />

            {!!errors["genre"] && (
              <span className="add-book__content__form__item__error">
                Introdueix un gènere vàlid
              </span>
            )}
          </div>
          <div className="add-book__content__form__item">
            <label
              className="add-book__content__form__item__label"
              htmlFor="gender"
            >
              Saga
            </label>

            <input
              className="add-book__content__form__item__input"
              id="saga"
              type="text"
              required
              {...register("saga")}
            />
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
              {...register("pages", { required: true })}
            />

            {!!errors["pages"] && (
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
              {...register("cover", { required: true })}
            />

            {!!errors["cover"] && (
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
