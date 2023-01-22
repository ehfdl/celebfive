import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import AA from "../test.json";

const Result = () => {
  const { state } = useLocation();
  const [result, setResult] = useState("");
  const [resultText, setResultText] = useState("");
  console.log(state);

  useEffect(() => {
    if (state >= 18) {
      setResult(AA.results[3].result[0]);
      setResultText(AA.results[3].result[1]);
    } else if (state >= 15) {
      setResult(AA.results[0].result[0]);
      setResultText(AA.results[0].result[1]);
    } else if (state >= 13) {
      setResult(AA.results[1].result[0]);
      setResultText(AA.results[1].result[1]);
    } else if (state >= 10) {
      setResult(AA.results[2].result[0]);
      setResultText(AA.results[2].result[1]);
    }
  }, [state]);

  return (
    <BackGround>
      <Wrap>
        <TitleWrap>
          <Title>결과</Title>
          <SubTitle>당신은 {result} 입니다!</SubTitle>
        </TitleWrap>
        <TextWrap>{resultText}</TextWrap>
        <ShareBtn>공유하기</ShareBtn>
        <CommentsWrap></CommentsWrap>
      </Wrap>
    </BackGround>
  );
};

export default Result;

const BackGround = styled.div`
  max-width: 100vw;
  width: 100%;
  background-color: white;
  display: flex;
  justify-content: center;
`;

const Wrap = styled.div`
  max-width: 1100px;
  width: 100%;
  background-color: #fcdddd;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  gap: 20px;
`;

const TitleWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
const Title = styled.div`
  font-size: 3em;
  font-weight: bold;
`;
const SubTitle = styled.div`
  font-size: 2em;
`;

const TextWrap = styled.div`
  width: 50%;
  min-height: 200px;
  background-color: #ff6f6f;
  border: 1px solid black;
  padding: 20px;
`;

const ShareBtn = styled.button`
  width: 10%;
`;

const CommentsWrap = styled.div`
  width: 60%;
  min-height: 200px;

  background-color: #ff6f6f;
  border: 1px solid black;
  padding: 20px;
`;
