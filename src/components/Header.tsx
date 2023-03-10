import { signOut } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";
import { authService } from "../firebase";
import Modal from "./Modal";

export const Header = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const navigate = useNavigate();
  const openModal = () => {
    if (authService.currentUser) {
      navigate("/");
    }
    if (!authService.currentUser) {
      setModalOpen(true);
      document.body.style.overflow = "hidden";
    }
  };

  const logOutClick = () => {
    signOut(authService)
      .then(() => {
        alert("로그아웃");
        navigate("/");
      })
      .catch((event) => {
        alert(event);
      });
  };

  const goToMain = () => {
    navigate("/");
  };

  return (
    <HeaderWrapper>
      <HeaderTitle onClick={goToMain}>내가 과거에 태어났다면?</HeaderTitle>
      {authService.currentUser ? (
        <LogoutButton onClick={logOutClick}>로그아웃</LogoutButton>
      ) : (
        <LoginButton onClick={openModal}>로그인</LoginButton>
      )}
      {modalOpen && <Modal modalOpen={modalOpen} setModalOpen={setModalOpen} />}
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
`;

const HeaderTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  font-weight: bold;
  &:hover {
    font-size: 1.3rem;
  }
  cursor: pointer;
`;

const LoginButton = styled.button`
  border: none;
  font-size: 1.2rem;
  font-weight: bold;
  background-color: transparent;
  padding: 1rem;
  &:hover {
    font-size: 1.3rem;
  }
  cursor: pointer;
`;

const LogoutButton = styled.button`
  border: none;
  font-size: 1.2em;
  font-weight: bold;
  background-color: transparent;
  padding: 1rem;
  &:hover {
    font-size: 1.3rem;
  }
  cursor: pointer;
`;
