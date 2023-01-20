import React from "react";
import styled from "styled-components";

export const Footer = () => {
  return (
    <div>
      <FooterText>copyright &#9426; celebfive</FooterText>
    </div>
  );
};

const FooterText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  font-weight: 800;
  height: 5rem;
`;

export default Footer;
