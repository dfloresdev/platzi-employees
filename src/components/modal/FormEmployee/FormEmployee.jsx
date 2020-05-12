import React from "react";
import "./FormEmployee.scss";
import Modal from "../Modal/Modal";
import Icons from "../../../utils/icons/svgIcons";
import { connect } from "react-redux";
import { changeStatusModalAddEmployeeAction } from "../../../redux/employeesDuck";

const FormEmployee = ({ modalStatus, changeStatusModalAddEmployeeAction }) => {
  const closeModal = () => changeStatusModalAddEmployeeAction();

  // "url_img": "https://depor.com/resizer/l7uTaSj9lThlqHZfbW0c9Fy975A=/980x528/smart/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/HFVP57OUENFYDF2KPTKUCW4LQA.jpg",
  // "nombre": "Wolverine",
  // "apellido": "Weapon X",
  // "cargo": "fullstack",
  // "salario": "156000",
  // "jornada": "full-time",
  // "estado": "activo",
  // "categoria": "Militar 🤖"

  const addEmployee = (event) => {
    event.preventDefault();
    console.log(event);
  };

  return (
    <Modal openModal={modalStatus} actionModal={closeModal}>
      <div className="modal-form">
        <p className="modal-form--title">Agregar empleado</p>
        <form className="modal-form--group" onSubmit={addEmployee}>
          <div className="input-form adjust-input">
            <input type="text" placeholder="URL Imagen" />
          </div>
          <div className="input-form adjust-input">
            <input type="text" placeholder="Nombre" />
          </div>
          <div className="input-form adjust-input">
            <input type="text" placeholder="Apellidos" />
          </div>
          <div className="input-form adjust-input">
            <input type="text" placeholder="Cargo" />
          </div>
          <div className="input-form adjust-input">
            <input type="number" placeholder="Salario USD" />
          </div>
          <div className="input-form adjust-input">
            <input type="text" placeholder="Jornada" />
          </div>
          <div className="input-form adjust-input">
            <input type="text" placeholder="Estado" />
          </div>
          <div className="input-form adjust-input">
            <select>
              <option value="deportes ">Deportes 🥎</option>
              <option value="automoviles">Automóviles 🚘</option>
              <option value="contruccion">Contrucción 🏗</option>
              <option value="programacion">Programación 💻</option>
              <option value="animales">Animales 🐶</option>
            </select>
          </div>
          <div className="input-form adjust-input">
            <button>Agregar</button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    modalStatus: state.employees.modalAddEmployee,
  };
};

export default connect(mapStateToProps, { changeStatusModalAddEmployeeAction })(
  FormEmployee,
);
