import { useState } from "react";

import { useForm } from "react-hook-form";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

import DEFAULT_PROFILE_PIC from "../../constants";

import OMBModal from "../../components/modal";
import FormError from "../../components/form-error";

import "./styles.scss";



const token = localStorage.getItem("token") || "";

function ModifyAccountContent({ userInfo, closeModal }) {
  const [error, setError] = useState(null);
  const [actualImg, setActualImg] = useState(
    userInfo.picture || DEFAULT_PROFILE_PIC
  );

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onTouched",
  });

  const onSubmit = async ({ name, email }) => {
    setError(null);
    console.log(name, email, actualImg);
    const body = {
      email,
      name,
      picture: actualImg,
    };

    const requestOptions = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(body),
    };

    try {
      const response = await fetch(
        "http://localhost:8080/user/update",
        requestOptions
      );

      if (response.status !== 201) {
        setError("No s'ha pogut desar els canvis. Intenta-ho més tard.");
        return;
      }

      window.location.reload();
    } catch (err) {
      setError("No s'ha pogut connectar amb l'API. Intenta-ho més tard.");
    }
  };

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
              defaultValue={userInfo.name}
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
              htmlFor="email"
            >
              Correu electrònic
            </label>

            <input
              defaultValue={userInfo.email}
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
              htmlFor="picture"
            >
              URL: Imatge de perfil
            </label>

            <img
              className="modify-account__content__form__item__pic"
              src={actualImg}
              onError={(event) => {
                setActualImg(DEFAULT_PROFILE_PIC);
                event.onerror = null;
              }}
            ></img>

            <input
              defaultValue={userInfo.picture || ""}
              className="modify-account__content__form__item__input"
              id="picture"
              type="text"
              {...register("picture", {
                onChange: (e) =>
                  setActualImg(e.target.value || DEFAULT_PROFILE_PIC),
              })}
            />

            {!!errors["picture"] && (
              <span className="modify-account__content__form__item__error">
                Introdueix una url vàlida
              </span>
            )}
          </div>
          <button
            type="submit"
            className="modify-account__content__form__button"
            disabled={!isValid}
          >
            Desar
          </button>
        </form>
      </div>
    </div>
  );
}

function ModifyAccountModal({ userInfo, onRequestClose, ...props }) {
  return (
    <OMBModal
      className="omb-modal modify-account"
      {...{ onRequestClose, ...props }}
    >
      <ModifyAccountContent userInfo={userInfo} closeModal={onRequestClose} />
    </OMBModal>
  );
}

export default ModifyAccountModal;
