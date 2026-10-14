import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import axios from "axios";
import Swal from "sweetalert2";
import BotonEditar from "../components/BotonEditar";
import BotonEliminar from "../components/BotonEliminar";
import BotonAgregar from "../components/BotonAgregar";

const API_URL = import.meta.env.VITE_JUGADORES_API_URL;
function Jugadores() {
  const [nombre, setNombre] = useState("");
  const [dni, setDni] = useState("");
  const [edad, setEdad] = useState("");
  const [posicion, setPosicion] = useState("");
  const [equipo, setEquipo] = useState("");
  const [numero, setNumero] = useState("");

  const [jugadores, setJugadores] = useState([]);
  const [equipos, setEquipos] = useState([]);
  const [editandoId, setEditandoId] = useState(null);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    async function cargarJugadores() {
      try {
        const respuesta = await axios.get(API_URL);
        setJugadores(respuesta.data);
      } catch (error) {
        console.error("Error al cargar los jugadores:", error);

        Swal.fire({
          icon: "error",
          title: "Error",
          text: "No se pudieron cargar los jugadores.",
        });
      } finally {
        setCargando(false);
      }
    }

    cargarJugadores();
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
  // Agregar jugador

  async function agregarJugador() {
    if (
      nombre.trim() === "" ||
      dni.trim() === "" ||
      edad === "" ||
      posicion === "" ||
      equipo === "" ||
      numero === ""
    ) {
      Swal.fire({
        icon: "warning",
        title: "Campos incompletos",
        text: "Complete todos los campos.",
      });
      return;
    }

    const nuevoJugador = {
      nombre,
      dni,
      edad,
      posicion,
      equipo,
      numero,
    };

    try {
      const respuesta = await axios.post(API_URL, nuevoJugador);

      setJugadores([...jugadores, respuesta.data]);
      limpiarFormulario();

      Swal.fire({
        icon: "success",
        title: "Jugador agregado",
        text: "El jugador se guardó correctamente.",
      });
    } catch (error) {
      console.error("Error al agregar el jugador:", error);

      Swal.fire({
        icon: "error",
        title: "Error",
        text: "No se pudo guardar el jugador.",
      });
    }
  }

  // Preparar jugador para editar
  function editarJugador(jugador) {
    setNombre(jugador.nombre);
    setDni(jugador.dni);
    setEdad(jugador.edad);
    setPosicion(jugador.posicion);
    setEquipo(jugador.equipo);
    setNumero(jugador.numero);

    setEditandoId(jugador.id);
  }

  // Guardar cambios

  async function guardarCambios() {
    if (
      nombre.trim() === "" ||
      dni.trim() === "" ||
      edad === "" ||
      posicion === "" ||
      equipo === "" ||
      numero === ""
    ) {
      Swal.fire({
        icon: "warning",
        title: "Campos incompletos",
        text: "Complete todos los campos.",
      });
      return;
    }

    const jugadorActualizado = {
      nombre,
      dni,
      edad,
      posicion,
      equipo,
      numero,
    };

    try {
      const respuesta = await axios.put(
        `${API_URL}/${editandoId}`,
        jugadorActualizado,
      );

      setJugadores(
        jugadores.map((jugador) =>
          String(jugador.id) === String(editandoId) ? respuesta.data : jugador,
        ),
      );

      limpiarFormulario();
      setEditandoId(null);

      Swal.fire({
        icon: "success",
        title: "Jugador actualizado",
        text: "Los cambios se guardaron correctamente.",
      });
    } catch (error) {
      console.error("Error al editar el jugador:", error);

      Swal.fire({
        icon: "error",
        title: "Error",
        text: "No se pudo actualizar el jugador.",
      });
    }
  }

  // Cancelar edición
  function cancelarEdicion() {
    limpiarFormulario();
    setEditandoId(null);
  }

  // Eliminar jugador

  async function eliminarJugador(id) {
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

      setJugadores(
        jugadores.filter((jugador) => String(jugador.id) !== String(id)),
      );

      Swal.fire({
        icon: "success",
        title: "Jugador eliminado",
        text: "El jugador se eliminó correctamente.",
      });
    } catch (error) {
      console.error("Error al eliminar el jugador:", error);

      Swal.fire({
        icon: "error",
        title: "Error",
        text: "No se pudo eliminar el jugador.",
      });
    }
  }

  // Limpiar formulario
  function limpiarFormulario() {
    setNombre("");
    setDni("");
    setEdad("");
    setPosicion("");
    setEquipo("");
    setNumero("");
  }
  if (cargando) {
    return <p className="text-center mt-4">Cargando jugadores...</p>;
  }

  return (
    <main className="fondo-pagina fondo-jugadores">
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
            <h2 className="h4 fw-bold mb-4">
              {editandoId === null ? (
                <>
                  <i className="bi bi-person-plus-fill me-2"></i>
                  Añadir jugador
                </>
              ) : (
                <>
                  <i className="bi bi-pencil-fill me-2"></i>
                  Editar jugador
                </>
              )}
            </h2>

            <div className="row g-3">
              {/* Nombre */}
              <div className="col-12 col-md-8">
                <label className="form-label">Nombre y apellido</label>

                <input
                  type="text"
                  className="form-control"
                  placeholder="Ingrese nombre y apellido"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                />
              </div>

              {/* DNI */}
              <div className="col-12 col-md-4">
                <label className="form-label">DNI</label>

                <input
                  type="number"
                  className="form-control"
                  placeholder="Ingrese el DNI"
                  value={dni}
                  onChange={(e) => setDni(e.target.value)}
                />
              </div>

              {/* Edad */}
              <div className="col-12 col-md-4">
                <label className="form-label">Edad</label>

                <input
                  type="number"
                  className="form-control"
                  placeholder="Ingrese la edad"
                  value={edad}
                  onChange={(e) => setEdad(e.target.value)}
                />
              </div>

              {/* Posición */}
              <div className="col-12 col-md-4">
                <label className="form-label">Posición</label>

                <select
                  className="form-select"
                  value={posicion}
                  onChange={(e) => setPosicion(e.target.value)}
                >
                  <option value="">Seleccione una posición</option>

                  <option value="Arquero">Arquero</option>

                  <option value="Defensor">Defensor</option>

                  <option value="Mediocampista">Mediocampista</option>

                  <option value="Delantero">Delantero</option>
                </select>
              </div>

              {/* Equipo */}
              <div className="col-12 col-md-4">
                <label className="form-label">Equipo</label>

                <select
                  className="form-select"
                  value={equipo}
                  onChange={(e) => setEquipo(e.target.value)}
                >
                  <option value="">Seleccione un equipo</option>

                  {equipos.map((equipoItem) => (
                    <option key={equipoItem.id} value={equipoItem.nombre}>
                      {equipoItem.nombre}
                    </option>
                  ))}
                </select>
              </div>

              {/* Número */}
              <div className="col-12 col-md-4">
                <label className="form-label">Número de camiseta</label>

                <input
                  type="number"
                  className="form-control"
                  placeholder="Ingrese el número"
                  value={numero}
                  onChange={(e) => setNumero(e.target.value)}
                />
              </div>

              {/* Botones */}
              <div className="col-12">
                {editandoId === null ? (
                  <BotonAgregar
                    texto="Agregar jugador"
                    onClick={agregarJugador}
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
            <h2 className="h4 fw-bold mb-4">👤 Jugadores registrados</h2>

            <div className="table-responsive">
              <table className="table table-striped table-hover align-middle">
                <thead className="table-primary">
                  <tr>
                    <th>ID</th>
                    <th>Jugador</th>
                    <th>DNI</th>
                    <th>Edad</th>
                    <th>Posición</th>
                    <th>Equipo</th>
                    <th>N.º</th>
                    <th>Acciones</th>
                  </tr>
                </thead>

                <tbody>
                  {jugadores.map((jugador, indice) => (
                    <tr key={jugador.id}>
                      <td>{indice + 1}</td>
                      <td>{jugador.nombre}</td>
                      <td>{jugador.dni}</td>
                      <td>{jugador.edad}</td>
                      <td>{jugador.posicion}</td>
                      <td>{jugador.equipo}</td>
                      <td>{jugador.numero}</td>

                      <td>
                        <div className="d-flex align-items-center gap-2">
                          <BotonEditar onClick={() => editarJugador(jugador)} />

                          <BotonEliminar
                            onClick={() => eliminarJugador(jugador.id)}
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

export default Jugadores;
