import { useForm } from "react-hook-form";

import "./styles.scss";

function LoginPage() {
  const { register, handleSubmit } = useForm({
    mode: "onTouched",
  });

  const onSubmit = async ({ email, password }) => {
    const body = {
      email,
      password,
    };

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    };

    const response = await fetch(
      "http://localhost:8080/user/login",
      requestOptions
    );
    const { status, user } = await response.json();

    if (status === "200 OK") {
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("isAuthenticated", true);
      window.location.href = "/my-account";
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
          <form
            className="login__content__form"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="login__content__form__item">
              <label
                className="login__content__form__item__label"
                htmlFor="email"
              >
                Correu electrònic
              </label>

              <input
                className="login__content__form__item__input"
                id="email"
                type="email"
                required
                {...register("email", { required: true })}
              />
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
            </div>
            <button className="login__content__form__button">
              Iniciar Sessió
            </button>
            <a
              className="login__content__form__recovery-pwd"
              href="/es/es/password-reset/"
              tabindex="3"
            >
              Has oblidat la teva contrasenya?
            </a>
          </form>
          <div className="login__content__register">
            <span>Encara no tens compte?</span>
            <a
              className="login__content__register__link"
              href="/register"
              tabindex="6"
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
