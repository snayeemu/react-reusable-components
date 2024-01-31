import { useState } from "react";
import Button from "./components/ui/Button";
import Container from "./components/ui/Container";
import Modal from "./components/ui/Modal";
import { createPortal } from "react-dom";

function App() {
  const [modal, setModal] = useState(false);

  const handleModalClose = () => {
    setModal((prev) => !prev);
  };

  return createPortal(
    <Container>
      <div className="h-screen w-full flex justify-center items-center">
        <Button onClick={() => setModal((prev) => !prev)}>Open Modal</Button>
        <Modal isOpen={modal} onClose={handleModalClose}>
          <Modal.Header>
            <h1>This is Modal Title</h1>
            <Modal.CloseButton />
          </Modal.Header>

          <p>This is modal</p>
        </Modal>
      </div>
    </Container>,
    document.getElementById("portal") as Element
  );
}

export default App;
