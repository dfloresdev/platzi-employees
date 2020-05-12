import React from "react";
import "./SubHeader.scss";
import FormEmployee from "../modal/FormEmployee/FormEmployee";
import { connect } from "react-redux";
import { changeStatusModalAddEmployeeAction } from "../../redux/employeesDuck";

const SubHeader = ({ changeStatusModalAddEmployeeAction }) => {
  const actionModal = () => {
    changeStatusModalAddEmployeeAction();
  };

  return (
    <div className="container-sub-header">
      <p>Lista de empleados</p>
      <button onClick={actionModal}>Agregar</button>
      <FormEmployee />
    </div>
  );
};

export default connect(null, { changeStatusModalAddEmployeeAction })(SubHeader);
