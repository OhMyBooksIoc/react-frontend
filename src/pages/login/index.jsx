import { useForm } from "react-hook-form";

import "./styles.scss";

function LoginPage() {

  const {
    register,
    handleSubmit,
  } = useForm({
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

    const response = await fetch('http://localhost:8080/user/login', requestOptions);
    const { status, user } = await response.json();

    if (status === "200 OK") {
      localStorage.setItem('user', JSON.stringify(user));
      localStorage.setItem('isAuthenticated', true);
      window.location.href = "/mi-cuenta";
    }
  };


  return (
    <div className="login">
      <div className="login__header">
        <h1 className="login__header__title">Iniciar sesión</h1>
        <span className="login__header__subtitle">Bienvenido a OhMyBooks!</span>
      </div>
      <div className="login__content">
        <form className="login__content__form" onSubmit={handleSubmit(onSubmit)}>
          <div className="login__content__form__item">
            <label
              className="login__content__form__item__label"
              htmlFor="email"
            >
              Correo electrónico
            </label>

            <input
              className="login__content__form__item__input"
              id="email"
              type="email"
              placeholder="Correo electrónico"
              required
              {...register("email", { required: true })}
            />
          </div>
          <div className="login__content__form__item">
            <label
              className="login__content__form__item__label"
              htmlFor="password"
            >
              Contraseña
            </label>

            <input
              className="login__content__form__item__input"
              placeholder="Contraseña"
              id="password"
              type="password"
              required
              {...register("password", { required: true })}
            />
          </div>
          <a
            className="login__content__form__recovery-pwd"
            href="/es/es/password-reset/"
            tabindex="3"
          >
            ¿Has olvidado tu contraseña?
          </a>
          <button
            className="login__content__form__button"
            type="submit"
            tabindex="4"
          >
            <span>Iniciar sesión</span>
          </button>
        </form>
        <div className="login__content__register">
          <span>¿Aún no tienes cuenta?</span>
          <a
            className="login__content__register__link"
            href="/registro"
            tabindex="6"
          >
            Regístrate
          </a>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
