import "../styles/Modal.css";

const Modal = (props) => {
  return (
    <div
      className={`modal ${props.show ? "show" : ""}`}
      onClick={props.onClose}
    >
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h4 className="modal-title">{props.title}</h4>
        </div>
        <div className="modal-body">{props.message}</div>
        <div className="modal-footer">
          <button className="modal-button" onClick={props.onClose}>
            Next Element
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
