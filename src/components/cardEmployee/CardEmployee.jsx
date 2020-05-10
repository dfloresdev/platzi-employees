import React from "react";
import Icons from "../../utils/icons/svgIcons";
import ModalDelete from "../modal/Delete/Delete";
import "./CardEmployee.scss";

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
        <div className="card-employee--employee">
          <div
            className="content-img"
            style={{
              background: `url(${employee.url_img}) no-repeat`,
              backgroundSize: "100% 100%",
              width: "100px",
              height: "100px",
              borderRadius: "50%",
            }}
          ></div>
          <div className="card-employee--employee__name">
            <p className="title-list">
              {employee.nombre} {employee.apellido}
            </p>
            <p className="sub-title-list">{employee.cargo}</p>
          </div>
        </div>
        <div>
          <p className="title-list">{employee.salario} USD</p>
          <p className="sub-title-list">{employee.jornada}</p>
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
