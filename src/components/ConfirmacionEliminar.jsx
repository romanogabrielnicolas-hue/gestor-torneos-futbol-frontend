
import { Modal, Button } from "react-bootstrap";
import "./ConfirmacionEliminar.css";

function ConfirmacionEliminar({
  show,
  titulo = "¿Eliminar elemento?",
  mensaje = "Esta acción no se puede deshacer.",
  onCancel,
  onConfirm,
}) {
  return (
    <Modal
      show={show}
      onHide={onCancel}
      centered
      backdrop="static"
      keyboard={true}
      animation={false}
      contentClassName="confirmacion-neon"
    >
      <Modal.Body className="confirmacion-neon-body">
        <div className="confirmacion-icono">
          <i className="bi bi-trash3-fill"></i>
        </div>

        <div className="confirmacion-etiqueta">
          CONFIRMACIÓN DEL SISTEMA
        </div>

        <h2 className="confirmacion-titulo">{titulo}</h2>

        <p className="confirmacion-mensaje">{mensaje}</p>

        <div className="confirmacion-linea"></div>

        <div className="confirmacion-acciones">
          <Button
            variant="secondary"
            className="btn-neon-cancelar"
            onClick={onCancel}
          >
            Cancelar
          </Button>

          <Button
            variant="danger"
            className="btn-neon-eliminar"
            onClick={onConfirm}
          >
            <i className="bi bi-trash3 me-2"></i>
            Sí, eliminar
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default ConfirmacionEliminar;
