import React from "react";
import "./Success.scss";
import Modal from "../Modal/Modal";
import Icons from "../../../utils/icons/svgIcons";
import { connect } from "react-redux";
import { changeStatusModalSuccessAction } from "../../../redux/employeesDuck";

const Success = ({ changeStatusModalSuccessAction, modalEmployeeDeleted }) => {
  const actionModal = () => {
    changeStatusModalSuccessAction();
  };

  return (
    <Modal openModal={modalEmployeeDeleted} actionModal={actionModal}>
      <div className="modal-success">
        <div className="modal-success--title">
          <Icons name="success" fill="#cd7cf2" width="50px" height="50px" />
          <p>Usuario eliminado con éxito</p>
        </div>

        <div className="modal-success--footer">
          <button className="btn btn-cancel" onClick={actionModal}>
            Aceptar
          </button>
        </div>
      </div>
    </Modal>
  );
};

const mapStateToProps = (state) => {
  return {
    modalEmployeeDeleted: state.employees.deleted,
  };
};

export default connect(mapStateToProps, { changeStatusModalSuccessAction })(
  Success,
);
