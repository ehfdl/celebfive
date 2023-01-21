import React, { useState } from "react";

import styled from "styled-components";

interface LoginProps {
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const Login = ({ setModalOpen }: LoginProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const closeModal = () => {
    setModalOpen(false);
    document.body.style.overflow = "unset";
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
        <button onClick={closeModal}>X</button>
        <ModalContainer>
          <Modal>
            <TitleText>로그인</TitleText>
            <InputContainer>
              <InputBox>
                아이디:
                <InputField
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                  placeholder="이메일을 입력해주세요"
                />
              </InputBox>
              <InputBox>
                비밀번호:
                <InputField
                  type="password"
                  value={password}
                  onChange={handlePasswordChange}
                  placeholder="비밀번호를 입력해주세요"
                />
              </InputBox>
            </InputContainer>
            <ButtonContainer>
              <LoginButton>로그인</LoginButton>
              <LoginButton onClick={handleClickButton}>회원가입</LoginButton>
            </ButtonContainer>
          </Modal>
        </ModalContainer>
      </Container>
    </>
  );
};
export default Login;
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
const ModalContainer = styled.div`
  display: flex;
  border: 1px black solid;
  align-items: center;
  justify-content: center;
  width: 400px;
  height: 400px;
  background-color: white;
  z-index: 1000;
`;
const Modal = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const InputField = styled.input`
  margin: 5px;
  height: 30px;
  width: 180px;
  background-color: #fadedd;
  border: 1px solid black;
`;

const LoginButton = styled.button`
  margin: 5px;
  width: 150px;
  height: 30px;
  border-radius: 50px;
  border: none;
  background-color: #fadedd;
  cursor: pointer;
`;
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
const InputBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const ButtonContainer = styled.div`
  margin: 10px;
  display: flex;
  flex-direction: column;
`;
const TitleText = styled.div`
  margin-bottom: 30px;
  font-size: 30px;
`;
