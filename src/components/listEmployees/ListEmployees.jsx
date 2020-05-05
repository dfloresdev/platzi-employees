import React from "react";
import "../../assets/styles/components/listEmployees/ListEmployees.scss";
import useGetEmployees from "../../hooks/useGetEmployees";
import CardEmployee from "../../components/cardEmployee/CardEmployee";

const endpoint = "employees";

const ListEmployees = () => {
  const employees = useGetEmployees(endpoint);

  const listEmployees = employees.map((employee) => {
    return <CardEmployee employee={employee} />;
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

export default ListEmployees;
