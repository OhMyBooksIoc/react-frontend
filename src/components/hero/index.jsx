import "./styles.scss";

function Hero({ children, title }) {
  return (
   <div className="hero-container">
    <span className="hero-container__title">Descobreix l'app preferida dels lectors.</span>
    { children }
   </div>
  );
}

export default Hero;
