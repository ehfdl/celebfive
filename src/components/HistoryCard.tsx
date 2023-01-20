import React from "react";
import styled from "styled-components";
import { Fade } from "react-awesome-reveal";

export const HistoryCard = () => {
  return (
    <Fade
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "10% 0",
      }}
    >
      <HistoryCardSection>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium
        eius, doloremque dignissimos ad dolore molestias voluptate atque
        quibusdam recusandae cum quisquam reiciendis dolores sint fuga eos culpa
        saepe repudiandae neque!
      </HistoryCardSection>
      ;
    </Fade>
  );
};

const HistoryCardSection = styled.div`
  width: 80%;
  height: 80%;
  background-color: #fff;
`;

export default HistoryCard;
