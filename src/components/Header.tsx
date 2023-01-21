import React from "react";
import styled from "styled-components";

export const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderTitle>셀럽파이브</HeaderTitle>
      <LoginButton>Login</LoginButton>
    </HeaderWrapper>
  );
};

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
`;

const LoginButton = styled.button`
  border: none;
  font-size: 1.2rem;
  font-weight: bold;
  background-color: transparent;
  padding: 1rem;
  cursor: pointer;
`;

export default Header;
