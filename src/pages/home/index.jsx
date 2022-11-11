import Hero from "../../components/hero";
import Stats from "../../components/stats";
import FeatureList from "../../components/feature-list"

import "./styles.scss";

const features = [
  {
    title: "La teva col·lecció",
    description: "Descobreix una forma de llistar i visualitzar la teva col·lecció en un mateix lloc, cercant i afegint llibres senzilla i pràcticament.",
  },
  {
    title: "Organitza la teva col·lecció",
    description: "Disposaràs d’una llista de llibres pròpia, amb condicions i filtres que t’ajudaran a organitzar la teva col·lecció d’una manera eficaç i intuïtiva.",
  },
  {
    title: "Llegit o no llegit?",
    description: "¿Se t’acumulen els exemplars? Necessites una bona organització. Marca tots els teus llibres pendents en una llista de lectura i presumeix de les lectures que has completat. ¡Mai has tingut un millor seguiment de les teves lectures!",
  },
  {
    title: "Comparteix ressenyes",
    description: "Escriu ressenyes i valora els teus llibres llegits. Permet que altres usuaris coneguin les teves opinions. ¿Qui sap? ¡Potser ajudes a algú a trobar la lectura que li canviarà la vida!",
  },
  { 
    title: "Tendències de lectura", 
    description: "Esbrina què estan llegint altres usuaris. No només trobaràs els títols que més es llegeixen, també coneixeràs els gèneres literaris que prefereixen els demés." },
  {
    title: "Llista de desitjats",
    description: "Tens molt clar els títols que desitges llegir, però sovint no es possible aconseguir-los tots. Amb la llista de desitjats, els tindràs sempre presents i podràs planificar la seva adquisició i lectura.",
  },
];

const statics = [
  {
    title: "Total Usuaris",
    value: 0
  },
  {
    title: "Llibres publicats",
    value: 0
  },
  {
    title: "Llibres llegits",
    value: 0
  },
  {
    title: "Llibres en venda",
    value: 0
  },
];

function HomePage() {
  return (
    <div className="home">
      <div className="home__container">
        <Hero>
          <a href="/register" className="home__container__head__button">
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
            <FeatureList features={features} />
          </div>
        </div>
        <div className="home__container__stats">
          <h2 className="home__container__stats__title">Dades d’interès</h2>
          <div className="home__container__stats__list">
            {statics.map(({title, value}) => <Stats key={title} {...{title, value}} />)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
