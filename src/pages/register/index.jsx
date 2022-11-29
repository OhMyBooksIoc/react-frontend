import { useState } from "react";

import { useForm } from "react-hook-form";

import FormError from "../../components/form-error";

import "./styles.scss";

function RegisterPage() {
  const [error, setError] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
  });

  const onSubmit = async ({ email, name, userName, password }) => {
    setError(null);
    const body = {
      email,
      name,
      userName,
      password,
    };

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    };

    try {
      const response = await fetch(
        "http://localhost:8080/auth/newUser",
        requestOptions
      );
  
      if (response.status !== 201) {
        setError("No s'ha pogut realitzar el registre. Intenta-ho més tard.");
        return;
      }
  
      window.location.href = "/login";
    } catch (err) {
      setError("No s'ha pogut connectar amb l'API. Intenta-ho més tard.");
    }
  };

  return (
    <div className="container">
      <div className="register">
        <div className="register__header">
          <span className="register__header__pretitle">
            Benvingut a OhMyBooks!
          </span>
          <h1 className="register__header__title">Crea el teu compte</h1>
        </div>
        <div className="register__content">
          {error ? <FormError message={error} /> : null}
          <form
            className="register__content__form"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="register__content__form__item">
              <label
                className="register__content__form__item__label"
                htmlFor="name"
              >
                Nom
              </label>

              <input
                className="register__content__form__item__input"
                id="name"
                type="text"
                required
                {...register("name", { required: true })}
              />

              {!!errors["name"] && (
                <span className="register__content__form__item__error">
                  Introdueix un nom vàlid
                </span>
              )}
            </div>
            <div className="register__content__form__item">
              <label
                className="register__content__form__item__label"
                htmlFor="username"
              >
                Usuari
              </label>

              <input
                className="register__content__form__item__input"
                id="username"
                type="text"
                required
                {...register("userName", { required: true })}
              />

              {!!errors["userName"] && (
                <span className="register__content__form__item__error">
                  Introdueix un nom d'usuari vàlid
                </span>
              )}
            </div>
            <div className="register__content__form__item">
              <label
                className="register__content__form__item__label"
                htmlFor="email"
              >
                Correu electrònic
              </label>

              <input
                className="register__content__form__item__input"
                id="email"
                type="email"
                required
                {...register("email", { required: true })}
              />

              {!!errors["email"] && (
                <span className="register__content__form__item__error">
                  Introdueix un correu electrònic vàlid
                </span>
              )}
            </div>
            {/* <div className="register__content__form__item">
            <label
              className="register__content__form__item__label"
              htmlFor="confirmEmail"
            >
              Confirmar correu electrònic
            </label>

            <input
              className="register__content__form__item__input"
              id="confirmEmail"
              type="email"
              required
              {...register("confirmEmail", { required: true })}
            />
          </div> */}
            <div className="register__content__form__item">
              <label
                className="register__content__form__item__label"
                htmlFor="password"
              >
                Contrasenya
              </label>

              <input
                className="register__content__form__item__input"
                id="password"
                type="password"
                required
                {...register("password", { required: true })}
              />

              {!!errors["password"] && (
                <span className="register__content__form__item__error">
                  Introdueix una contrasenya vàlida
                </span>
              )}
            </div>
            {/* <div className="register__content__form__item">
            <label
              className="register__content__form__item__label"
              htmlFor="confirmPassword"
            >
              Confirmar contrasenya
            </label>

            <input
              className="register__content__form__item__input"
              id="confirmPassword"
              type="password"
              required
              {...register("confirmPassword", { required: true })}
            />
          </div> */}
            <button className="register__content__form__button">
              Crear un compte
            </button>
          </form>
          <div className="register__content__register">
            <span>Ja tens un compte?</span>
            <a
              className="register__content__register__link"
              href="/login"
              tabIndex="6"
            >
              Iniciar sessió
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
