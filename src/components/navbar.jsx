import LogoTexto from "./LogoTexto";
function Navbar({ setPagina }) {
  return (
    <nav className="navbar navbar-dark navbar-personalizada navbar-expand-lg">
      <div className="container py-2">
        {/* Logo y nombre */}
        <div className="d-flex align-items-center">
          <img
            src="/img/logoMejorado.png"
            alt="Logo Gestor de Torneos"
            className="logo-navbar"
          />

          <div className="ms-2">
            <LogoTexto />
          </div>
        </div>

        {/* Botón hamburguesa */}
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

        {/* Menú */}
        <div className="collapse navbar-collapse" id="menuNavegacion">
          <div className="d-flex flex-column flex-md-row gap-2 ms-auto mt-3 mt-md-0">
            <button
              className="btn btn-light fw-bold px-4 py-2 rounded-3 shadow-sm d-flex align-items-center"
              onClick={() => setPagina("inicio")}
            >
              <img
                src="/img/logoMejorado.png"
                alt="Inicio"
                width="35"
                height="35"
                className="me-2"
              />
              Inicio
            </button>

            <button
              className="btn btn-light fw-bold px-4 py-2 rounded-3 shadow-sm d-flex align-items-center"
              onClick={() => setPagina("equipos")}
            >
              <img
                src="/img/equipos.png"
                alt="Equipos"
                width="35"
                height="35"
                className="me-2"
              />
              Equipos
            </button>

            <button
              className="btn btn-light fw-bold px-4 py-2 rounded-3 shadow-sm d-flex align-items-center"
              onClick={() => setPagina("jugadores")}
            >
              <img
                src="/img/jugadores.png"
                alt="Jugadores"
                width="35"
                height="35"
                className="me-2"
              />
              Jugadores
            </button>

            <button
              className="btn btn-light fw-bold px-4 py-2 rounded-3 shadow-sm d-flex align-items-center"
              onClick={() => setPagina("partidos")}
            >
              <img
                src="/img/partidos.png"
                alt="Partidos"
                width="35"
                height="35"
                className="me-2"
              />
              Partidos
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
