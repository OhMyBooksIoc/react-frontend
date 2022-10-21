import "./styles.scss";
import Header from "../../components/header/index";
import Footer from "../../components/footer/index";

function HomePage() {
  return (
    <div className="home">
      <Header />
      <div className="home__container">
        <div className="home__container__head">
          <h1 className="home__container__head__title">
            Organiza tu bibliotca y comparte tus libros
          </h1>
          <h2 className="home__container__head__subtitle">
            ¿Te gustan la lectura? Únete a OhMyBooks
          </h2>
          <a href="/registro" className="home__container__head__button">
            regístrare
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
              <h4 className="home__container__content__features__feature__title">
                Crea tu colección en un momento 1
              </h4>
              <p className="home__container__content__features__feature__description">
                En Whakoom puedes encontrar cientos de miles de fichas de cómics
                en más de 30 idiomas y con toda la información que necesitas.
                Seguro que los cómics que tienes ya están aquí, pero si no
                encuentras algo, puedes crearlo tú mismo desde la web. ¡Whakoom
                lo hacemos entre todos!
              </p>
              <img
                className="home__container__content__features__feature__img"
                src="https://via.placeholder.com/325x200"
              />
            </div>
            <div className="home__container__content__features__feature">
              <h4 className="home__container__content__features__feature__title">
                Crea tu colección en un momento 2
              </h4>
              <p className="home__container__content__features__feature__description">
                En Whakoom puedes encontrar cientos de miles de fichas de cómics
                en más de 30 idiomas y con toda la información que necesitas.
                Seguro que los cómics que tienes ya están aquí, pero si no
                encuentras algo, puedes crearlo tú mismo desde la web. ¡Whakoom
                lo hacemos entre todos!
              </p>
              <img
                className="home__container__content__features__feature__img"
                src="https://via.placeholder.com/325x200"
              />
            </div>
            <div className="home__container__content__features__feature">
              <h4 className="home__container__content__features__feature__title">
                Crea tu colección en un momento 3
              </h4>
              <p className="home__container__content__features__feature__description">
                En Whakoom puedes encontrar cientos de miles de fichas de cómics
                en más de 30 idiomas y con toda la información que necesitas.
                Seguro que los cómics que tienes ya están aquí, pero si no
                encuentras algo, puedes crearlo tú mismo desde la web. ¡Whakoom
                lo hacemos entre todos!
              </p>
              <img
                className="home__container__content__features__feature__img"
                src="https://via.placeholder.com/325x200"
              />
            </div>
            <div className="home__container__content__features__feature">
              <h4 className="home__container__content__features__feature__title">
                Crea tu colección en un momento 4
              </h4>
              <p className="home__container__content__features__feature__description">
                En Whakoom puedes encontrar cientos de miles de fichas de cómics
                en más de 30 idiomas y con toda la información que necesitas.
                Seguro que los cómics que tienes ya están aquí, pero si no
                encuentras algo, puedes crearlo tú mismo desde la web. ¡Whakoom
                lo hacemos entre todos!
              </p>
              <img
                className="home__container__content__features__feature__img"
                src="https://via.placeholder.com/325x200"
              />
            </div>
          </div>
          <div className="home__container__content__stats">
          <div className="home__container__content__stats_stat"></div>
          <div className="home__container__content__stats_stat"></div>
          <div className="home__container__content__stats_stat"></div>
          <div className="home__container__content__stats_stat"></div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
