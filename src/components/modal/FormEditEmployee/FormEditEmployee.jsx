import React from "react";
import "./FormEditEmployee.scss";
import Modal from "../Modal/Modal";
import Icons from "../../../utils/icons/svgIcons";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import { addEmployeeAction } from "../../../redux/employeesDuck";

const FormEditEmployee = ({
  employee,
  openModal,
  actionModal,
  addEmployeeAction,
}) => {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => {
    addEmployeeAction({ id: employee._id, ...data });
    actionModal();
  };

  return (
    <Modal openModal={openModal} actionModal={actionModal}>
      <div className="modal-form">
        <p className="modal-form--title">Editar empleado</p>
        <form className="modal-form--group" onSubmit={handleSubmit(onSubmit)}>
          <div className="input-form adjust-input">
            <input
              type="text"
              name="url_img"
              placeholder="URL Imagen"
              defaultValue={employee.url_img}
              ref={register({ required: true, minLength: 10 })}
            />
            {errors.urlImg && <span className="error">Ingresa una URL</span>}
          </div>
          <div className="input-form adjust-input">
            <input
              name="nombre"
              ref={register({ required: true, minLength: 4, maxLength: 20 })}
              type="text"
              defaultValue={employee.nombre}
              placeholder="Nombre"
            />
            {errors.nombre && <span className="error">Ingresa un nombre</span>}
          </div>
          <div className="input-form adjust-input">
            <input
              name="apellido"
              ref={register({ required: true, minLength: 4, maxLength: 20 })}
              type="text"
              defaultValue={employee.apellido}
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
              defaultValue={employee.cargo}
              placeholder="Cargo"
            />
            {errors.cargo && <span className="error">Ingresa un cargo</span>}
          </div>
          <div className="input-form adjust-input">
            <input
              name="salario"
              ref={register({ required: true, minLength: 3, maxLength: 7 })}
              type="number"
              defaultValue={employee.salario}
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
              defaultValue={employee.jornada}
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
              defaultValue={employee.estado}
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
              defaultValue={employee.categoria}
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
            <button>Actualizar</button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default connect(null, { addEmployeeAction })(FormEditEmployee);
