import { useState } from "react";

import { useForm } from "react-hook-form";

import FormError from "../../components/form-error";

import "./styles.scss";

function LoginPage() {
  const [error, setError] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
  });

  const onSubmit = async ({ userName, password }) => {
    const body = {
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
        "http://localhost:8080/auth/login",
        requestOptions
      );
  
      if (response.status !== 200) {
        setError("Usuari o contrasenya incorrecte.");
        return;
      }
  
      const { token } = await response.json();
  
      localStorage.setItem("token", JSON.stringify(token));
      localStorage.setItem("isAuthenticated", true);
      window.location.href = "/my-account";
    } catch(err) {
      setError("No s'ha pogut connectar amb l'API. Intenta-ho més tard.");
    }
  };

  return (
    <div className="container">
      <div className="login">
        <div className="login__header">
          <span className="login__header__pretitle">Benvingut de nou!</span>
          <h1 className="login__header__title">Iniciar Sessió</h1>
        </div>
        <div className="login__content">
          {error ? <FormError message={error} /> : null}
          <form
            className="login__content__form"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="login__content__form__item">
              <label
                className="login__content__form__item__label"
                htmlFor="user"
              >
                Usuari
              </label>

              <input
                className="login__content__form__item__input"
                id="user"
                type="text"
                required
                {...register("userName", { required: true })}
              />
              {!!errors["userName"] && (
                <span className="login__content__form__item__error">
                  Introdueix un usuari vàlid
                </span>
              )}
            </div>
            <div className="login__content__form__item">
              <label
                className="login__content__form__item__label"
                htmlFor="password"
              >
                Contrasenya
              </label>

              <input
                className="login__content__form__item__input"
                id="password"
                type="password"
                required
                {...register("password", { required: true })}
              />
              {!!errors["password"] && (
                <span className="login__content__form__item__error">
                  Introdueix una contrasenya vàlida
                </span>
              )}
            </div>
            <button className="login__content__form__button">
              Iniciar Sessió
            </button>
            <a
              className="login__content__form__recovery-pwd"
              href="/es/es/password-reset/"
              tabIndex="3"
            >
              Has oblidat la teva contrasenya?
            </a>
          </form>
          <div className="login__content__register">
            <span>Encara no tens compte?</span>
            <a
              className="login__content__register__link"
              href="/register"
              tabIndex="6"
            >
              Registra't
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
