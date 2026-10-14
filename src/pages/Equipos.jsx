import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import axios from "axios";
import BotonEliminar from "../components/BotonEliminar";
import BotonEditar from "../components/BotonEditar";
import BotonAgregar from "../components/BotonAgregar";
import Swal from "sweetalert2";

const API_URL = import.meta.env.VITE_EQUIPOS_API_URL;

function Equipos() {
  const [nombre, setNombre] = useState("");
  const [color, setColor] = useState("#008000");
  const [equipos, setEquipos] = useState([]);
  const [jugadores, setJugadores] = useState([]);
  const [editandoId, setEditandoId] = useState(null);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    async function cargarEquipos() {
      try {
        setCargando(true);

        const respuesta = await axios.get(API_URL);
        setEquipos(respuesta.data);
      } catch (error) {
        console.error("Error al cargar los equipos:", error);
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "No se pudieron cargar los equipos.",
        });
      } finally {
        setCargando(false);
      }
    }

    cargarEquipos();
  }, []);
  useEffect(() => {
    async function cargarJugadores() {
      try {
        const respuesta = await axios.get(
          import.meta.env.VITE_JUGADORES_API_URL,
        );

        setJugadores(respuesta.data);
      } catch (error) {
        console.error("Error al cargar los jugadores:", error);
      }
    }

    cargarJugadores();
  }, []);

  // Agregar un equipo

  async function agregarEquipo() {
    if (nombre.trim() === "") {
      Swal.fire({
        icon: "warning",
        title: "Campo obligatorio",
        text: "Ingrese el nombre del equipo.",
      });
      return;
    }
    const nombreDuplicado = equipos.some(
      (equipo) =>
        equipo.nombre.trim().toLowerCase() === nombre.trim().toLowerCase(),
    );

    if (nombreDuplicado) {
      Swal.fire({
        icon: "warning",
        title: "Equipo existente",
        text: "Ya existe un equipo con ese nombre.",
        confirmButtonColor: "#198754",
      });

      return;
    }
    const nuevoEquipo = {
      nombre: nombre.trim(),
      color: color,
    };

    try {
      const respuesta = await axios.post(API_URL, nuevoEquipo);

      setEquipos([...equipos, respuesta.data]);
      setNombre("");
      setColor("#008000");

      Swal.fire({
        icon: "success",
        title: "Equipo agregado",
        text: "El equipo se guardó correctamente.",
        confirmButtonColor: "#198754",
      });
    } catch (error) {
      console.error("Error al agregar el equipo:", error);

      Swal.fire({
        icon: "error",
        title: "Error",
        text: "No se pudo agregar el equipo.",
      });
    }
  }

  // Preparar un equipo para editar
  function editarEquipo(equipo) {
    setNombre(equipo.nombre);
    setColor(equipo.color);
    setEditandoId(equipo.id);
  }

  // Guardar los cambios del equipo

  async function guardarCambios() {
    if (nombre.trim() === "") {
      Swal.fire({
        icon: "warning",
        title: "Campo obligatorio",
        text: "Ingrese el nombre del equipo.",
      });
      return;
    }

    const equipoAnterior = equipos.find(
      (equipo) => String(equipo.id) === String(editandoId),
    );

    if (!equipoAnterior) return;

    const nombreAnterior = equipoAnterior.nombre;
    const nombreNuevo = nombre.trim();
    const nombreDuplicado = equipos.some(
      (equipo) =>
        String(equipo.id) !== String(editandoId) &&
        equipo.nombre.trim().toLowerCase() === nombreNuevo.toLowerCase(),
    );

    if (nombreDuplicado) {
      Swal.fire({
        icon: "warning",
        title: "Equipo existente",
        text: "Ya existe otro equipo con ese nombre.",
        confirmButtonColor: "#198754",
      });

      return;
    }

    const equipoActualizado = {
      nombre: nombreNuevo,
      color: color,
    };

    try {
      // Actualizar jugadores y partidos solo si cambió el nombre
      if (nombreAnterior !== nombreNuevo) {
        const [respuestaJugadores, respuestaPartidos] = await Promise.all([
          axios.get(import.meta.env.VITE_JUGADORES_API_URL),
          axios.get(import.meta.env.VITE_PARTIDOS_API_URL),
        ]);

        const jugadoresEquipo = respuestaJugadores.data.filter(
          (jugador) => jugador.equipo === nombreAnterior,
        );

        const partidosEquipo = respuestaPartidos.data.filter(
          (partido) =>
            partido.equipoLocal === nombreAnterior ||
            partido.equipoVisitante === nombreAnterior,
        );

        // Actualizar los jugadores relacionados
        await Promise.all(
          jugadoresEquipo.map((jugador) =>
            axios.patch(
              `${import.meta.env.VITE_JUGADORES_API_URL}/${jugador.id}`,
              { equipo: nombreNuevo },
            ),
          ),
        );

        // Actualizar los partidos relacionados
        await Promise.all(
          partidosEquipo.map((partido) =>
            axios.patch(
              `${import.meta.env.VITE_PARTIDOS_API_URL}/${partido.id}`,
              {
                ...(partido.equipoLocal === nombreAnterior && {
                  equipoLocal: nombreNuevo,
                }),
                ...(partido.equipoVisitante === nombreAnterior && {
                  equipoVisitante: nombreNuevo,
                }),
              },
            ),
          ),
        );
      }

      // Guardar el equipo
      const respuesta = await axios.put(
        `${API_URL}/${editandoId}`,
        equipoActualizado,
      );

      setEquipos((anteriores) =>
        anteriores.map((equipo) =>
          String(equipo.id) === String(editandoId) ? respuesta.data : equipo,
        ),
      );

      setNombre("");
      setColor("#008000");
      setEditandoId(null);

      Swal.fire({
        icon: "success",
        title: "Equipo actualizado",
        text:
          nombreAnterior !== nombreNuevo
            ? "Se actualizó el equipo y sus jugadores y partidos relacionados."
            : "Los cambios se guardaron correctamente.",
        confirmButtonColor: "#198754",
      });
    } catch (error) {
      console.error("Error al actualizar el equipo y sus relaciones:", error);

      Swal.fire({
        icon: "error",
        title: "Error",
        text: "No se pudo completar la actualización. Revisá los datos en JSON Server antes de volver a intentarlo.",
      });
    }
  }

  // Cancelar la edición
  function cancelarEdicion() {
    setNombre("");
    setColor("#008000");
    setEditandoId(null);
  }

  // Eliminar un equipo

  async function eliminarEquipo(id) {
    const equipo = equipos.find((equipo) => String(equipo.id) === String(id));

    if (!equipo) return;

    const resultado = await Swal.fire({
      title: "¿Eliminar equipo?",
      text: `Se eliminará "${equipo.nombre}", sus jugadores y sus partidos. Esta acción no se puede deshacer.`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#dc3545",
      cancelButtonColor: "#6c757d",
      confirmButtonText: "Sí, eliminar todo",
      cancelButtonText: "Cancelar",
    });

    if (!resultado.isConfirmed) return;

    try {
      // 1. Obtener jugadores y partidos
      const [respuestaJugadores, respuestaPartidos] = await Promise.all([
        axios.get(import.meta.env.VITE_JUGADORES_API_URL),
        axios.get(import.meta.env.VITE_PARTIDOS_API_URL),
      ]);

      // 2. Buscar los jugadores de este equipo
      const jugadoresEquipo = respuestaJugadores.data.filter(
        (jugador) => jugador.equipo === equipo.nombre,
      );

      // 3. Buscar los partidos donde participa el equipo
      const partidosEquipo = respuestaPartidos.data.filter(
        (partido) =>
          partido.equipoLocal === equipo.nombre ||
          partido.equipoVisitante === equipo.nombre,
      );

      // 4. Eliminar primero los jugadores y los partidos
      await Promise.all([
        ...jugadoresEquipo.map((jugador) =>
          axios.delete(
            `${import.meta.env.VITE_JUGADORES_API_URL}/${jugador.id}`,
          ),
        ),
        ...partidosEquipo.map((partido) =>
          axios.delete(
            `${import.meta.env.VITE_PARTIDOS_API_URL}/${partido.id}`,
          ),
        ),
      ]);

      // 5. Eliminar el equipo al final
      await axios.delete(`${API_URL}/${id}`);

      // 6. Actualizar la pantalla
      setEquipos((anteriores) =>
        anteriores.filter((item) => String(item.id) !== String(id)),
      );

      setJugadores((anteriores) =>
        anteriores.filter((jugador) => jugador.equipo !== equipo.nombre),
      );

      await Swal.fire({
        icon: "success",
        title: "Equipo eliminado",
        text: `Se eliminaron el equipo, ${jugadoresEquipo.length} jugador(es) y ${partidosEquipo.length} partido(s).`,
        confirmButtonColor: "#198754",
      });
    } catch (error) {
      console.error("Error en la eliminación en cascada:", error);

      Swal.fire({
        icon: "error",
        title: "Error al eliminar",
        text: "No se pudo completar la eliminación. Revisá la consola y los datos de la API.",
      });
    }
  }

  if (cargando) {
    return <p className="text-center mt-4">Cargando equipos...</p>;
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
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Color</th>
                    <th>Jugadores</th>
                    <th>Acciones</th>
                  </tr>
                </thead>

                <tbody>
                  {equipos.length === 0 ? (
                    <tr>
                      <td colSpan="5" className="text-center text-muted">
                        No hay equipos registrados.
                      </td>
                    </tr>
                  ) : (
                    equipos.map((equipo, indice) => (
                      <tr key={equipo.id}>
                        <td>{indice + 1}</td>
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
                          {
                            jugadores.filter(
                              (jugador) => jugador.equipo === equipo.nombre,
                            ).length
                          }
                        </td>
                        <td>
                          <div className="d-flex align-items-center gap-2">
                            <Button
                              variant="success"
                              size="sm"
                              onClick={() => {
                                const jugadoresEquipo = jugadores.filter(
                                  (jugador) => jugador.equipo === equipo.nombre,
                                );

                                const contenido = document.createElement("div");

                                if (jugadoresEquipo.length === 0) {
                                  contenido.textContent =
                                    "Este equipo todavía no tiene jugadores.";
                                } else {
                                  jugadoresEquipo.forEach((jugador) => {
                                    const tarjeta =
                                      document.createElement("div");
                                    tarjeta.className =
                                      "mb-3 pb-2 border-bottom";

                                    const nombre =
                                      document.createElement("strong");
                                    nombre.textContent = jugador.nombre;

                                    const camiseta =
                                      document.createElement("p");
                                    camiseta.className = "mb-1";
                                    camiseta.textContent = `Camiseta: ${jugador.numero || "-"}`;

                                    const posicion =
                                      document.createElement("p");
                                    posicion.className = "mb-0";
                                    posicion.textContent = `Posición: ${jugador.posicion || "-"}`;

                                    tarjeta.append(nombre, camiseta, posicion);
                                    contenido.appendChild(tarjeta);
                                  });
                                }

                                Swal.fire({
                                  titleText: `Jugadores de ${equipo.nombre}`,
                                  html: contenido,
                                  confirmButtonColor: "#198754",
                                  confirmButtonText: "Cerrar",
                                });
                              }}
                            >
                              Ver jugadores
                            </Button>

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

      <div className="text-center py-4">
        <Button as={Link} to="/" variant="light" className="shadow-sm fw-bold">
          <i className="bi bi-house-fill me-2"></i>
          Volver a Inicio
        </Button>
      </div>
    </main>
  );
}

export default Equipos;
