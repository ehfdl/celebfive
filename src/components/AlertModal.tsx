import React from "react";
import { Container, ModalContainer } from "./Modal";

const AlertModal = ({
  isAlertModalOpen,
  setIsAlertModalOpen,
}: {
  isAlertModalOpen: boolean;
  setIsAlertModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <Container>
      <ModalContainer>이게지금내용이없어서그러냐?</ModalContainer>
    </Container>
  );
};

export default AlertModal;
