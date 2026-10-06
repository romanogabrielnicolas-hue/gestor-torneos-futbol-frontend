import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import BotonEditar from "../components/BotonEditar";
import BotonEliminar from "../components/BotonEliminar";
import BotonAgregar from "../components/BotonAgregar";

function Jugadores() {
  const [nombre, setNombre] = useState("");
  const [dni, setDni] = useState("");
  const [edad, setEdad] = useState("");
  const [posicion, setPosicion] = useState("");
  const [equipo, setEquipo] = useState("");
  const [numero, setNumero] = useState("");

  const [jugadores, setJugadores] = useState([]);
  const [contadorId, setContadorId] = useState(1);
  const [editandoId, setEditandoId] = useState(null);

  useEffect(() => {
    console.log("La lista de jugadores cambió", jugadores);
  }, [jugadores]);
  // Agregar jugador
  function agregarJugador() {
    if (
      nombre.trim() === "" ||
      dni.trim() === "" ||
      edad === "" ||
      posicion === "" ||
      equipo === "" ||
      numero === ""
    ) {
      alert("Complete todos los campos");
      return;
    }

    const nuevoJugador = {
      id: contadorId,
      nombre: nombre,
      dni: dni,
      edad: edad,
      posicion: posicion,
      equipo: equipo,
      numero: numero,
    };

    setJugadores([...jugadores, nuevoJugador]);
    setContadorId(contadorId + 1);

    limpiarFormulario();
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
  function guardarCambios() {
    if (
      nombre.trim() === "" ||
      dni.trim() === "" ||
      edad === "" ||
      posicion === "" ||
      equipo === "" ||
      numero === ""
    ) {
      alert("Complete todos los campos");
      return;
    }

    const jugadoresActualizados = jugadores.map((jugador) => {
      if (jugador.id === editandoId) {
        return {
          id: jugador.id,
          nombre: nombre,
          dni: dni,
          edad: edad,
          posicion: posicion,
          equipo: equipo,
          numero: numero,
        };
      }

      return jugador;
    });

    setJugadores(jugadoresActualizados);

    limpiarFormulario();
    setEditandoId(null);
  }

  // Cancelar edición
  function cancelarEdicion() {
    limpiarFormulario();
    setEditandoId(null);
  }

  // Eliminar jugador
  function eliminarJugador(id) {
    setJugadores(jugadores.filter((jugador) => jugador.id !== id));
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

                  <option value="Equipo A">Equipo A</option>

                  <option value="Equipo B">Equipo B</option>
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
                  {jugadores.map((jugador) => (
                    <tr key={jugador.id}>
                      <td>{jugador.id}</td>
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
