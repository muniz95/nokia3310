import React from "react";
import '../styles/Modal.scss';

const Modal = () =>
  <div className="modal">
    <div className="modal-content">
      <input type="checkbox" name="ok" id="ok" style={{display: 'none'}} />
      <label htmlFor="ok">
        <span>&nbsp;</span>
        <ins><i>&nbsp;</i></ins>
      </label>
    </div>
  </div>;

export default Modal;