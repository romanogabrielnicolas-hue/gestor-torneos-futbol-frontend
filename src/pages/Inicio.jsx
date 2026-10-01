function Inicio({ setPagina }) {
  return (
    <main className="container-fluid fondo-inicio py-5">
      <div className="container">
        {/* Presentación */}
        <section className="text-center mb-5 bienvenida-principal">
          <img
            src="/img/logoMejorado.png"
            alt="Logo del Gestor de Torneos"
            className="imagen-pagina"
          />

          <h1 className="fw-bold text-success mt-3">Gestor de Torneos</h1>

          <p className="lead text-white">
            Sistema para gestionar equipos, jugadores y partidos.
          </p>
        </section>

        {/* Opciones principales */}
        <section>
          <div className="row g-4">
            {/* Equipos */}
            <div className="col-12 col-md-4">
              <div className="card h-100 shadow tarjeta-opcion tarjeta-equipos text-center">
                <div className="card-body p-4">
                  <img
                    src="/img/equipos.png"
                    alt="Gestión de equipos"
                    className="imagen-tarjeta mb-3"
                  />

                  <h2 className="h4 fw-bold"> Equipos</h2>

                  <p className="text-muted">
                    Registrá y administrá los equipos del torneo.
                  </p>

                  <button
                    className="btn btn-success boton-personalizado"
                    onClick={() => setPagina("equipos")}
                  >
                    Gestión de Equipos
                  </button>
                </div>
              </div>
            </div>

            {/* Jugadores */}
            <div className="col-12 col-md-4">
              <div className="card h-100 shadow tarjeta-opcion tarjeta-jugadores text-center">
                <div className="card-body p-4">
                  <img
                    src="/img/jugadores.png"
                    alt="Gestión de jugadores"
                    className="imagen-tarjeta mb-3"
                  />

                  <h2 className="h4 fw-bold"> Jugadores</h2>

                  <p className="text-muted">
                    Registrá y administrá los jugadores.
                  </p>

                  <button
                    className="btn btn-primary boton-personalizado"
                    onClick={() => setPagina("jugadores")}
                  >
                    Gestión de Jugadores
                  </button>
                </div>
              </div>
            </div>

            {/* Partidos */}
            <div className="col-12 col-md-4">
              <div className="card h-100 shadow tarjeta-opcion tarjeta-partidos text-center">
                <div className="card-body p-4">
                  <img
                    src="/img/partidos.png"
                    alt="Gestión de partidos"
                    className="imagen-tarjeta mb-3"
                  />

                  <h2 className="h4 fw-bold"> Partidos</h2>

                  <p className="text-muted">
                    Registrá y administrá los partidos.
                  </p>

                  <button
                    className="btn btn-warning boton-personalizado"
                    onClick={() => setPagina("partidos")}
                  >
                    Gestión de Partidos
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Inicio;
