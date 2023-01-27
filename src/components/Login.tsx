import styled from "styled-components";

interface LoginProps {
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  error: string;
}

const Login = ({
  email,
  setEmail,
  password,
  setPassword,

  error,
}: LoginProps) => {
  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setPassword(event.target.value);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setEmail(event.target.value);
  };

  return (
    <Modal>
      <TitleText>로그인</TitleText>
      <InputContainer>
        <ErrorText>{error}</ErrorText>
        <InputBox>
          아이디:
          <InputField
            style={{ marginLeft: "25px" }}
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
    </Modal>
  );
};

export default Login;

const Modal = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const InputField = styled.input`
  margin: 10px;
  height: 30px;
  width: 200px;
  padding: 8px;
  border-radius: 3px;
  border: 1px solid black;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
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
const ErrorText = styled.div`
  color: red;
`;
