import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import Button from "react-bootstrap/Button";

const DeleteEmployee = ({ id }) => {
  const [show, setShow] = useState(false);
  console.log(id);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleDelete = async () => {
    try {
      const response = await fetch(
        `https://amusing-victory-production.up.railway.app/api/employee/${id}`,
        {
          method: "DELTE",
        }
      );
    } catch (error) {
      console.log("Error deleting employee", error.message);
    }
    handleClose();
  };
  return (
    <>
      <Button variant="outline-danger" onClick={handleShow}>
        Delete
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to Delete this Employee:{id}?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={handleDelete}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DeleteEmployee;
