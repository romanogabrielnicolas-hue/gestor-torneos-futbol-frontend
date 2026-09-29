function Jugadores() {
  return (
    <main className="container py-5">
      {/* Encabezado */}
      <section className="text-center mb-5">
        <img
          src="/img/jugadores.png"
          alt="Gestión de jugadores"
          className="img-fluid"
          style={{ maxWidth: "150px" }}
        />

        <h1 className="fw-bold text-primary mt-3">Gestión de Jugadores</h1>

        <p className="lead text-white">
          Registrá y administrá los jugadores del torneo.
        </p>
      </section>

      {/* Formulario */}
      <section className="mb-5">
        <div className="card shadow">
          <div className="card-body p-4">
            <h2 className="h4 fw-bold mb-4">➕ Añadir jugador</h2>

            <div className="row g-3">
              <div className="col-12 col-md-8">
                <label className="form-label">Nombre del jugador</label>

                <input
                  type="text"
                  className="form-control"
                  placeholder="Ingrese el nombre"
                />
              </div>

              <div className="col-12 col-md-4">
                <label className="form-label">Equipo</label>

                <select className="form-select">
                  <option>Seleccione un equipo</option>
                  <option>Equipo A</option>
                  <option>Equipo B</option>
                </select>
              </div>

              <div className="col-12">
                <button className="btn btn-primary">Agregar jugador</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tabla */}
      <section>
        <div className="card shadow">
          <div className="card-body p-4">
            <h2 className="h4 fw-bold mb-4">👤 Jugadores registrados</h2>

            <div className="table-responsive">
              <table className="table table-hover align-middle">
                <thead className="table-primary">
                  <tr>
                    <th>Jugador</th>
                    <th>Equipo</th>
                    <th>Acciones</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>Jugador de ejemplo</td>
                    <td>Equipo A</td>
                    <td>
                      <button className="btn btn-warning btn-sm me-2">
                        Editar
                      </button>

                      <button className="btn btn-danger btn-sm">
                        Eliminar
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Jugadores;
