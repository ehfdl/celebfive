import { PropsWithChildren } from "react";
import { Container } from "./Modal";
import alertImg from "../assets/images/exclamation-mark.png";
import styled from "styled-components";
import { AlertModalType } from "./CommentsList";

const AlertModal = (props: PropsWithChildren<AlertModalType>) => {
  const { setIsAlertModalOpen, setIsNoComment, isAlertModalOpen, children } =
    props;

  const closeAlert = () => {
    setIsAlertModalOpen(!isAlertModalOpen);
    setIsNoComment(false);
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
