import React from "react";
import Modal from "react-bootstrap/Modal";
import Loginbox from "./logincontainer";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Login</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          <Loginbox />
        </p>
      </Modal.Body>
    </Modal>
  );
}

function Login() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <div variant="light" onClick={() => setModalShow(true)}>
        Log in
      </div>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}
export default Login;
