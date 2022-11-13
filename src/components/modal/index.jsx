import Modal from "react-modal";

import "./styles.scss";

Modal.setAppElement("#root");

function OMBModal({ children, ...props }) {
  return (
    <Modal
      overlayClassName="omb-modal--overlay"
      className="omb-modal"
      {...props}
    >
      {children}
    </Modal>
  );
}

export default OMBModal;
