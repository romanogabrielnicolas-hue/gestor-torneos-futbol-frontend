function Inicio({ setPagina }) {
  return (
    <main className="container py-5">
      {/* Presentación */}
      <section className="text-center mb-5">
        <img
          src="/img/logoMejorado.png"
          alt="Logo del Gestor de Torneos"
          className="img-fluid"
          style={{ maxWidth: "150px" }}
        />

        <h1 className="fw-bold text-success mt-3">Gestor de Torneos</h1>

        <p className="lead">
          Sistema para gestionar equipos, jugadores y partidos.
        </p>
      </section>

      {/* Opciones principales */}
      <section>
        <div className="row g-4">
          <div className="col-12 col-md-4">
            <div className="card h-100 shadow text-center">
              <div className="card-body p-4">
                <h2 className="h4 fw-bold">⚽ Equipos</h2>

                <p className="text-muted">
                  Registrá y administrá los equipos del torneo.
                </p>

                <button
                  className="btn btn-success"
                  onClick={() => setPagina("equipos")}
                >
                  Gestión de Equipos
                </button>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className="card h-100 shadow text-center">
              <div className="card-body p-4">
                <h2 className="h4 fw-bold">👤 Jugadores</h2>

                <p className="text-muted">
                  Registrá y administrá los jugadores.
                </p>

                <button
                  className="btn btn-primary"
                  onClick={() => setPagina("jugadores")}
                >
                  Gestión de Jugadores
                </button>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className="card h-100 shadow text-center">
              <div className="card-body p-4">
                <h2 className="h4 fw-bold">📅 Partidos</h2>

                <p className="text-muted">
                  Registrá y administrá los partidos.
                </p>

                <button
                  className="btn btn-warning"
                  onClick={() => setPagina("partidos")}
                >
                  Gestión de Partidos
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Inicio;
