import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-dark navbar-personalizada navbar-expand-lg">
      <div className="container py-2">
        <Link to="/" className="text-decoration-none d-flex align-items-center">
          <img
            src="/img/logoMejorado.png"
            alt="Logo Gestor de Torneos"
            className="logo-navbar"
          />

          <div className="ms-2">
            <div className="texto-logo">Gestor de</div>
            <div className="texto-logo-torneos">Torneos</div>
          </div>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#menuNavegacion"
          aria-controls="menuNavegacion"
          aria-expanded="false"
          aria-label="Abrir menú"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="menuNavegacion">
          <div className="d-flex flex-column flex-md-row gap-2 ms-auto mt-3 mt-md-0">
            <Link
              to="/"
              className="btn btn-light fw-bold px-4 py-2 rounded-3 shadow-sm d-flex align-items-center"
            >
              <img
                src="/img/logoMejorado.png"
                alt="Inicio"
                width="35"
                height="35"
                className="me-2"
              />
              Inicio
            </Link>

            <Link
              to="/equipos"
              className="btn btn-light fw-bold px-4 py-2 rounded-3 shadow-sm d-flex align-items-center"
            >
              <img
                src="/img/equipos.png"
                alt="Equipos"
                width="35"
                height="35"
                className="me-2"
              />
              Equipos
            </Link>

            <Link
              to="/jugadores"
              className="btn btn-light fw-bold px-4 py-2 rounded-3 shadow-sm d-flex align-items-center"
            >
              <img
                src="/img/jugadores.png"
                alt="Jugadores"
                width="35"
                height="35"
                className="me-2"
              />
              Jugadores
            </Link>

            <Link
              to="/partidos"
              className="btn btn-light fw-bold px-4 py-2 rounded-3 shadow-sm d-flex align-items-center"
            >
              <img
                src="/img/partidos.png"
                alt="Partidos"
                width="35"
                height="35"
                className="me-2"
              />
              Partidos
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
