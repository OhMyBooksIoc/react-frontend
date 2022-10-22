import "./styles.scss";

function LoginPage() {
  return (
    <div className="login">
      <div className="login__header">
        <h1 className="login__header__title">Iniciar sesión</h1>
        <span className="login__header__subtitle">Bienvenido a OhMyBooks!</span>
      </div>
      <div className="login__content">
        <form className="login__content__form">
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
