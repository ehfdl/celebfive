import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { authService } from "../firebase";
import Login from "./Login";
import Register from "./Register";

interface LoginProps {
  modalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const Modal = ({ modalOpen, setModalOpen }: LoginProps) => {
  const [signDisplay, setSignDisplay] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");

  const navigate = useNavigate();
  const modalRef = useRef<any>();

  const closeModal = (target: any) => {
    if (modalOpen) setModalOpen(false);
    document.body.style.overflow = "unset";
  };
  const handleLoginClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (signDisplay) {
      signInWithEmailAndPassword(authService, email, password)
        .then(() => {
          alert("로그인 성공");
          navigate("/test");
          setModalOpen(false);
        })
        .catch((event: any) => {
          alert(event);
        });
    } else if (!signDisplay) {
      setSignDisplay(true);
    }
  };

  const handleRegisterClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (!signDisplay) {
      createUserWithEmailAndPassword(authService, email, password)
        .then((userCredential) => {
          alert("회원가입 성공");
          navigate("/test");
        })
        .catch((event) => {
          alert(event);
        });
    }
    if (signDisplay) {
      setSignDisplay(false);
    }
  };

  return (
    <>
      <Container
        ref={modalRef}
        onClick={(event) => {
          closeModal(event);
        }}>
        <ModalContainer
          onClick={(event) => {
            event.stopPropagation();
          }}>
          <CloseButton
            onClick={(event) => {
              closeModal(event);
            }}>
            X
          </CloseButton>
          {signDisplay ? (
            <Login
              email={email}
              password={password}
              setEmail={setEmail}
              setPassword={setPassword}
              setModalOpen={setModalOpen}
            />
          ) : (
            <Register
              setEmail={setEmail}
              passwordCheck={passwordCheck}
              setPassword={setPassword}
              setPasswordCheck={setPasswordCheck}
              password={password}
              email={email}
              setModalOpen={setModalOpen}
            />
          )}

          <ButtonContainer>
            <LoginButton onClick={handleLoginClick}>로그인</LoginButton>
            <LoginButton onClick={handleRegisterClick}>회원가입</LoginButton>
          </ButtonContainer>
        </ModalContainer>
      </Container>
    </>
  );
};
export default Modal;
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
  background-color: rgba(0, 0, 0, 0.7);
`;
const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 25px;
  border: none;
  cursor: pointer;
`;
const ModalContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  border: 1px black solid;
  align-items: center;
  justify-content: center;
  width: 400px;
  height: 400px;
  background-color: white;
  z-index: 1000;
`;
const LoginButton = styled.button`
  margin: 10px;
  width: 250px;
  height: 30px;
  border-radius: 50px;
  border: none;
  background-color: #fadedd;
  cursor: pointer;
`;
const ButtonContainer = styled.div`
  margin: 20px;
  display: flex;
  flex-direction: column;
  margin-bottom: 0px;
`;
