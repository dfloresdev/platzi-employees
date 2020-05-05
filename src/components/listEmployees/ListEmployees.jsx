import React from "react";
import "../../assets/styles/components/listEmployees/ListEmployees.scss";
import Icons from "../../assets/styles/components/icons/svgIcons";
import useGetEmployees from "../../hooks/useGetEmployees";

const endpoint = "employees";

const ListEmployees = () => {
  const employees = useGetEmployees(endpoint);

  const listEmployees = employees.map((employee) => {
    return (
      <div key={employee._id} className="card-employee">
        <div>
          <div className="container-list-employees--checkbox">
            <input type="checkbox" className="box"></input>
          </div>
        </div>
        <div>
          <img src="" alt="" />
          <p>
            {employee.nombre} {employee.apellido}
          </p>
          <p>{employee.cargo}</p>
        </div>
        <div>
          <p>{employee.salario} USD</p>
          <p>{employee.jornada}</p>
        </div>
        <div>
          <p>{employee.estado}</p>
        </div>
        <div>
          <Icons name="edit" className="actions" />
          <Icons name="delete" className="actions" />
        </div>
      </div>
    );
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
