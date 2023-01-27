import React from "react";
import styled from "styled-components";

interface IButtonType {
  children: string | React.ImgHTMLAttributes<HTMLImageElement>;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  backgroundColor?: string;
  backgroundImage?: string;
  backgroundSize?: string;
  width?: number;
  height?: number;
  border?: string;
  borderRadius?: string | number;
  padding?: string;
  color?: string;
  fontSize?: string;
  textAlign?: string;
  fontWeight?: string;
  margin?: string;
}

export const CustomButton = styled.button<IButtonType>`
  border: "none";
  border-radius: 7em;
  background-color: #fadedd;
  background-image: none;
  background-size: cover;
  width: 5.5rem;
  height: 5.5rem;
  padding: 0.5rem;
  color: #000;
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;
  margin: 1rem;
  cursor: pointer;
  /* @media ${(props) => props.theme.mobile} {
    margin: 0;
  } */
`;

export default CustomButton;
