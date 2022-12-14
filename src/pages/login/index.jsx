import { useState } from "react";

import { useForm } from "react-hook-form";

import FormError from "../../components/form-error";

import "./styles.scss";

const isAuthenticated = localStorage.getItem("isAuthenticated") || false;

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
    setError(null);
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
        `${process.env.REACT_APP_BASE_URL}/auth/login`,
        requestOptions
      );
  
      if (response.status !== 200) {
        setError("Usuari o contrasenya incorrecte.");
        return;
      }
  
      const { token, userName } = await response.json();
  
      localStorage.setItem("token", token);
      localStorage.setItem("username",userName);
      localStorage.setItem("isAuthenticated", true);
      window.location.href = "/my-account";
    } catch(err) {
      setError("No s'ha pogut connectar amb l'API. Intenta-ho més tard.");
    }
  };

  if (isAuthenticated) {
    window.location.href = "/my-account";
    return;
  }

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
