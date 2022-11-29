import React, { useState } from "react";

import { useForm } from "react-hook-form";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faClose } from "@fortawesome/free-solid-svg-icons";

import OMBModal from "../../components/modal";
import FormError from "../../components/form-error";

import "./styles.scss";

const token = localStorage.getItem("token") || "";

function ModifyPasswordContent({ closeModal }) {
  const [error, setError] = useState(null);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
  });

  const onSubmit = async ({ oldPassword, newPassword }) => {
    setError(null);
    const requestOptions = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ oldPassword, newPassword }),
    };

    try {
      const response = await fetch(
        "http://localhost:8080/user/updatePass",
        requestOptions
      );

      if (response.status !== 201) {
        setError(
          response.status === 400
            ? "La contrasenya antiga no coincideix."
            : "No s'ha pogut modificar la contrasenya. Intenta-ho més tard."
        );
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
    <div className="modify-account">
      <div className="modify-password__header">
        <FontAwesomeIcon
          icon={faClose}
          className="modify-password__header__close"
          onClick={() => closeModal()}
        />
      </div>
      <div className="modify-password__content">
        <div className="modify-password__content__title">
          Modifica la contrasenya
        </div>

        {error ? <FormError message={error} /> : null}
        <form
          className="modify-password__content__form"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="modify-password__content__form__item">
            <label
              className="modify-password__content__form__item__label"
              htmlFor="old-password"
            >
              Contrasenya Antiga
            </label>

            <input
              className="modify-password__content__form__item__input"
              id="old-password"
              type="password"
              required
              {...register("oldPassword", { required: true })}
            />

            {!!errors["oldPassword"] && (
              <span className="modify-password__content__form__item__error">
                Introdueix una contrasenya vàlida
              </span>
            )}
          </div>
          <div className="modify-password__content__form__item">
            <label
              className="modify-password__content__form__item__label"
              htmlFor="new-password"
            >
              Contrasenya Nova
            </label>

            <input
              className="modify-password__content__form__item__input"
              id="new-password"
              type="password"
              required
              {...register("newPassword", { required: true })}
            />

            {!!errors["newPassword"] && (
              <span className="modify-password__content__form__item__error">
                Introdueix una contrasenya vàlida
              </span>
            )}
          </div>
          <div className="modify-password__content__form__item">
            <label
              className="modify-password__content__form__item__label"
              htmlFor="repeat-password"
            >
              Repetir contrasenya
            </label>

            <input
              className="modify-password__content__form__item__input"
              id="repeat-password"
              type="password"
              required
              {...register("confirmPassword", {
                required: true,
                validate: (val) => {
                  if (watch("newPassword") != val) {
                    return "a";
                  }
                },
              })}
            />

            {!!errors["confirmPassword"] && (
              <span className="modify-password__content__form__item__error">
                Les contrasenyes no coincideixen
              </span>
            )}
          </div>
          <button
            type="submit"
            className="modify-password__content__form__button"
          >
            Desar
          </button>
        </form>
      </div>
    </div>
  );
}

function ModifyPasswordModal({ onRequestClose, ...props }) {
  return (
    <OMBModal
      className="omb-modal modify-account"
      {...{ onRequestClose, ...props }}
    >
      <ModifyPasswordContent closeModal={onRequestClose} />
    </OMBModal>
  );
}

export default ModifyPasswordModal;
