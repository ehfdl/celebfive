import React from "react";
import { Container, ModalContainer } from "./Modal";
import alertImg from "../assets/images/exclamation-mark.png";

const AlertModal = ({
  children,
  isAlertModalOpen,
  setIsAlertModalOpen,
}: {
  children: string;
  isAlertModalOpen: boolean;
  setIsAlertModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const closeAlert = () => {
    setIsAlertModalOpen(!isAlertModalOpen);
  };

  return (
    <Container>
      <ModalContainer>
        <img src={alertImg} style={{ width: "80px", height: "80px" }} />
        <p>{children}</p>
        <button onClick={closeAlert}>확인</button>
      </ModalContainer>
    </Container>
  );
};

export default AlertModal;
