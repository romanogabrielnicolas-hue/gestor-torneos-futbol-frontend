function Equipos() {
  return (
    <main className="container py-5">
      {/* Encabezado */}
      <section className="text-center mb-5">
        <img
          src="/img/equipos.png"
          alt="Gestión de equipos"
          className="img-fluid"
          style={{ maxWidth: "150px" }}
        />

        <h1 className="fw-bold text-success mt-3">Gestión de Equipos</h1>

        <p className="lead">Registrá y administrá los equipos del torneo.</p>
      </section>

      {/* Formulario */}
      <section className="mb-5">
        <div className="card shadow">
          <div className="card-body p-4">
            <h2 className="h4 fw-bold mb-4">➕ Añadir equipo</h2>

            <div className="row g-3">
              <div className="col-12 col-md-8">
                <label className="form-label">Nombre del equipo</label>

                <input
                  type="text"
                  className="form-control"
                  placeholder="Ingrese el nombre"
                />
              </div>

              <div className="col-12 col-md-4">
                <label className="form-label">Color</label>

                <input
                  type="color"
                  className="form-control form-control-color"
                />
              </div>

              <div className="col-12">
                <button className="btn btn-success">Agregar equipo</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tabla */}
      <section>
        <div className="card shadow">
          <div className="card-body p-4">
            <h2 className="h4 fw-bold mb-4">🏆 Equipos registrados</h2>

            <div className="table-responsive">
              <table className="table table-hover align-middle">
                <thead className="table-success">
                  <tr>
                    <th>Nombre</th>
                    <th>Color</th>
                    <th>Acciones</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>Equipo de ejemplo</td>
                    <td>
                      <span
                        className="d-inline-block rounded-circle"
                        style={{
                          width: "25px",
                          height: "25px",
                          backgroundColor: "green",
                        }}
                      ></span>
                    </td>
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

export default Equipos;
