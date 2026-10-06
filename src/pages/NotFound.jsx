import { Link } from "react-router-dom";

function NotFound() {
  return (
    <main className="container-fluid fondo-inicio py-5 min-vh-100">
      <div className="container text-center py-5">
        <h1 className="display-1 fw-bold text-white">404</h1>

        <h2 className="fw-bold text-white">Página no encontrada</h2>

        <p className="lead text-white">
          La página que estás buscando no existe.
        </p>

        <Link to="/" className="btn btn-light shadow-sm fw-bold">
          <i className="bi bi-house-fill me-2"></i>
          Volver al inicio
        </Link>
      </div>
    </main>
  );
}

export default NotFound;
