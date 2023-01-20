import React from "react";
import styled from "styled-components";

export const Header = () => {
  return (
    <HeaderWrapper>
      <h2>셀럽파이브</h2>
      <LoginButton>Login</LoginButton>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
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
