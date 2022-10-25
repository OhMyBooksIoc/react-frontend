import "./styles.scss";

function MyAccountPage() {
  const { name } = JSON.parse(localStorage.getItem("user")) || "No user";
  return <h1>Hola, {name}</h1>;
}

export default MyAccountPage;
