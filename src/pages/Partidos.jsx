import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import axios from "axios";
import Swal from "sweetalert2";
import BotonEditar from "../components/BotonEditar";
import BotonEliminar from "../components/BotonEliminar";
import BotonAgregar from "../components/BotonAgregar";
const API_URL = import.meta.env.VITE_PARTIDOS_API_URL;
function Partidos() {
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");
  const [cancha, setCancha] = useState("");
  const [equipoLocal, setEquipoLocal] = useState("");
  const [equipoVisitante, setEquipoVisitante] = useState("");
  const [equipos, setEquipos] = useState([]);

  const [partidos, setPartidos] = useState([]);
  const [editandoId, setEditandoId] = useState(null);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    async function cargarPartidos() {
      try {
        const respuesta = await axios.get(API_URL);
        setPartidos(respuesta.data);
      } catch (error) {
        console.error("Error al cargar los partidos:", error);

        Swal.fire({
          icon: "error",
          title: "Error",
          text: "No se pudieron cargar los partidos.",
        });
      } finally {
        setCargando(false);
      }
    }

    cargarPartidos();
  }, []);

  useEffect(() => {
    async function cargarEquipos() {
      try {
        const respuesta = await axios.get(import.meta.env.VITE_EQUIPOS_API_URL);

        setEquipos(respuesta.data);
      } catch (error) {
        console.error("Error al cargar los equipos:", error);

        Swal.fire({
          icon: "error",
          title: "Error",
          text: "No se pudieron cargar los equipos.",
        });
      }
    }

    cargarEquipos();
  }, []);
  // Agregar partido

  async function agregarPartido() {
    if (
      fecha === "" ||
      hora === "" ||
      cancha.trim() === "" ||
      equipoLocal === "" ||
      equipoVisitante === ""
    ) {
      Swal.fire({
        icon: "warning",
        title: "Campos incompletos",
        text: "Complete todos los campos.",
      });
      return;
    }

    if (equipoLocal === equipoVisitante) {
      Swal.fire({
        icon: "warning",
        title: "Equipos iguales",
        text: "El equipo local y visitante no pueden ser iguales.",
      });
      return;
    }

    const nuevoPartido = {
      fecha,
      hora,
      cancha,
      equipoLocal,
      equipoVisitante,
    };

    try {
      const respuesta = await axios.post(API_URL, nuevoPartido);

      setPartidos([...partidos, respuesta.data]);
      limpiarFormulario();

      Swal.fire({
        icon: "success",
        title: "Partido agregado",
        text: "El partido se guardó correctamente.",
      });
    } catch (error) {
      console.error("Error al agregar el partido:", error);

      Swal.fire({
        icon: "error",
        title: "Error",
        text: "No se pudo guardar el partido.",
      });
    }
  }

  // Preparar partido para editar
  function editarPartido(partido) {
    setFecha(partido.fecha);
    setHora(partido.hora);
    setCancha(partido.cancha);
    setEquipoLocal(partido.equipoLocal);
    setEquipoVisitante(partido.equipoVisitante);

    setEditandoId(partido.id);
  }

  // Guardar cambios

  async function guardarCambios() {
    if (
      fecha === "" ||
      hora === "" ||
      cancha.trim() === "" ||
      equipoLocal === "" ||
      equipoVisitante === ""
    ) {
      Swal.fire({
        icon: "warning",
        title: "Campos incompletos",
        text: "Complete todos los campos.",
      });
      return;
    }

    if (equipoLocal === equipoVisitante) {
      Swal.fire({
        icon: "warning",
        title: "Equipos iguales",
        text: "El equipo local y visitante no pueden ser iguales.",
      });
      return;
    }

    const partidoActualizado = {
      fecha,
      hora,
      cancha,
      equipoLocal,
      equipoVisitante,
    };

    try {
      const respuesta = await axios.put(
        `${API_URL}/${editandoId}`,
        partidoActualizado,
      );

      setPartidos(
        partidos.map((partido) =>
          String(partido.id) === String(editandoId) ? respuesta.data : partido,
        ),
      );

      limpiarFormulario();
      setEditandoId(null);

      Swal.fire({
        icon: "success",
        title: "Partido actualizado",
        text: "Los cambios se guardaron correctamente.",
      });
    } catch (error) {
      console.error("Error al editar el partido:", error);

      Swal.fire({
        icon: "error",
        title: "Error",
        text: "No se pudo actualizar el partido.",
      });
    }
  }

  // Cancelar edición
  function cancelarEdicion() {
    limpiarFormulario();
    setEditandoId(null);
  }

  // Eliminar partido

  async function eliminarPartido(id) {
    const resultado = await Swal.fire({
      title: "¿Estás seguro?",
      text: "Esta acción no se puede deshacer.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
      confirmButtonColor: "#198754",
      cancelButtonColor: "#6c757d",
    });

    if (!resultado.isConfirmed) return;

    try {
      await axios.delete(`${API_URL}/${id}`);

      setPartidos(
        partidos.filter((partido) => String(partido.id) !== String(id)),
      );

      Swal.fire({
        icon: "success",
        title: "Partido eliminado",
        text: "El partido se eliminó correctamente.",
      });
    } catch (error) {
      console.error("Error al eliminar el partido:", error);

      Swal.fire({
        icon: "error",
        title: "Error",
        text: "No se pudo eliminar el partido.",
      });
    }
  }

  // Limpiar formulario
  function limpiarFormulario() {
    setFecha("");
    setHora("");
    setCancha("");
    setEquipoLocal("");
    setEquipoVisitante("");
  }

  if (cargando) {
    return <p className="text-center mt-4">Cargando partidos...</p>;
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

                  {equipos.map((equipo, indice) => (
                    <option key={equipo.id} value={equipo.nombre}>
                      {indice + 1} - {equipo.nombre}
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

                  {equipos.map((equipo, indice) => (
                    <option key={equipo.id} value={equipo.nombre}>
                      {indice + 1} - {equipo.nombre}
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
                  {partidos.map((partido, indice) => (
                    <tr key={partido.id}>
                      <td>{indice + 1}</td>
                      <td>{partido.fecha}</td>
                      <td>{partido.hora}</td>
                      <td>{partido.cancha}</td>
                      <td>{partido.equipoLocal}</td>
                      <td>{partido.equipoVisitante}</td>

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
    </main>
  );
}

export default Partidos;
