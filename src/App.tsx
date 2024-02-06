import { useState } from "react";
import Button from "./components/ui/Button";
import Container from "./components/ui/Container";
import Modal from "./components/ui/Modal";
import { createPortal } from "react-dom";
import NormalForm from "./components/NormalForm/NormalForm";

function App() {
  const [modal, setModal] = useState(false);

  const handleModalClose = () => {
    setModal((prev) => !prev);
  };

  return createPortal(
    <Container>
      <NormalForm />
    </Container>,
    document.getElementById("portal") as Element
  );
}

export default App;
