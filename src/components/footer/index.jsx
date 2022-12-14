import "./styles.scss";

const year = new Date().getFullYear();

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__links">
        <a href="/terms-of-use" className="footer__legal__links__link">Condicions d'ús</a>
        <a href="/privacy-policy" className="footer__legal__links__link">Política de privacitat</a>
        <a href="/cookies" className="footer__legal__links__link">Política de cookies</a>
        <a href="/about-us" className="footer__legal__links__link">Qui som?</a>
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
