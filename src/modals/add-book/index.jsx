import { useState, useEffect } from "react";

import { useForm } from "react-hook-form";

import Select from "react-select";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faClose } from "@fortawesome/free-solid-svg-icons";

import OMBModal from "../../components/modal";
import FormError from "../../components/form-error";
import Loader from "../../components/loader";

import "./styles.scss";

const token = localStorage.getItem("token") || "";

function AddBookContent({ closeModal }) {
  const [error, setError] = useState(null);
  const [books, setBoooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [pageIsLoading, setPageIsLoading] = useState(true);
  const [manualAddBook, setManualAddBook] = useState(false);

  const getBooks = async () => {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      const response = await fetch(
        "http://localhost:8080/book/list",
        requestOptions
      );

      if (response.status !== 200) {
        setError("No s'ha pogut obtenir els llibres. Intenta-ho més tard.");
        setPageIsLoading(false);
        return;
      }
      const books = await response.json();
      setBoooks(books.map((book) => ({ value: book.id, label: book.name })));
      setPageIsLoading(false);
    } catch (err) {
      setError("No s'ha pogut connectar amb l'API. Intenta-ho més tard.");
      setPageIsLoading(false);
    }
  };

  useEffect(() => {
    getBooks();
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
  });

  const onSubmit = (newBook) => {
    if (Object.keys(newBook).length) {
      AddNewBook(newBook);
    } else {
      AssignBookToUser(selectedBook);
    }
  };

  const AddNewBook = async (newBook) => {
    setError(null);
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(newBook),
    };

    try {
      const response = await fetch(
        "http://localhost:8080/book/add",
        requestOptions
      );

      if (response.status !== 201) {
        setError(
          response.status === 400
            ? "Ja hi ha un llibre amb aquest nom i autor."
            : "No s'ha pogut afegir el llibre. Intenta-ho més tard."
        );
        return;
      }

      const { id } = await response.json();
      AssignBookToUser(id);
      return;
    } catch (err) {
      setError("No s'ha pogut connectar amb l'API. Intenta-ho més tard.");
    }
  };

  const AssignBookToUser = (bookId) => {
    if (!bookId) return;
    console.log(bookId);
    // window.location.reload();
  };

  return (
    <div className="add-book">
      <div className="add-book__header">
        <FontAwesomeIcon
          icon={faClose}
          className="add-book__header__close"
          onClick={() => closeModal()}
        />
      </div>
      <div className="add-book__content">
        <div className="add-book__content__title">Afegir nou llibre</div>

        <div className="add-book__content__text">
          Afegeix un llibre i comença a gestionar la teva llibreria física de
          forma digital.
        </div>

        {error ? <FormError message={error} /> : null}
        {pageIsLoading ? <Loader /> : null}
        {!pageIsLoading && !error ? (
          <form
            className="add-book__content__form"
            onSubmit={handleSubmit(onSubmit)}
          >
            {manualAddBook ? (
              <>
                <div className="add-book__content__form__item">
                  <label
                    className="add-book__content__form__item__label"
                    htmlFor="title"
                  >
                    Títol
                  </label>

                  <input
                    className="add-book__content__form__item__input"
                    id="title"
                    type="text"
                    required
                    {...register("name", { required: true })}
                  />

                  {!!errors["name"] && (
                    <span className="add-book__content__form__item__error">
                      Introdueix un títol vàlid
                    </span>
                  )}
                </div>
                <div className="add-book__content__form__item">
                  <label
                    className="add-book__content__form__item__label"
                    htmlFor="author"
                  >
                    Autor
                  </label>

                  <input
                    className="add-book__content__form__item__input"
                    id="author"
                    type="text"
                    required
                    {...register("author", { required: true })}
                  />

                  {!!errors["author"] && (
                    <span className="add-book__content__form__item__error">
                      Introdueix un autor vàlid
                    </span>
                  )}
                </div>
                <div className="add-book__content__form__item">
                  <label
                    className="add-book__content__form__item__label"
                    htmlFor="gender"
                  >
                    Gènere
                  </label>

                  <input
                    className="add-book__content__form__item__input"
                    id="genre"
                    type="text"
                    required
                    {...register("genre", { required: true })}
                  />

                  {!!errors["genre"] && (
                    <span className="add-book__content__form__item__error">
                      Introdueix un gènere vàlid
                    </span>
                  )}
                </div>
                <div className="add-book__content__form__item">
                  <label
                    className="add-book__content__form__item__label"
                    htmlFor="gender"
                  >
                    Saga
                  </label>

                  <input
                    className="add-book__content__form__item__input"
                    id="saga"
                    type="text"
                    required
                    {...register("saga")}
                  />
                </div>
                <div className="add-book__content__form__item">
                  <label
                    className="add-book__content__form__item__label"
                    htmlFor="year"
                  >
                    Any
                  </label>

                  <input
                    className="add-book__content__form__item__input"
                    id="year"
                    type="number"
                    required
                    {...register("year", { required: true })}
                  />

                  {!!errors["year"] && (
                    <span className="add-book__content__form__item__error">
                      Introdueix una any vàlid
                    </span>
                  )}
                </div>
                <div className="add-book__content__form__item">
                  <label
                    className="add-book__content__form__item__label"
                    htmlFor="total-pages"
                  >
                    Total de pàgines
                  </label>

                  <input
                    className="add-book__content__form__item__input"
                    id="total-pages"
                    type="number"
                    required
                    {...register("pages", { required: true })}
                  />

                  {!!errors["pages"] && (
                    <span className="add-book__content__form__item__error">
                      Introdueix una nombre de pàgines vàlid
                    </span>
                  )}
                </div>
                <div className="add-book__content__form__item">
                  <label
                    className="add-book__content__form__item__label"
                    htmlFor="pic"
                  >
                    URL: Imatge de la portada
                  </label>

                  <input
                    className="add-book__content__form__item__input"
                    id="pic"
                    type="text"
                    required
                    {...register("cover", { required: true })}
                  />

                  {!!errors["cover"] && (
                    <span className="add-book__content__form__item__error">
                      Introdueix una url vàlida
                    </span>
                  )}
                </div>
              </>
            ) : (
              <div className="add-book__content__form__item">
                <label
                  className="add-book__content__form__item__label"
                  htmlFor="title"
                >
                  Selecciona un llibre
                </label>

                <Select
                  options={books}
                  onChange={({ value }) => setSelectedBook(value)}
                  className="select-react"
                  placeholder="Escriu el nom del llibre a buscar"
                />

                <div
                  className="add-book__content__text__manual-add"
                  onClick={() => setManualAddBook(true)}
                >
                  No trobes el teu llibre?{" "}
                  <span className="add-book__content__text__manual-add__link">
                    Afegir de forma manual
                  </span>
                </div>
              </div>
            )}

            {manualAddBook || selectedBook ? (
              <button
                className="add-book__content__form__button"
                disabled={!manualAddBook && !selectedBook}
              >
                Afegeix
              </button>
            ) : null}
          </form>
        ) : null}
      </div>
    </div>
  );
}

function AddBookModal({ onRequestClose, ...props }) {
  return (
    <OMBModal className="omb-modal add-book" {...{ onRequestClose, ...props }}>
      <AddBookContent closeModal={onRequestClose} />
    </OMBModal>
  );
}

export default AddBookModal;
