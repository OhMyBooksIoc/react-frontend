import React, { useState, useEffect } from "react";

import Hero from "../../components/hero";
import Stats from "../../components/stats";
import FeatureList from "../../components/feature-list";
import Loader from "../../components/loader";
import FormError from "../../components/form-error";

import "./styles.scss";

const token = localStorage.getItem("token") || "";

const features = [
  {
    title: "La teva col·lecció",
    description:
      "Descobreix una forma de llistar i visualitzar la teva col·lecció en un mateix lloc, cercant i afegint llibres senzilla i pràcticament.",
  },
  {
    title: "Organitza la teva col·lecció",
    description:
      "Disposaràs d’una llista de llibres pròpia, amb condicions i filtres que t’ajudaran a organitzar la teva col·lecció d’una manera eficaç i intuïtiva.",
  },
  {
    title: "Llegit o no llegit?",
    description:
      "¿Se t’acumulen els exemplars? Necessites una bona organització. Marca tots els teus llibres pendents en una llista de lectura i presumeix de les lectures que has completat. ¡Mai has tingut un millor seguiment de les teves lectures!",
  },
  {
    title: "Comparteix ressenyes",
    description:
      "Escriu ressenyes i valora els teus llibres llegits. Permet que altres usuaris coneguin les teves opinions. ¿Qui sap? ¡Potser ajudes a algú a trobar la lectura que li canviarà la vida!",
  },
  {
    title: "Tendències de lectura",
    description:
      "Esbrina què estan llegint altres usuaris. No només trobaràs els títols que més es llegeixen, també coneixeràs els gèneres literaris que prefereixen els demés.",
  },
  {
    title: "Llista de desitjats",
    description:
      "Tens molt clar els títols que desitges llegir, però sovint no es possible aconseguir-los tots. Amb la llista de desitjats, els tindràs sempre presents i podràs planificar la seva adquisició i lectura.",
  },
];

const isAuthenticated = localStorage.getItem("isAuthenticated") || false;

function HomePage() {
  const [pageIsLoading, setPageIsLoading] = useState(true);
  const [publicStats, setPublicStats] = useState(null);
  const [cardStats, setCardStats] = useState([]);
  const [error, setError] = useState(null);

  const getPublicStats = async () => {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}/stats/public`,
        requestOptions
      );

      if (response.status !== 200) {
        setError(
          "No s'ha pogut obtenir les estadístiques. Intenta-ho més tard."
        );
        setPageIsLoading(false);
        return;
      }
      const stats = await response.json();
      setCardStats([
        {
          title: "Total Usuaris",
          value: stats.totalRegistredUsers,
        },
        {
          title: "Llibres publicats",
          value: stats.totalBooksApp,
        },
        {
          title: "Llibres llegits",
          value: stats.totalBooksReaded,
        },
        {
          title: "Intercanviables",
          value: stats.totalBooksTraded,
        },
      ]);
      setPublicStats(stats);
      setPageIsLoading(false);
    } catch (err) {
      setError("No s'ha pogut connectar amb l'API. Intenta-ho més tard.");
      setPageIsLoading(false);
    }
  };

  useEffect(() => {
    getPublicStats();
  }, []);

  return (
    <div className="home">
      <div className="home__container">
        <Hero>
          {!isAuthenticated ? (
            <a href="/register" className="home__container__head__button">
              Registra’t
            </a>
          ) : (
            <div className="home__container__head__no-auth" />
          )}
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
            <FeatureList features={features} />
          </div>
        </div>
        <div className="home__container__stats">
          <h2 className="home__container__stats__title">Dades d’interès</h2>
          {!pageIsLoading ? (
            <>
              {error ? <FormError message={error} /> : null}
              {publicStats ? (
                <>
                  {" "}
                  {publicStats.userWithMoreReads !== "-" &&
                  publicStats.userWithMorePagesRead !== "-" ? (
                    <div className="home__container__stats__user-stats">
                      <span>Usuari amb més llibres llegits: </span>
                      <span className="home__container__stats__user-stats__value">
                        🏆 {publicStats.userWithMoreReads}
                      </span>
                      <span>Usuari amb més págines llegides: </span>
                      <span className="home__container__stats__user-stats__value">
                        {" "}
                        🏆 {publicStats.userWithMorePagesRead}
                      </span>
                    </div>
                  ) : null}
                  <div className="home__container__stats__list">
                    {cardStats.map(({ title, value }) => (
                      <Stats key={title} {...{ title, value }} />
                    ))}
                  </div>
                </>
              ) : null}
            </>
          ) : (
            <Loader />
          )}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
