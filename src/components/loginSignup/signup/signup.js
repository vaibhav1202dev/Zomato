import React from "react";
import Modal from "react-bootstrap/Modal";
import Signupbox from "./signupcontainer";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Sign Up</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          <Signupbox />
        </p>
      </Modal.Body>
    </Modal>
  );
}

function Signup() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <div variant="light" onClick={() => setModalShow(true)}>
        Sign up
      </div>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}
export default Signup;
