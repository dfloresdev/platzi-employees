import React from "react";
import "./ListEmployees.scss";
import CardEmployee from "../../components/cardEmployee/CardEmployee";
import { connect } from "react-redux";

const ListEmployees = ({ employees }) => {
  const deleteEmployee = (uid) => {
    console.log("eliminando desde raiz", uid);
  };

  const listEmployees = employees.map((employee) => {
    return <CardEmployee employee={employee} deleteEmployee={deleteEmployee} />;
  });

  return (
    <>
      <div className="container-list-employees">
        <div className="container-list-employees--checkbox">
          <input type="checkbox" className="box"></input>
        </div>
        <p className="container-list-employees--title employee">Empleado</p>
        <p className="container-list-employees--title">Salario</p>
        <p className="container-list-employees--title">Estado</p>
        <p className="container-list-employees--title">Acciones</p>
      </div>
      <div>{listEmployees}</div>
    </>
  );
};

const mapStateToProps = (state) => {
  console.log("state----", state);
  return {
    employees: state.employees.data,
  };
};

export default connect(mapStateToProps)(ListEmployees);
