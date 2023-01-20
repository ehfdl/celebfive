import React from "react";
import styled from "styled-components";
import HistoryCard from "./HistoryCard";
import { Fade } from "react-awesome-reveal";

export const HistoryInfo = () => {
  return (
    <>
      <HistorySectionCorea>
        <HistoryCard />
      </HistorySectionCorea>
      <HistorySectionJosun>
        <HistoryCard />
      </HistorySectionJosun>
      <HistorySectionIljea>
        <HistoryCard />
      </HistorySectionIljea>
      <HistorySectionModern>
        <HistoryCard />
      </HistorySectionModern>
    </>
  );
};

const HistorySectionCorea = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffe818;
  height: 50%;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

const HistorySectionJosun = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #23daaf;
  height: 50%;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

const HistorySectionIljea = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #a143e8;
  height: 50%;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

const HistorySectionModern = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #e84343;
  height: 50%;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export default HistoryInfo;
