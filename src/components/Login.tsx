import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { auth } from "../firebase";
interface LoginProps {
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const Login = ({ setModalOpen }: LoginProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const closeModal = () => {
    setModalOpen(false);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setPassword(event.target.value);
  };
  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setEmail(event.target.value);
  };
  const handleClickButton = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <>
      <Container>
        <ModalContainer>
          <button onClick={closeModal}>X</button>
          <Modal>
            <p>로그인하기</p>
            <InputContainer>
              <Text> 아이디</Text>
              <InputField
                type="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="이메일을 입력해주세요"
              />
              <Text>비밀번호</Text>
              <InputField
                type="password"
                value={password}
                onChange={handlePasswordChange}
                placeholder="비밀번호를 입력해주세요"
              />
            </InputContainer>
            <LoginButton>로그인</LoginButton>
            <LoginButton onClick={handleClickButton}>회원가입</LoginButton>
          </Modal>
        </ModalContainer>
      </Container>
    </>
  );
};
export default Login;
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  width: 800px;
  height: 800px;
  z-index: 1;
`;
const ModalContainer = styled.div`
  display: flex;
  border: 1px black solid;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 50%;
`;
const Modal = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const InputField = styled.input`
  margin: 5px;
  height: 30px;
`;

const LoginButton = styled.button`
  margin: 5px;
  width: 100%;
  height: 30px;
  border-radius: 50px;
  border: none;
  cursor: pointer;
`;
const InputContainer = styled.div``;
const Text = styled.p`
  margin: 0px;
`;
