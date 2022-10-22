import "./styles.scss";

function RegisterPage() {
  return (
    <div className="register">
      <div className="register__header">
        <h1 className="register__header__title">Crea tu cuenta</h1>
        <span className="register__header__subtitle">Bienvenido a OhMyBooks!</span>
      </div>
      <div className="register__content">
        <form className="register__content__form">
          <div className="register__content__form__item">
            <label
              className="register__content__form__item__label"
              htmlFor="name"
            >
              Nombre
            </label>

            <input
              className="register__content__form__item__input"
              id="name"
              type="text"
              placeholder="Nombre"
              required
            />
          </div>
          <div className="register__content__form__item">
            <label
              className="register__content__form__item__label"
              htmlFor="lastname"
            >
              Apellido
            </label>

            <input
              className="register__content__form__item__input"
              placeholder="Apellido"
              id="lastname"
              type="text"
              required
            />
          </div>
          <div className="register__content__form__item">
            <label
              className="register__content__form__item__label"
              htmlFor="email"
            >
              Correo electrónico
            </label>

            <input
              className="register__content__form__item__input"
              placeholder="Correo electrónico"
              id="email"
              type="email"
              required
            />
          </div>
          <div className="register__content__form__item">
            <label
              className="register__content__form__item__label"
              htmlFor="confirm-email"
            >
              Confirmar correo electrónico
            </label>

            <input
              className="register__content__form__item__input"
              placeholder=" Confirmar correo electrónico"
              id="confirm-email"
              type="email"
              required
            />
          </div>
          <div className="register__content__form__item">
            <label
              className="register__content__form__item__label"
              htmlFor="password"
            >
              Contraseña
            </label>

            <input
              className="register__content__form__item__input"
              placeholder="Contraseña"
              id="password"
              type="password"
              required
            />
            
          </div>
          <div className="register__content__form__item">
            <label
              className="register__content__form__item__label"
              htmlFor="confirm-password"
            >
              Confirmar contraseña
            </label>

            <input
              className="register__content__form__item__input"
              placeholder="Confirmar contraseña"
              id="confirm-password"
              type="password"
              required
            />
          </div>
          <button
            className="register__content__form__button"
            type="submit"
            tabindex="4"
          >
            <span>Crear una cuenta</span>
          </button>
        </form>
        <div className="register__content__register">
          <span>¿Ya tienes una cuenta?</span>
          <a
            className="register__content__register__link"
            href="/login"
            tabindex="6"
          >
            Iniciar sesión
          </a>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
