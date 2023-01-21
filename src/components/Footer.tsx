import React from "react";
import styled from "styled-components";

export const Footer = () => {
  return <FooterBox>copyright &#9426; celebfive</FooterBox>;
};

const FooterBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  font-weight: 800;
  height: 5rem;
  background-color: white;
`;

export default Footer;
