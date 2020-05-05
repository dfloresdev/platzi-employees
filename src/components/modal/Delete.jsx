import React from "react";
import "../../assets/styles/components/modal/Delete.scss";
import Modal from "./Modal";
import Icons from "../../assets/styles/components/icons/svgIcons";

const Delete = (props) => {
  const { employee } = props;
  console.log(props);
  return (
    <Modal openModal={props.openModal} actionModal={props.actionModal}>
      <div className="modal-delete">
        <div className="modal-delete--title">
          <Icons name="delete" fill="#ff0000" width="50px" height="50px" />
          <p>¿Estas seguro de eliminar el siguiente empleado?</p>
        </div>

        <div className="modal-delete--body">
          <p>
            Nombre:{" "}
            <strong>
              {employee.nombre} {employee.apellido}
            </strong>
          </p>
          <p>
            Puesto: <strong>{employee.cargo}</strong>
          </p>
        </div>

        <div className="modal-delete--footer">
          <button className="btn btn-cancel" onClick={props.actionModal}>
            Cancelar
          </button>
          <button className="btn btn-delete">Borrar</button>
        </div>
      </div>
    </Modal>
  );
};

export default Delete;
