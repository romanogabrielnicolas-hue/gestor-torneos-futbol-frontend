function Navbar({ setPagina }) {
  return (
    <nav className="navbar navbar-dark bg-success">
      <div className="container">
        <span className="navbar-brand">⚽ Gestor de Torneos</span>

        <div>
          <button
            className="btn btn-light me-2"
            onClick={() => setPagina("inicio")}
          >
            Inicio
          </button>

          <button
            className="btn btn-light me-2"
            onClick={() => setPagina("equipos")}
          >
            Equipos
          </button>

          <button
            className="btn btn-light me-2"
            onClick={() => setPagina("jugadores")}
          >
            Jugadores
          </button>

          <button
            className="btn btn-light"
            onClick={() => setPagina("partidos")}
          >
            Partidos
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
