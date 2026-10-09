import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ConfirmacionEliminar from "../components/ConfirmacionEliminar";
import Button from "react-bootstrap/Button";
import BotonEditar from "../components/BotonEditar";
import BotonEliminar from "../components/BotonEliminar";
import BotonAgregar from "../components/BotonAgregar";

const API_PARTIDOS = "http://localhost:5136/api/partidos";
const API_EQUIPOS = "http://localhost:5136/api/equipos";

function Partidos() {
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");
  const [cancha, setCancha] = useState("");
  const [equipoLocal, setEquipoLocal] = useState("");
  const [equipoVisitante, setEquipoVisitante] = useState("");

  const [partidos, setPartidos] = useState([]);
  const [equipos, setEquipos] = useState([]);
  const [editandoId, setEditandoId] = useState(null);
  const [confirmacionEliminar, setConfirmacionEliminar] = useState({
    mostrar: false,
    id: null,
  });

  function solicitarEliminar(id) {
    setConfirmacionEliminar({ mostrar: true, id });
  }

  function cancelarEliminar() {
    setConfirmacionEliminar({ mostrar: false, id: null });
  }

  // Cargar partidos y equipos desde la API
  useEffect(() => {
    axios
      .get(API_PARTIDOS)
      .then((respuesta) => {
        setPartidos(respuesta.data);
      })
      .catch((error) => {
        console.error("Error al cargar los partidos:", error);
      });

    axios
      .get(API_EQUIPOS)
      .then((respuesta) => {
        setEquipos(respuesta.data);
      })
      .catch((error) => {
        console.error("Error al cargar los equipos:", error);
      });
  }, []);

  // Limpiar formulario
  function limpiarFormulario() {
    setFecha("");
    setHora("");
    setCancha("");
    setEquipoLocal("");
    setEquipoVisitante("");
  }

  // Validar formulario
  function validarFormulario() {
    if (
      fecha === "" ||
      hora === "" ||
      cancha.trim() === "" ||
      equipoLocal === "" ||
      equipoVisitante === ""
    ) {
      alert("Complete todos los campos");
      return false;
    }

    if (equipoLocal === equipoVisitante) {
      alert("El equipo local y visitante no pueden ser iguales");
      return false;
    }

    return true;
  }

  // Preparar datos para enviar al backend
  function obtenerDatosPartido() {
    return {
      fecha,
      hora: `${hora}:00`,
      cancha: cancha.trim(),
      equipoLocalId: Number(equipoLocal),
      equipoVisitanteId: Number(equipoVisitante),
    };
  }

  // Agregar partido
  function agregarPartido() {
    if (!validarFormulario()) return;

    axios
      .post(API_PARTIDOS, obtenerDatosPartido())
      .then((respuesta) => {
        setPartidos((anteriores) => [...anteriores, respuesta.data]);
        limpiarFormulario();
      })
      .catch((error) => {
        console.error("Error al agregar el partido:", error);
        alert("No se pudo agregar el partido.");
      });
  }

  // Preparar partido para editar
  function editarPartido(partido) {
    setFecha(partido.fecha.substring(0, 10));
    setHora(partido.hora.substring(0, 5));
    setCancha(partido.cancha);
    setEquipoLocal(String(partido.equipoLocalId));
    setEquipoVisitante(String(partido.equipoVisitanteId));
    setEditandoId(partido.id);
  }

  // Guardar cambios
  function guardarCambios() {
    if (!validarFormulario()) return;

    axios
      .put(`${API_PARTIDOS}/${editandoId}`, obtenerDatosPartido())
      .then((respuesta) => {
        setPartidos((anteriores) =>
          anteriores.map((partido) =>
            partido.id === editandoId ? respuesta.data : partido,
          ),
        );

        limpiarFormulario();
        setEditandoId(null);
      })
      .catch((error) => {
        console.error("Error al editar el partido:", error);
        alert("No se pudo editar el partido.");
      });
  }

  // Cancelar edición
  function cancelarEdicion() {
    limpiarFormulario();
    setEditandoId(null);
  }

  // Eliminar partido

  function eliminarPartido(id) {
    solicitarEliminar(id);
  }

  function confirmarEliminar() {
    const id = confirmacionEliminar.id;

    axios
      .delete(`${API_PARTIDOS}/${id}`)
      .then(() => {
        setPartidos((anteriores) =>
          anteriores.filter((partido) => partido.id !== id),
        );

        if (editandoId === id) {
          cancelarEdicion();
        }

        cancelarEliminar();
      })
      .catch((error) => {
        console.error("Error al eliminar el partido:", error);
        alert("No se pudo eliminar el partido.");
      });
  }

  // Mostrar el nombre del equipo a partir de su ID
  function obtenerNombreEquipo(id) {
    const equipo = equipos.find((equipo) => equipo.id === Number(id));

    return equipo ? equipo.nombre : "Sin equipo";
  }

  return (
    <main className="fondo-pagina fondo-partidos">
      {/* Encabezado */}
      <section className="text-center mb-5">
        <img
          src="/img/partidos.png"
          alt="Gestión de partidos"
          className="img-fluid"
          style={{ maxWidth: "150px" }}
        />

        <h1 className="fw-bold text-warning mt-3">Gestión de Partidos</h1>

        <p className="lead text-white">
          Registrá y administrá los partidos del torneo.
        </p>
      </section>

      {/* Formulario */}
      <section className="mb-5">
        <div className="card shadow">
          <div className="card-body p-4">
            <h2 className="h4 fw-bold mb-4">
              {editandoId === null ? (
                <>
                  <i className="bi bi-calendar-plus me-2"></i>
                  Añadir partido
                </>
              ) : (
                <>
                  <i className="bi bi-pencil-fill me-2"></i>
                  Editar partido
                </>
              )}
            </h2>

            <div className="row g-3">
              {/* Fecha */}
              <div className="col-12 col-md-6">
                <label className="form-label">Fecha</label>

                <input
                  type="date"
                  className="form-control"
                  value={fecha}
                  onChange={(e) => setFecha(e.target.value)}
                />
              </div>

              {/* Hora */}
              <div className="col-12 col-md-6">
                <label className="form-label">Hora</label>

                <input
                  type="time"
                  className="form-control"
                  value={hora}
                  onChange={(e) => setHora(e.target.value)}
                />
              </div>

              {/* Cancha */}
              <div className="col-12">
                <label className="form-label">Cancha</label>

                <input
                  type="text"
                  className="form-control"
                  placeholder="Ingrese el nombre de la cancha"
                  value={cancha}
                  onChange={(e) => setCancha(e.target.value)}
                />
              </div>

              {/* Equipo local */}
              <div className="col-12 col-md-6">
                <label className="form-label">Equipo local</label>

                <select
                  className="form-select"
                  value={equipoLocal}
                  onChange={(e) => setEquipoLocal(e.target.value)}
                >
                  <option value="">Seleccione el equipo local</option>

                  {equipos.map((equipo) => (
                    <option key={equipo.id} value={equipo.id}>
                      {equipo.nombre}
                    </option>
                  ))}
                </select>
              </div>

              {/* Equipo visitante */}
              <div className="col-12 col-md-6">
                <label className="form-label">Equipo visitante</label>

                <select
                  className="form-select"
                  value={equipoVisitante}
                  onChange={(e) => setEquipoVisitante(e.target.value)}
                >
                  <option value="">Seleccione el equipo visitante</option>

                  {equipos.map((equipo) => (
                    <option key={equipo.id} value={equipo.id}>
                      {equipo.nombre}
                    </option>
                  ))}
                </select>
              </div>

              {/* Botones */}
              <div className="col-12">
                {editandoId === null ? (
                  <BotonAgregar
                    texto="Agregar partido"
                    onClick={agregarPartido}
                  />
                ) : (
                  <>
                    <button
                      className="btn btn-warning me-2"
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
            <h2 className="h4 fw-bold mb-4">📅 Partidos registrados</h2>

            <div className="table-responsive">
              <table className="table table-striped table-hover align-middle">
                <thead className="table-warning">
                  <tr>
                    <th>ID</th>
                    <th>Fecha</th>
                    <th>Hora</th>
                    <th>Cancha</th>
                    <th>Local</th>
                    <th>Visitante</th>
                    <th>Acciones</th>
                  </tr>
                </thead>

                <tbody>
                  {partidos.map((partido) => (
                    <tr key={partido.id}>
                      <td>{partido.id}</td>
                      <td>{partido.fecha.substring(0, 10)}</td>
                      <td>{partido.hora.substring(0, 5)}</td>
                      <td>{partido.cancha}</td>
                      <td>{obtenerNombreEquipo(partido.equipoLocalId)}</td>
                      <td>{obtenerNombreEquipo(partido.equipoVisitanteId)}</td>

                      <td>
                        <div className="d-flex align-items-center gap-2">
                          <BotonEditar onClick={() => editarPartido(partido)} />

                          <BotonEliminar
                            onClick={() => eliminarPartido(partido.id)}
                          />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <div className="text-center py-4">
        <Button as={Link} to="/" variant="light" className="shadow-sm fw-bold">
          <i className="bi bi-house-fill me-2"></i>
          Volver a Inicio
        </Button>
      </div>

      <ConfirmacionEliminar
        show={confirmacionEliminar.mostrar}
        titulo="¿Eliminar partido?"
        mensaje="¿Estás seguro de que querés eliminar este partido? Esta acción no se puede deshacer."
        onCancel={cancelarEliminar}
        onConfirm={confirmarEliminar}
      />
    </main>
  );
}

export default Partidos;
