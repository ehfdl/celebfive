import styled from "styled-components";

const Login = ({ email, setEmail, password, setPassword }: any) => {
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
  margin: 5px;
  height: 30px;
  width: 180px;
  background-color: #fadedd;
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
