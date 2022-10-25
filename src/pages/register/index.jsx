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
    <div className="register">
      <div className="register__header">
        <h1 className="register__header__title">Crea tu cuenta</h1>
        <span className="register__header__subtitle">
          Bienvenido a OhMyBooks!
        </span>
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
              Nombre
            </label>

            <input
              className="register__content__form__item__input"
              id="name"
              type="text"
              placeholder="Nombre"
              required
              {...register("name", { required: true })}
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
              {...register("lastName", { required: true })}
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
              {...register("email", { required: true })}
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
              {...register("confirm-email", { required: true })}
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
              {...register("password", { required: true })}
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
              {...register("confirm-password", { required: true })}
            />
          </div>
          <button className="register__content__form__button" type="submit">
            <span>Crear una cuenta</span>
          </button>
        </form>
        <div className="register__content__register">
          <span>¿Ya tienes una cuenta?</span>
          <a className="register__content__register__link" href="/login">
            Iniciar sesión
          </a>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
