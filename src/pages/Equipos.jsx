import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ConfirmacionEliminar from "../components/ConfirmacionEliminar";
import Button from "react-bootstrap/Button";
import BotonEliminar from "../components/BotonEliminar";
import BotonEditar from "../components/BotonEditar";
import BotonAgregar from "../components/BotonAgregar";

function Equipos() {
  const [nombre, setNombre] = useState("");
  const [color, setColor] = useState("#008000");
  const [equipos, setEquipos] = useState([]);
  const [editandoId, setEditandoId] = useState(null);
  const [confirmacionEliminar, setConfirmacionEliminar] = useState({
    mostrar: false,
    id: null,
  });
  function solicitarEliminar(id) {
    setConfirmacionEliminar({
      mostrar: true,
      id: id,
    });
  }

  function cancelarEliminar() {
    setConfirmacionEliminar({
      mostrar: false,
      id: null,
    });
  }

  // Obtener los equipos de la base de datos
  useEffect(() => {
    axios
      .get("http://localhost:5136/api/equipos")
      .then((respuesta) => {
        setEquipos(respuesta.data);
      })
      .catch((error) => {
        console.error("Error al obtener los equipos:", error);
      });
  }, []);

  // Agregar un equipo
  function agregarEquipo() {
    if (nombre.trim() === "") {
      alert("Ingrese el nombre del equipo");
      return;
    }

    const nuevoEquipo = {
      nombre: nombre,
      color: color,
    };

    axios
      .post("http://localhost:5136/api/equipos", nuevoEquipo)
      .then((respuesta) => {
        setEquipos([...equipos, respuesta.data]);

        setNombre("");
        setColor("#008000");
      })
      .catch((error) => {
        console.error("Error al agregar el equipo:", error);
      });
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

    const equipoActualizado = {
      nombre: nombre,
      color: color,
    };

    axios
      .put(`http://localhost:5136/api/equipos/${editandoId}`, equipoActualizado)
      .then((respuesta) => {
        setEquipos(
          equipos.map((equipo) =>
            equipo.id === editandoId ? respuesta.data : equipo,
          ),
        );

        setNombre("");
        setColor("#008000");
        setEditandoId(null);
      })
      .catch((error) => {
        console.error("Error al editar el equipo:", error);
      });
  }

  // Cancelar la edición
  function cancelarEdicion() {
    setNombre("");
    setColor("#008000");
    setEditandoId(null);
  }

  // Eliminar un equipo

  function eliminarEquipo(id) {
    solicitarEliminar(id);
  }

  function confirmarEliminar() {
    const id = confirmacionEliminar.id;

    axios
      .delete(`http://localhost:5136/api/equipos/${id}`)
      .then(() => {
        setEquipos((anteriores) =>
          anteriores.filter((equipo) => equipo.id !== id),
        );
        cancelarEliminar();
      })
      .catch((error) => {
        console.error("Error al eliminar el equipo:", error);
        alert("No se pudo eliminar el equipo.");
      });
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
              {editandoId === null ? (
                <>
                  <i className="bi bi-plus-circle me-2"></i>
                  Añadir equipo
                </>
              ) : (
                <>
                  <i className="bi bi-pencil-fill me-2"></i>
                  Editar equipo
                </>
              )}
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
                  <BotonAgregar
                    texto="Agregar equipo"
                    onClick={agregarEquipo}
                  />
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
              <table className="table table-striped table-hover align-middle">
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
                          <div className="d-flex align-items-center gap-2">
                            <BotonEditar onClick={() => editarEquipo(equipo)} />

                            <BotonEliminar
                              onClick={() => eliminarEquipo(equipo.id)}
                            />
                          </div>
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

      {/* Botón volver */}
      <div className="text-center py-4">
        <Button as={Link} to="/" variant="light" className="shadow-sm fw-bold">
          <i className="bi bi-house-fill me-2"></i>
          Volver a Inicio
        </Button>
      </div>

      <ConfirmacionEliminar
        show={confirmacionEliminar.mostrar}
        titulo="¿Eliminar elemento?"
        mensaje="Esta acción no se puede deshacer. ¿Estás seguro?"
        onCancel={cancelarEliminar}
        onConfirm={confirmarEliminar}
      />
    </main>
  );
}

export default Equipos;
