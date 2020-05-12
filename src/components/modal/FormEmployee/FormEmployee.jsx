import React from "react";
import "./FormEmployee.scss";
import Modal from "../Modal/Modal";
import Icons from "../../../utils/icons/svgIcons";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import {
  changeStatusModalAddEmployeeAction,
  addEmployeeAction,
} from "../../../redux/employeesDuck";

const FormEmployee = ({
  modalStatus,
  changeStatusModalAddEmployeeAction,
  addEmployeeAction,
}) => {
  const closeModal = () => changeStatusModalAddEmployeeAction();

  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => {
    // console.log("final --->", data);
    addEmployeeAction(data);
  };

  console.log("watch url", errors);

  return (
    <Modal openModal={modalStatus} actionModal={closeModal}>
      <div className="modal-form">
        <p className="modal-form--title">Agregar empleado</p>
        <form className="modal-form--group" onSubmit={handleSubmit(onSubmit)}>
          <div className="input-form adjust-input">
            <input
              type="text"
              name="url_img"
              placeholder="URL Imagen"
              ref={register({ required: true, minLength: 10 })}
            />
            {errors.urlImg && <span className="error">Ingresa una URL</span>}
          </div>
          <div className="input-form adjust-input">
            <input
              name="nombre"
              ref={register({ required: true, minLength: 4, maxLength: 20 })}
              type="text"
              placeholder="Nombre"
            />
            {errors.nombre && <span className="error">Ingresa un nombre</span>}
          </div>
          <div className="input-form adjust-input">
            <input
              name="apellido"
              ref={register({ required: true, minLength: 4, maxLength: 20 })}
              type="text"
              placeholder="Apellidos"
            />
            {errors.apellido && (
              <span className="error">Ingresa un apellido</span>
            )}
          </div>
          <div className="input-form adjust-input">
            <input
              name="cargo"
              ref={register({ required: true, minLength: 3, maxLength: 20 })}
              type="text"
              placeholder="Cargo"
            />
            {errors.cargo && <span className="error">Ingresa un cargo</span>}
          </div>
          <div className="input-form adjust-input">
            <input
              name="salario"
              ref={register({ required: true, minLength: 3, maxLength: 7 })}
              type="number"
              placeholder="Salario USD"
            />
            {errors.salario && (
              <span className="error">Ingresa un salario</span>
            )}
          </div>
          <div className="input-form adjust-input">
            <input
              name="jornada"
              ref={register({ required: true, minLength: 4, maxLength: 20 })}
              type="text"
              placeholder="Jornada"
            />
            {errors.jornada && (
              <span className="error">Ingresa una jornada</span>
            )}
          </div>
          <div className="input-form adjust-input">
            <select
              name="estado"
              ref={register({ required: true })}
              defaultValue="Activo"
            >
              <option value="default" disabled>
                Selecciona un status
              </option>
              <option value="Activo">Activo</option>
              <option value="Inactivo">Inactivo</option>
            </select>
          </div>
          <div className="input-form adjust-input">
            <select
              name="categoria"
              ref={register({ required: true })}
              defaultValue="Contruccion 🏗"
            >
              <option value="default" disabled>
                Selecciona una categoría
              </option>
              <option value="Deportes 🥎">Deportes 🥎</option>
              <option value="Automoviles 🚘">Automóviles 🚘</option>
              <option value="Construccion 🏗">Construcción 🏗</option>
              <option value="Programacion 💻">Programación 💻</option>
              <option value="Animales 🐶">Animales 🐶</option>
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

export default connect(mapStateToProps, {
  changeStatusModalAddEmployeeAction,
  addEmployeeAction,
})(FormEmployee);
