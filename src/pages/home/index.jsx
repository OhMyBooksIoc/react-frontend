import Hero from "../../components/hero";

import "./styles.scss";

function HomePage() {
  return (
    <div className="home">
      <div className="home__container">
        <Hero>
          <a href="/registro" className="home__container__head__button">
            Registra’t
          </a>
        </Hero>

        <div className="home__container__head">
          <h2 className="home__container__head__pre-title">
            La teva comunitat de lectors
          </h2>
          <h1 className="home__container__head__title">
            Organitza la teva biblioteca i comparteix els teus llibres
          </h1>
          <h3 className="home__container__head__subtitle">
            T’agrada la lectura? Uneix-te a OhMyBooks
          </h3>
        </div>
        <div style={{ backgroundColor: "#F0C260" }}>
          <div className="home__container__content">
            <div className="home__container__content__features">
              <div className="home__container__content__features__card">
                <div className="home__container__content__features__card__title">
                  La teva col·lecció
                </div>
                <div className="home__container__content__features__card__description">
                  Descobreix una forma de llistar i visualitzar la teva
                  col·lecció en un mateix lloc, cercant i afegint llibres
                  senzilla i pràcticament.
                </div>
              </div>
              <div className="home__container__content__features__card">
                <div className="home__container__content__features__card__title">
                Organitza la teva col·lecció
                </div>
                <div className="home__container__content__features__card__description">
                Disposaràs d’una llista de llibres pròpia, amb condicions i filtres que t’ajudaran a organitzar la teva col·lecció d’una manera eficaç i intuïtiva.
                </div>
              </div>
              <div className="home__container__content__features__card">
                <div className="home__container__content__features__card__title">
                Llegit o no llegit?
                </div>
                <div className="home__container__content__features__card__description">
                ¿Se t’acumulen els exemplars? Necessites una bona organització. Marca tots els teus llibres pendents en una llista de lectura i presumeix de les lectures que has completat. ¡Mai has tingut un millor seguiment de les teves lectures!
                </div>
              </div>
              <div className="home__container__content__features__card">
                <div className="home__container__content__features__card__title">
                Comparteix ressenyes
                </div>
                <div className="home__container__content__features__card__description">
                ¿Se t’acumulen els exemplars? Necessites una bona organització. Marca tots els teus llibres pendents en una llista de lectura i presumeix de les lectures que has completat. ¡Mai has tingut un millor seguiment de les teves lectures!
                </div>
              </div>
              <div className="home__container__content__features__card">
                <div className="home__container__content__features__card__title">
                Tendències de lectura
                </div>
                <div className="home__container__content__features__card__description">
                Esbrina què estan llegint altres usuaris. No només trobaràs els títols que més es llegeixen, també coneixeràs els gèneres literaris que prefereixen els demés.
                </div>
              </div>
              <div className="home__container__content__features__card">
                <div className="home__container__content__features__card__title">
                Llista de desitjats
                </div>
                <div className="home__container__content__features__card__description">
                Tens molt clar els títols que desitges llegir, però sovint no es possible aconseguir-los tots. Amb la llista de desitjats, els tindràs sempre presents i podràs planificar la seva adquisició i lectura.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="home__container__stats">
            <h2 className="home__container__stats__title">Dades d’interès</h2>
            <div className="home__container__stats__list">
              <div className="home__container__stats__list__stat">
                <span className="home__container__stats__list__stat__title">
                  Total Usuarios
                </span>
                <span className="home__container__stats__list__stat__value">
                  0
                </span>
              </div>
              <div className="home__container__stats__list__stat">
                <span className="home__container__stats__list__stat__title">
                  Libros publicados
                </span>
                <span className="home__container__stats__list__stat__value">
                  0
                </span>
              </div>
              <div className="home__container__stats__list__stat">
                <span className="home__container__stats__list__stat__title">
                  Libros leídos
                </span>
                <span className="home__container__stats__list__stat__value">
                  0
                </span>
              </div>
              <div className="home__container__stats__list__stat">
                <span className="home__container__stats__list__stat__title">
                  Libros en venta
                </span>
                <span
                  className="home__container__stats__list__stat__value"
                >
                  0
                </span>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}

export default HomePage;
