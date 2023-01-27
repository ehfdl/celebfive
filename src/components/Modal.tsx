import { setDefaultResultOrder } from "dns";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";
import { authService } from "../firebase";
import Login from "./Login";
import Register from "./Register";
interface ModalProps {
  modalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  email?: string;
  setEmail?: React.Dispatch<React.SetStateAction<string>>;
  password?: string;
  setPassword?: React.Dispatch<React.SetStateAction<string>>;
  error?: string;
  setError?: React.Dispatch<React.SetStateAction<string>>;
}

const Modal = ({ modalOpen, setModalOpen }: ModalProps) => {
  const [error, setError] = useState("");
  const [signDisplay, setSignDisplay] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const navigate = useNavigate();
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const passwordCheckRef = useRef<HTMLInputElement | null>(null);
  const modalRef = useRef<HTMLDivElement | null>(null);

  const closeModal = () => {
    if (modalOpen) setModalOpen(false);
    document.body.style.overflow = "unset";
  };

  // 로그인 유효성 검사
  const loginValidationCheck: any = () => {
    if (!email && !password) {
      emailRef.current?.focus();
      setError("이메일과 비밀번호를 입력해주세요.");
      return;
    } else if (email.indexOf("@") === -1) {
      emailRef.current?.focus();
      setError("이메일 형식이 아닙니다.");
      return;
    } else if (!email) {
      emailRef.current?.focus();
      setError("이메일을 입력해주세요.");
      return;
    } else if (!password) {
      passwordRef.current?.focus();
      setError("비밀번호를 입력해주세요.");
      return;
    } else if (password.length < 6) {
      passwordRef.current?.focus();
      setError("비밀번호 형식이 아닙니다.");
      return;
    }
  };

  //비밀번호 유효성 검사
  const registerValidationCheck = () => {
    loginValidationCheck();
    if (password !== passwordCheck) {
      setError("비밀번호를 재확인해주세요.");
      return;
    }
    if (!passwordCheck) {
      passwordCheckRef.current?.focus();
      setError("비밀번호를 재확인을 입력해주세요.");
      return;
    }
  };

  const handleLoginClick = (
    event: React.MouseEvent<HTMLDivElement | HTMLButtonElement>
  ) => {
    if (signDisplay) {
      if (loginValidationCheck()) {
        return;
      }
      //이메일 로그인
      signInWithEmailAndPassword(authService, email, password)
        .then(() => {
          alert("로그인 성공");
          setModalOpen(false);
          document.body.style.overflow = "unset";
        })
        .catch((error) => {
          alert("아이디와 비밀번호를 확인해주세요");
        });
    }

    if (!signDisplay) {
      setSignDisplay(true);
      setPassword("");
      setEmail("");
      setError("");
    }
  };

  const handleRegisterClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if (!signDisplay) {
      registerValidationCheck();
      createUserWithEmailAndPassword(authService, email, password)
        .then((userCredential) => {
          alert("회원가입 성공");
          navigate("/");
        })

        .catch((error) => {
          if (error.code === "auth/email-already-in-use") {
            alert("이미 가입된 이메일 입니다.");
            return;
          }
          alert("이메일과 비밀번호를 확인해주세요");
        });
    }
    if (signDisplay) {
      setSignDisplay(false);
      setPassword("");
      setEmail("");
      setError("");
    }
  };

  return (
    <>
      <Container ref={modalRef} onClick={closeModal}>
        <ModalContainer
          onClick={(event) => {
            event.stopPropagation();
          }}
        >
          <CloseButton onClick={closeModal}>X</CloseButton>
          {signDisplay ? (
            <Login
              email={email}
              emailRef={emailRef}
              passwordRef={passwordRef}
              password={password}
              setEmail={setEmail}
              setPassword={setPassword}
              setModalOpen={setModalOpen}
              error={error}
            />
          ) : (
            <Register
              setEmail={setEmail}
              emailRef={emailRef}
              passwordRef={passwordRef}
              passwordCheckRef={passwordCheckRef}
              passwordCheck={passwordCheck}
              setPassword={setPassword}
              setPasswordCheck={setPasswordCheck}
              password={password}
              email={email}
              error={error}
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
export const Container = styled.div`
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

export const ModalContainer = styled.div`
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
