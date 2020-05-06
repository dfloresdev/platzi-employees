import React from "react";
import Icons from "../../assets/styles/components/icons/svgIcons";
import ModalDelete from "../modal/Delete";
import "../../assets/styles/components/cardEmployee/CardEmployee.scss";

class CardEmployee extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      openModal: false,
    };
  }

  actionModal = () => {
    this.setState({
      openModal: !this.state.openModal,
    });
  };

  render() {
    const { employee } = this.props;

    return (
      <div key={employee._id} className="card-employee">
        <div>
          <div className="container-list-employees--checkbox">
            <input type="checkbox" className="box"></input>
          </div>
        </div>
        <div>
          {/* <img src="" alt="" /> */}
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
        <div className="card-employee--buttons">
          <div onClick={this.actionModal}>
            <Icons name="edit" className="actions" />
          </div>
          <div>
            <Icons name="delete" className="actions" />
          </div>
          <ModalDelete
            openModal={this.state.openModal}
            actionModal={this.actionModal}
            deleteEmployee={this.props.deleteEmployee}
            employee={employee}
          />
        </div>
      </div>
    );
  }
}

export default CardEmployee;
