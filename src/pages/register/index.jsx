import { useForm } from "react-hook-form";

import "./styles.scss";

function RegisterPage() {
  const {
    register,
    handleSubmit,
  } = useForm({
    mode: "onTouched",
  });

  const onSubmit = async ({ email, name, lastName, password }) => {
    const body = {
      email,
      name,
      lastName,
      password,
    };

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    };

    const response = await fetch('http://localhost:8080/user', requestOptions);
    const data = await response.json();

    if (data.status === "200 OK") {
      window.location.href = "/login";
    }
  };

  return (
    <div className="container">
    <div className="register">
      <div className="register__header">
        <span className="register__header__pretitle">Benvingut a OhMyBooks!</span>
        <h1 className="register__header__title">Crea el teu compte</h1>
      </div>
      <div className="register__content">
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
          </div>
          <div className="register__content__form__item">
            <label
              className="register__content__form__item__label"
              htmlFor="lastname"
            >
              Cognom
            </label>

            <input
              className="register__content__form__item__input"
              id="lastname"
              type="text"
              required
              {...register("lastName", { required: true })}
            />
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
            href="/register"
            tabindex="6"
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
