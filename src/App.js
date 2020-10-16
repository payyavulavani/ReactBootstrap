import React from "react";
import { Button, Card, Modal } from "react-bootstrap";

export default function App() {
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="boot">
      <h2> Buttons </h2>
      <hr />
      <Button variant="primary" size="sm">
        {" "}
        Primary{" "}
      </Button>{" "}
      <Button variant="outline-success" size="md">
        {" "}
        Success{" "}
      </Button>{" "}
      <hr />
      <h2>
        {" "}
        <u> Cards </u>{" "}
      </h2>
      <hr />
      <Card className="text-center">
        <Card.Header> Card Header </Card.Header>
        <Card.Body>
          <Card.Title> card title </Card.Title>
          <Card.Text>
            Card text...Card text...Card text...Card text...Card text...
          </Card.Text>
          <Button variant="danger"> Submit </Button>
        </Card.Body>
        <Card.Footer> This is Footer</Card.Footer>
      </Card>
      <hr />
      <h2> <strong>Modals</strong> </h2>
      <hr />
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>
      <Modal show={show} onHide={handleClose} centered>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
             Modal Body...Modal Body...Modal Body...Modal Body...Modal Body...Modal Body...Modal Body...Modal Body...
          </Modal.Body>
          <Modal.Footer>
            <Button variant="success" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
      </Modal>
        
    </div>
  );
}
