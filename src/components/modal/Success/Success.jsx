import React from "react";
import "./Delete.scss";
import Modal from "../Modal/Modal";
import Icons from "../../../utils/icons/svgIcons";
import { connect } from "react-redux";
import { deleteEmployeesAction } from "../../../redux/employeesDuck";

const Success = ({
  employee,
  deleteEmployeesAction,
  openModal,
  actionModal,
}) => {
  function deleteEmployee(uid) {
    console.log("VOy a borrar ñaca ñaca", uid);
    deleteEmployeesAction(uid).then(() => {});
  }

  return (
    <Modal openModal={openModal} actionModal={actionModal}>
      <div className="modal-delete">
        <div className="modal-delete--title">
          <Icons name="delete" fill="#ff0000" width="50px" height="50px" />
          <p>¿Estas seguro de eliminar el siguiente empleado?</p>
        </div>

        <div className="modal-delete--body">
          <p>
            Nombre:
            <strong>
              {employee.nombre} {employee.apellido}
            </strong>
          </p>
          <p>
            Puesto: <strong>{employee.cargo}</strong>
          </p>
        </div>

        <div className="modal-delete--footer">
          <button className="btn btn-cancel" onClick={actionModal}>
            Cancelar
          </button>
          <button
            className="btn btn-delete"
            onClick={deleteEmployee.bind(this, employee._id)}
          >
            Borrar
          </button>
        </div>
      </div>
    </Modal>
  );
};

const mapStateToProps = (stores) {
  return {
    
  }
}

export default connect(mapStateToProps)(Success);
