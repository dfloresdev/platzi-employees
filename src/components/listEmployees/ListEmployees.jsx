import React from "react";
import "../../assets/styles/components/listEmployees/ListEmployees.scss";
import useGetEmployees from "../../hooks/useGetEmployees";

const endpoint = "employee";

const ListEmployees = () => {
  const employees = useGetEmployees(endpoint);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Empleado</th>
            <th>Salario</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => {
            return (
              <tr>
                <td>
                  <img src={employee.url_img} height="50px" />
                </td>
                <td>
                  {employee.nombre} {employee.apellido}
                </td>
                <td>{employee.salario}</td>
                <td>{employee.estado}</td>
                <td></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ListEmployees;
