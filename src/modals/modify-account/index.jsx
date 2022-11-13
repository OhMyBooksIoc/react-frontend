import { useState } from "react";

import { useForm } from "react-hook-form";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faClose } from "@fortawesome/free-solid-svg-icons";

import OMBModal from "../../components/modal";
import FormError from "../../components/form-error";

import "./styles.scss";

function ModifyAccountContent({ closeModal }) {
  const [error, setError] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
  });

  const onSubmit = () => console.log("submit");

  return (
    <div className="modify-account">
      <div className="modify-account__header">
        <FontAwesomeIcon
          icon={faClose}
          className="modify-account__header__close"
          onClick={() => closeModal()}
        />
      </div>
      <div className="modify-account__content">
        <div className="modify-account__content__title">
          Modifica les teves dades
        </div>
        <div className="modify-account__content__text">
          Vols ampliar o modificar les dades del teu perfil? Simplement omple
          aquest formulari.
        </div>

        {error ? <FormError message={error} /> : null}
        <form
          className="modify-account__content__form"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="modify-account__content__form__item">
            <label
              className="modify-account__content__form__item__label"
              htmlFor="name"
            >
              Nom
            </label>

            <input
              className="modify-account__content__form__item__input"
              id="name"
              type="text"
              required
              {...register("name", { required: true })}
            />

            {!!errors["name"] && (
              <span className="modify-account__content__form__item__error">
                Introdueix un nom vàlid
              </span>
            )}
          </div>
          <div className="modify-account__content__form__item">
            <label
              className="modify-account__content__form__item__label"
              htmlFor="lastname"
            >
              Cognom
            </label>

            <input
              className="modify-account__content__form__item__input"
              id="lastname"
              type="text"
              required
              {...register("lastname", { required: true })}
            />

            {!!errors["lastname"] && (
              <span className="modify-account__content__form__item__error">
                Introdueix un cognom vàlid
              </span>
            )}
          </div>
          <div className="modify-account__content__form__item">
            <label
              className="modify-account__content__form__item__label"
              htmlFor="email"
            >
              Correu electrònic
            </label>

            <input
              className="modify-account__content__form__item__input"
              id="email"
              type="email"
              required
              {...register("email", { required: true })}
            />

            {!!errors["email"] && (
              <span className="modify-account__content__form__item__error">
                Introdueix un correu electrònic vàlid
              </span>
            )}
          </div>
          <div className="modify-account__content__form__item">
            <label
              className="modify-account__content__form__item__label"
              htmlFor="pic"
            >
              URL: Imatge de perfil
            </label>

            <input
              className="modify-account__content__form__item__input"
              id="pic"
              type="text"
              required
              {...register("pic", { required: true })}
            />

            {!!errors["pic"] && (
              <span className="modify-account__content__form__item__error">
                Introdueix una url vàlida
              </span>
            )}
          </div>
          <button className="modify-account__content__form__button">
            Desar
          </button>
        </form>
      </div>
    </div>
  );
}

function ModifyAccountModal({ onRequestClose, ...props }) {
  return (
    <OMBModal
      className="omb-modal modify-account"
      {...{ onRequestClose, ...props }}
    >
      <ModifyAccountContent closeModal={onRequestClose} />
    </OMBModal>
  );
}

export default ModifyAccountModal;
