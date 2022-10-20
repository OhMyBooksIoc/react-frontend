import './styles.css';

function Header({title, color}) {
  return (
   <h1 style={{backgroundColor: color}}>{title} Hola</h1>
  );
}

export default Header;
