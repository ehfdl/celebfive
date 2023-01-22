import React from "react";
import styled from "styled-components";
import { Fade } from "react-awesome-reveal";

export type IHIstoryType = {
  children?: string;
};

export const HistoryCard = (props: IHIstoryType) => {
  return (
    <Fade
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <HistoryCardSection>{props.children}</HistoryCardSection>
    </Fade>
  );
};

const HistoryCardSection = styled.div`
  width: 80%;
  height: 80%;
  background-color: #fff;
  padding: 5rem;
`;

export default HistoryCard;
