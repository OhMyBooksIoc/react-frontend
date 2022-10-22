import "./styles.scss"

function HomePage() {
  return (
    <div className="home">
      <div className="home__container">
        <div className="home__container__head">
          <h1 className="home__container__head__title">
            Organiza tu biblioteca y comparte tus libros
          </h1>
          <h2 className="home__container__head__subtitle">
            ¿Te gustan la lectura? Únete a OhMyBooks
          </h2>
          <a href="/registro" className="home__container__head__button">
            Regístrare
          </a>
        </div>
        <div className="home__container__content">
          <h2 className="home__container__content__title">
            Digitalizar tu libreria por fin es fácil
          </h2>
          <h3 className="home__container__content__subtitle">
            Mantener tu libreria organizada y a tus amigos informados ya no sera
            complejo, con OhMyBooks puedes hacerlo de la manera fácil.
          </h3>
          <div className="home__container__content__features">
            <div className="home__container__content__features__feature">
              <div className="home__container__content__features__feature__container">
                <h4 className="home__container__content__features__feature__container__title">
                  Lorem Ipsum 1
                </h4>
                <p className="home__container__content__features__feature__container__description">
                  Lorem Ipsum es simplemente el texto de relleno de las
                  imprentas y archivos de texto. Lorem Ipsum ha sido el texto de
                  relleno estándar de las industrias desde el año 1500, cuando
                  un impresor (N. del T. persona que se dedica a la imprenta)
                  desconocido usó una galería de textos y los mezcló de tal
                  manera que logró hacer un libro de textos especimen
                </p>
              </div>
              <img
                className="home__container__content__features__feature__img"
                src="https://via.placeholder.com/325x200?text=OhMyBooks"
              />
            </div>
            <div className="home__container__content__features__feature home__container__content__features__feature--reverse">
              <div className="home__container__content__features__feature__container">
                <h4 className="home__container__content__features__feature__container__title">
                  Lorem Ipsum 2
                </h4>
                <p className="home__container__content__features__feature__container__description">
                  Lorem Ipsum es simplemente el texto de relleno de las
                  imprentas y archivos de texto. Lorem Ipsum ha sido el texto de
                  relleno estándar de las industrias desde el año 1500, cuando
                  un impresor (N. del T. persona que se dedica a la imprenta)
                  desconocido usó una galería de textos y los mezcló de tal
                  manera que logró hacer un libro de textos especimen
                </p>
              </div>
              <img
                className="home__container__content__features__feature__img"
                src="https://via.placeholder.com/325x200?text=OhMyBooks"
              />
            </div>
            <div className="home__container__content__features__feature">
              <div className="home__container__content__features__feature__container">
                <h4 className="home__container__content__features__feature__container__title">
                  Lorem Ipsum 3
                </h4>
                <p className="home__container__content__features__feature__container__description">
                  Lorem Ipsum es simplemente el texto de relleno de las
                  imprentas y archivos de texto. Lorem Ipsum ha sido el texto de
                  relleno estándar de las industrias desde el año 1500, cuando
                  un impresor (N. del T. persona que se dedica a la imprenta)
                  desconocido usó una galería de textos y los mezcló de tal
                  manera que logró hacer un libro de textos especimen
                </p>
              </div>
              <img
                className="home__container__content__features__feature__img"
                src="https://via.placeholder.com/325x200?text=OhMyBooks"
              />
            </div>
            <div className="home__container__content__features__feature home__container__content__features__feature--reverse">
              <div className="home__container__content__features__feature__container">
                <h4 className="home__container__content__features__feature__container__title">
                  Lorem Ipsum 4
                </h4>
                <p className="home__container__content__features__feature__container__description">
                  Lorem Ipsum es simplemente el texto de relleno de las
                  imprentas y archivos de texto. Lorem Ipsum ha sido el texto de
                  relleno estándar de las industrias desde el año 1500, cuando
                  un impresor (N. del T. persona que se dedica a la imprenta)
                  desconocido usó una galería de textos y los mezcló de tal
                  manera que logró hacer un libro de textos especimen
                </p>
              </div>
              <img
                className="home__container__content__features__feature__img"
                src="https://via.placeholder.com/325x200?text=OhMyBooks"
              />
            </div>
          </div>
          <div className="home__container__content__stats">
            <h2 className="home__container__content__stats__title">
              Datos de interés
            </h2>
            <div className="home__container__content__stats__list">
              <div className="home__container__content__stats__list__stat">
                <span className="home__container__content__stats__list__stat__value">
                  0
                </span>
                <span className="home__container__content__stats__list__stat__title">
                  Total Usuarios
                </span>
              </div>
              <div className="home__container__content__stats__list__stat">
                <span className="home__container__content__stats__list__stat__value">
                  0
                </span>
                <span className="home__container__content__stats__list__stat__title">
                  Libros publicados
                </span>
              </div>
              <div className="home__container__content__stats__list__stat">
                <span className="home__container__content__stats__list__stat__value">
                  0
                </span>
                <span className="home__container__content__stats__list__stat__title">
                  Libros leídos
                </span>
              </div>
              <div className="home__container__content__stats__list__stat">
                <span className="home__container__content__stats__list__stat__value">
                  0
                </span>
                <span className="home__container__content__stats__list__stat__title">
                  Libros en venta
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
