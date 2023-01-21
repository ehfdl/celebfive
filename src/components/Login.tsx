import styled from "styled-components";

const Login = () => {
  return (
    <>
      <Container>
        <ModalContainer>
          <Modal>
            gkgkdl
            <InputField type="email" placeholder="이메일을 입력해주세요" />
            <InputField type="password" placeholder="비밀번호를 입력해주세요" />
            <LoginButton>로그인</LoginButton>
            <LoginButton>회원가입</LoginButton>
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
`;
const InputField = styled.input`
  margin: 5px;
  width: 70%;
  height: 30px;
`;
const LoginButton = styled.button`
  margin: 5px;
  width: 70%;
  height: 30px;
  border-radius: 50px;
  border: none;
`;
