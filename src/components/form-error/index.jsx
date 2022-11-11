import "./styles.scss";

function FormError({ message }) {
  return (
    <div className="form-error">
      <span className="form-error__title">{message}</span>
    </div>
  );
}

export default FormError;
