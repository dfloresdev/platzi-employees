import React from "react";
import ReactDOM from "react-dom";
import "./Modal.scss";

const Modal = (props) => {
  if (!props.openModal) {
    return null;
  }
  return ReactDOM.createPortal(
    <div className="Modal">
      <div className="Modal__container">
        <button onClick={props.actionModal} className="Modal__close-button">
          X
        </button>
        {props.children}
      </div>
    </div>,
    document.getElementById("modal"),
  );
};

export default Modal;
