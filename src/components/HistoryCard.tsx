import React from "react";
import styled from "styled-components";
import { Fade } from "react-awesome-reveal";
// import HistoryContent from "./HistoryContent";
import AA from "../test.json";

export type IHIstoryType = {
  children?: string;
};

export const HistoryCard = () => {
  const datas = AA.description;
  // console.log(datas);

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
      <HistoryCardSection>
        <HistoryContent>
          ss
          {/* {datas.map((data) => (
            <>
              <div>{data.id}</div>
              <div>{data.source}</div>
              <div>{data.text}</div>
              <div>{data.title}</div>
            </>
          ))} */}
        </HistoryContent>
      </HistoryCardSection>
    </Fade>
  );
};

const HistoryCardSection = styled.div`
  width: 80%;
  height: 80%;
  background-color: #fff;
  padding: 5rem;
`;

const HistoryContent = styled.div``;

export default HistoryCard;
