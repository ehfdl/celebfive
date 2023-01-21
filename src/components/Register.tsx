import React, { useState } from "react";

import styled from "styled-components";

const Register = ({
  setModalOpen,
  setEmail,
  email,
  setPassword,
  password,
  setPasswordCheck,
  passwordCheck,
}: any) => {
  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setPassword(event.target.value);
  };
  const handlePasswordCheckChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    event.preventDefault();
    setPasswordCheck(event.target.value);
  };

  return (
    <Modal>
      <TitleText>회원가입</TitleText>
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
        <InputBox>
          {" "}
          비밀번호 화인:
          <InputField
            type="password"
            value={passwordCheck}
            onChange={handlePasswordCheckChange}
            placeholder="비밀번호를 다시 입력해주세요"
          />
        </InputBox>
      </InputContainer>
    </Modal>
  );
};

export default Register;

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
