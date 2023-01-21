import React from "react";
import styled from "styled-components";

export interface IButtonType {
  children: string;
  backgroundColor?: string;
  height?: number;
  border?: string;
  borderRadius?: string | number;
  padding?: string;
  color?: string;
  fontSize?: string;
  textAlign?: string;
  fontWeight?: string;
}

export const Button = (props: IButtonType) => {
  return (
    <div>
      <ButtonStyle backgroundColor={props.backgroundColor}>
        {props.children}
      </ButtonStyle>
      ;
    </div>
  );
};

const ButtonStyle = styled.button<IButtonType>`
  border: ${(props) => props.border || "none"};
  border-radius: ${(props) => props.borderRadius || "1.5rem"};
  background-color: ${(props) => props.backgroundColor || "#FADEDD"};
  height: ${(props) => props.height || "5rem"};
  padding: ${(props) => props.padding || "1rem"};
  color: ${(props) => props.color || "black"};
  font-size: ${(props) => props.fontSize || "1.2rem"};
  font-weight: ${(props) => props.fontWeight || "bold"};
  text-align: ${(props) => props.textAlign || "center"};
  cursor: pointer;
`;

export default Button;
