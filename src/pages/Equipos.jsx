import { useState } from "react";

function Equipos() {
  const [nombre, setNombre] = useState("");
  const [color, setColor] = useState("#008000");
  const [equipos, setEquipos] = useState([]);
  const [editandoId, setEditandoId] = useState(null);

  // Agregar un equipo
  function agregarEquipo() {
    if (nombre.trim() === "") {
      alert("Ingrese el nombre del equipo");
      return;
    }

    const nuevoEquipo = {
      id: Date.now(),
      nombre: nombre,
      color: color,
    };

    setEquipos([...equipos, nuevoEquipo]);

    setNombre("");
    setColor("#008000");
  }

  // Preparar un equipo para editar
  function editarEquipo(equipo) {
    setNombre(equipo.nombre);
    setColor(equipo.color);
    setEditandoId(equipo.id);
  }

  // Guardar los cambios del equipo
  function guardarCambios() {
    if (nombre.trim() === "") {
      alert("Ingrese el nombre del equipo");
      return;
    }

    setEquipos(
      equipos.map((equipo) =>
        equipo.id === editandoId
          ? {
              ...equipo,
              nombre: nombre,
              color: color,
            }
          : equipo,
      ),
    );

    setNombre("");
    setColor("#008000");
    setEditandoId(null);
  }

  // Cancelar la edición
  function cancelarEdicion() {
    setNombre("");
    setColor("#008000");
    setEditandoId(null);
  }

  // Eliminar un equipo
  function eliminarEquipo(id) {
    setEquipos(equipos.filter((equipo) => equipo.id !== id));
  }

  return (
    <main className="fondo-pagina fondo-equipos">
      {/* Encabezado */}
      <section className="text-center mb-5">
        <img
          src="/img/equipos.png"
          alt="Gestión de equipos"
          className="img-fluid"
          style={{ maxWidth: "150px" }}
        />

        <h1 className="fw-bold text-success mt-3">Gestión de Equipos</h1>

        <p className="lead text-white">
          Registrá y administrá los equipos del torneo.
        </p>
      </section>

      {/* Formulario */}
      <section className="mb-5">
        <div className="card shadow">
          <div className="card-body p-4">
            <h2 className="h4 fw-bold mb-4">
              {editandoId === null ? "➕ Añadir equipo" : "✏️ Editar equipo"}
            </h2>

            <div className="row g-3">
              <div className="col-12 col-md-8">
                <label className="form-label">Nombre del equipo</label>

                <input
                  type="text"
                  className="form-control"
                  placeholder="Ingrese el nombre"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                />
              </div>

              <div className="col-12 col-md-4">
                <label className="form-label">Color</label>

                <input
                  type="color"
                  className="form-control form-control-color"
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                />
              </div>

              <div className="col-12">
                {editandoId === null ? (
                  <button
                    className="btn btn-success me-2"
                    onClick={agregarEquipo}
                  >
                    Agregar equipo
                  </button>
                ) : (
                  <>
                    <button
                      className="btn btn-success me-2"
                      onClick={guardarCambios}
                    >
                      Guardar cambios
                    </button>

                    <button
                      className="btn btn-secondary"
                      onClick={cancelarEdicion}
                    >
                      Cancelar
                    </button>
                  </>
                )}
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
                  {equipos.length === 0 ? (
                    <tr>
                      <td colSpan="3" className="text-center text-muted">
                        No hay equipos registrados.
                      </td>
                    </tr>
                  ) : (
                    equipos.map((equipo) => (
                      <tr key={equipo.id}>
                        <td>{equipo.nombre}</td>

                        <td>
                          <span
                            className="d-inline-block rounded-circle"
                            style={{
                              width: "25px",
                              height: "25px",
                              backgroundColor: equipo.color,
                            }}
                          ></span>
                        </td>

                        <td>
                          <button
                            className="btn btn-warning btn-sm me-2"
                            onClick={() => editarEquipo(equipo)}
                          >
                            Editar
                          </button>

                          <button
                            className="btn btn-danger btn-sm"
                            onClick={() => eliminarEquipo(equipo.id)}
                          >
                            Eliminar
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
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
