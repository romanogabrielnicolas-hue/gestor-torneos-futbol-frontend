function Partidos() {
  return (
    <main className="container py-5">
      {/* Encabezado */}
      <section className="text-center mb-5">
        <img
          src="/img/partidos.png"
          alt="Gestión de partidos"
          className="img-fluid"
          style={{ maxWidth: "150px" }}
        />

        <h1 className="fw-bold text-warning mt-3">Gestión de Partidos</h1>

        <p className="lead">Registrá y administrá los partidos del torneo.</p>
      </section>

      {/* Formulario */}
      <section className="mb-5">
        <div className="card shadow">
          <div className="card-body p-4">
            <h2 className="h4 fw-bold mb-4">➕ Añadir partido</h2>

            <div className="row g-3">
              <div className="col-12 col-md-6">
                <label className="form-label">Equipo local</label>

                <select className="form-select">
                  <option>Seleccione un equipo</option>
                  <option>Equipo A</option>
                  <option>Equipo B</option>
                </select>
              </div>

              <div className="col-12 col-md-6">
                <label className="form-label">Equipo visitante</label>

                <select className="form-select">
                  <option>Seleccione un equipo</option>
                  <option>Equipo A</option>
                  <option>Equipo B</option>
                </select>
              </div>

              <div className="col-12 col-md-6">
                <label className="form-label">Fecha</label>

                <input type="date" className="form-control" />
              </div>

              <div className="col-12 col-md-6">
                <label className="form-label">Hora</label>

                <input type="time" className="form-control" />
              </div>

              <div className="col-12">
                <button className="btn btn-warning">Agregar partido</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tabla */}
      <section>
        <div className="card shadow">
          <div className="card-body p-4">
            <h2 className="h4 fw-bold mb-4">📅 Partidos registrados</h2>

            <div className="table-responsive">
              <table className="table table-hover align-middle">
                <thead className="table-warning">
                  <tr>
                    <th>Local</th>
                    <th>Visitante</th>
                    <th>Fecha</th>
                    <th>Hora</th>
                    <th>Acciones</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>Equipo A</td>
                    <td>Equipo B</td>
                    <td>00/00/0000</td>
                    <td>00:00</td>
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

export default Partidos;
