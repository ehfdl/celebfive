import { PropsWithChildren } from "react";
import alertImg from "../assets/images/exclamation-mark.png";
import styled from "styled-components";
import { AlertModalType } from "./CommentsList";

const AlertModal = (props: PropsWithChildren<AlertModalType>) => {
  const {
    setIsAlertModalOpen,
    setIsAlertModalOpen2,
    setIsNoComment,
    setIsNoEdit,
    setIsEqualEdit,
    children,
  } = props;

  const closeAlert = () => {
    setIsAlertModalOpen(false);
    setIsAlertModalOpen2(false);
    setIsNoComment(false);
    setIsNoEdit(false);
    setIsEqualEdit(false);
  };

  return (
    <Container>
      <AlertModalContainer>
        <AlertImgStyle src={alertImg} />
        <AlertTitle>{children}</AlertTitle>
        <AlertConfirmButton onClick={closeAlert}>확인</AlertConfirmButton>
      </AlertModalContainer>
    </Container>
  );
};

export default AlertModal;

const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.1);
`;

const AlertModalContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  border: 1px black solid;
  align-items: center;
  justify-content: center;
  padding: 10px;
  width: 20rem;
  height: 20rem;
  background-color: white;
  z-index: 1000;
`;

export const AlertImgStyle = styled.img`
  width: 80px;
  height: 80px;
  margin-bottom: 1.5rem;
`;

const AlertTitle = styled.p`
  font-size: 1.2rem;
`;

const AlertConfirmButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1.5rem;
  padding: 10px;
  width: 4.5rem;
  height: 2rem;
  cursor: pointer;
  &:hover {
    background-color: #e76662;
    color: white;
  }
`;
