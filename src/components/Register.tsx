import React from "react";
import styled from "styled-components";

interface RegisterProps {
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  password: string;
  passwordCheck: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  setPasswordCheck: React.Dispatch<React.SetStateAction<string>>;
  passwordCheckRef: React.MutableRefObject<HTMLInputElement | null>;
  passwordRef: React.MutableRefObject<HTMLInputElement | null>;
  emailRef: React.MutableRefObject<HTMLInputElement | null>;
}

const Register = ({
  setEmail,
  email,
  setPassword,
  password,
  setPasswordCheck,
  passwordCheck,
  passwordCheckRef,
  passwordRef,
  emailRef,
}: RegisterProps) => {
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
            ref={emailRef}
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
            ref={passwordRef}
            onChange={handlePasswordChange}
            placeholder="비밀번호를 입력해주세요"
          />
        </InputBox>
        <InputBox>
          비밀번호:
          <InputField
            type="password"
            value={passwordCheck}
            ref={passwordCheckRef}
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
  margin: 10px;
  height: 30px;
  width: 180px;
  padding: 8px;
  border-radius: 3px;
  border: 1px solid black;
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

const TitleText = styled.div`
  margin-bottom: 30px;
  font-size: 30px;
`;
