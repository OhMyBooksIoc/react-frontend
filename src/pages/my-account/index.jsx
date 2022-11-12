import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faEyeSlash,
  faEye,
  faCheck,
  faClock,
} from "@fortawesome/free-solid-svg-icons";

import "./styles.scss";

function MyAccountPage() {
  return (
    <div className="my-account">
      <div className="my-account__header">
        <div className="my-account__header__profile-pic"></div>
      </div>

      <div className="my-account__content">
        <div className="my-account__content__personal-information">
          <div className="my-account__content__personal-information__head">
            <div className="my-account__content__personal-information__head__title">
              Dades personals
            </div>
            <div className="my-account__content__personal-information__head__edit">
              Modificar
            </div>
          </div>
          <div className="my-account__content__personal-information__data">
            <span className="my-account__content__personal-information__data__title">
              Nom i Cognoms:
            </span>
            <span className="my-account__content__personal-information__data__value">
              Lorem Ipsum
            </span>
          </div>
          <div className="my-account__content__personal-information__data">
            <span className="my-account__content__personal-information__data__title">
              Usuari:
            </span>
            <span className="my-account__content__personal-information__data__value">
              ohmybooks
            </span>
          </div>
          <div className="my-account__content__personal-information__data">
            <span className="my-account__content__personal-information__data__title">
              Correu:
            </span>
            <span className="my-account__content__personal-information__data__value">
              ohmybooks@gmail.com
            </span>
          </div>
        </div>

        <div className="my-account__content__books">
          <div className="my-account__content__books__head">
            <div className="my-account__content__books__head__title">
              Col·lecció
            </div>
            <div className="my-account__content__books__head__add-book">
              Afegir llibre
            </div>
          </div>
          <div className="my-account__content__books__subtitle">
            Llibres públics
          </div>
          <div className="my-account__content__books__list">
            <div className="my-account__content__books__list__book">
              <img
                className="my-account__content__books__list__book__image"
                src="https://edit.org/images/cat/portadas-libros-big-2019101610.jpg"
              />
              <div className="my-account__content__books__list__book__content">
                <span className="my-account__content__books__list__book__content__status my-account__content__books__list__book__content__status--pending">
                  <FontAwesomeIcon icon={faClock} /> Pendent
                </span>
                <span className="my-account__content__books__list__book__content__title">
                  Mi portada de libro
                </span>
                <span className="my-account__content__books__list__book__content__author">
                  Joseph Haskell
                </span>

                <div className="my-account__content__books__list__book__content__actions">
                  <button className="my-account__content__books__list__book__content__actions__hide">
                    <FontAwesomeIcon icon={faEyeSlash} />
                  </button>
                  <button className="my-account__content__books__list__book__content__actions__read">
                    <FontAwesomeIcon icon={faCheck} />
                  </button>
                </div>
                <div className="my-account__content__books__list__book__content__delete">
                  <FontAwesomeIcon icon={faTrash} />
                </div>
              </div>
            </div>
            <div className="my-account__content__books__list__book">
              <img
                className="my-account__content__books__list__book__image"
                src="https://edit.org/photos/editor/json/2021/10/01/b/f/bfd9f795767e0520cf43d9b65524c13d_edit.org.jpg-376.jpg"
              />
              <div className="my-account__content__books__list__book__content">
                <span className="my-account__content__books__list__book__content__status my-account__content__books__list__book__content__status--read">
                  <FontAwesomeIcon icon={faCheck} /> LLegit
                </span>
                <span className="my-account__content__books__list__book__content__title">
                  Nunca dejes de soñar
                </span>
                <span className="my-account__content__books__list__book__content__author">
                  Anna Serra
                </span>

                <div className="my-account__content__books__list__book__content__actions">
                  <button className="my-account__content__books__list__book__content__actions__hide">
                    <FontAwesomeIcon icon={faEyeSlash} />
                  </button>
                  <button className="my-account__content__books__list__book__content__actions__pending">
                    <FontAwesomeIcon icon={faClock} />
                  </button>
                </div>
                <div className="my-account__content__books__list__book__content__delete">
                  <FontAwesomeIcon icon={faTrash} />
                </div>
              </div>
            </div>
           

            <div className="my-account__content__books__list__book">
              <img
                className="my-account__content__books__list__book__image"
                src="https://edit.org/photos/editor/json/2021/10/01/b/f/bfd9f795767e0520cf43d9b65524c13d_edit.org.jpg-376.jpg"
              />
              <div className="my-account__content__books__list__book__content">
                <span className="my-account__content__books__list__book__content__status my-account__content__books__list__book__content__status--read">
                  <FontAwesomeIcon icon={faCheck} /> LLegit
                </span>
                <span className="my-account__content__books__list__book__content__title">
                  Nunca dejes de soñar
                </span>
                <span className="my-account__content__books__list__book__content__author">
                  Anna Serra
                </span>

                <div className="my-account__content__books__list__book__content__actions">
                  <button className="my-account__content__books__list__book__content__actions__hide">
                    <FontAwesomeIcon icon={faEyeSlash} />
                  </button>
                  <button className="my-account__content__books__list__book__content__actions__pending">
                    <FontAwesomeIcon icon={faClock} />
                  </button>
                </div>
                <div className="my-account__content__books__list__book__content__delete">
                  <FontAwesomeIcon icon={faTrash} />
                </div>
              </div>
            </div>
            <div className="my-account__content__books__list__book">
              <img
                className="my-account__content__books__list__book__image"
                src="https://edit.org/photos/editor/json/2021/10/01/b/f/bfd9f795767e0520cf43d9b65524c13d_edit.org.jpg-376.jpg"
              />
              <div className="my-account__content__books__list__book__content">
                <span className="my-account__content__books__list__book__content__status my-account__content__books__list__book__content__status--read">
                  <FontAwesomeIcon icon={faCheck} /> LLegit
                </span>
                <span className="my-account__content__books__list__book__content__title">
                  Nunca dejes de soñar
                </span>
                <span className="my-account__content__books__list__book__content__author">
                  Anna Serra
                </span>

                <div className="my-account__content__books__list__book__content__actions">
                  <button className="my-account__content__books__list__book__content__actions__hide">
                    <FontAwesomeIcon icon={faEyeSlash} />
                  </button>
                  <button className="my-account__content__books__list__book__content__actions__pending">
                    <FontAwesomeIcon icon={faClock} />
                  </button>
                </div>
                <div className="my-account__content__books__list__book__content__delete">
                  <FontAwesomeIcon icon={faTrash} />
                </div>
              </div>
            </div>
            <div className="my-account__content__books__list__book">
              <img
                className="my-account__content__books__list__book__image"
                src="https://edit.org/photos/editor/json/2021/10/01/b/f/bfd9f795767e0520cf43d9b65524c13d_edit.org.jpg-376.jpg"
              />
              <div className="my-account__content__books__list__book__content">
                <span className="my-account__content__books__list__book__content__status my-account__content__books__list__book__content__status--read">
                  <FontAwesomeIcon icon={faCheck} /> LLegit
                </span>
                <span className="my-account__content__books__list__book__content__title">
                  Nunca dejes de soñar
                </span>
                <span className="my-account__content__books__list__book__content__author">
                  Anna Serra
                </span>

                <div className="my-account__content__books__list__book__content__actions">
                  <button className="my-account__content__books__list__book__content__actions__hide">
                    <FontAwesomeIcon icon={faEyeSlash} />
                  </button>
                  <button className="my-account__content__books__list__book__content__actions__pending">
                    <FontAwesomeIcon icon={faClock} />
                  </button>
                </div>
                <div className="my-account__content__books__list__book__content__delete">
                  <FontAwesomeIcon icon={faTrash} />
                </div>
              </div>
            </div>
            

          </div>
          <div className="my-account__content__books__subtitle">
            Llibres ocults
          </div>
          <div className="my-account__content__books__list">
            <div className="my-account__content__books__list__book">
              <img
                className="my-account__content__books__list__book__image"
                src="https://descubierta.es/wp-content/uploads/2022/06/Cover.jpg"
              />
              <div className="my-account__content__books__list__book__content">
                <span className="my-account__content__books__list__book__content__status my-account__content__books__list__book__content__status--pending">
                  <FontAwesomeIcon icon={faClock} /> Pendent
                </span>
                <span className="my-account__content__books__list__book__content__title">
                  Cada historia cuenta
                </span>
                <span className="my-account__content__books__list__book__content__author">
                  Miquel Solius
                </span>

                <div className="my-account__content__books__list__book__content__actions">
                  <button className="my-account__content__books__list__book__content__actions__visible">
                    <FontAwesomeIcon icon={faEye} />
                  </button>
                  <button className="my-account__content__books__list__book__content__actions__read">
                    <FontAwesomeIcon icon={faCheck} />
                  </button>
                </div>
                <div className="my-account__content__books__list__book__content__delete">
                  <FontAwesomeIcon icon={faTrash} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="my-account__content__stats">
          <div className="my-account__content__stats__head">
            <div className="my-account__content__stats__head__title">
              Estadístiques
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyAccountPage;
