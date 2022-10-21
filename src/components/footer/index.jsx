import "./styles.scss";

const year = new Date().getFullYear();

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__links">
        <a href="/condiciones-de-uso" className="footer__legal__links__link">Condiciones de uso</a>
        <a href="/politica-privacidad" className="footer__legal__links__link">Política de privacidad</a>
        <a href="/cookies" className="footer__legal__links__link">Mis cookies</a>
        <a href="/quienes-somos" className="footer__legal__links__link">Quiénes somos</a>
        {/* <a className="footer__links__link">Registro</a>
        <a className="footer__links__link">Inciar sesión</a> */}
      </div>

      <div className="footer__legal__company">
        <span className="footer__legal__company__copyright">
          © {year} OhMyBooks
        </span>
      </div>
    </footer>
  );
}

export default Footer;
