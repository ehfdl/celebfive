import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import kakaoShare from "../kakao";
import CustomButton from "../UI/CustomButton";
import AA from "../test.json";
import CommentsList from "../components/CommentsList";
import { CopyToClipboard } from "react-copy-to-clipboard";
import {
  FacebookShareButton,
  TwitterShareButton,
  FacebookIcon,
  TwitterIcon,
} from "react-share";

const Result = () => {
  const { state } = useLocation();
  const [result, setResult] = useState("");
  const [resultText, setResultText] = useState("");

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

  const currentUrl = window.location.href;

  return (
    <BackGround>
      <Wrap>
        <TitleWrap>
          <Title>결과</Title>
          <SubTitle>당신은 {result} 입니다!</SubTitle>
        </TitleWrap>
        <TextWrap>{resultText}</TextWrap>
        <ButtonWrap>
          <FacebookShareButton url={currentUrl}>
            <FacebookIcon round={true} size={"5rem"}>
              FaceBook
            </FacebookIcon>
          </FacebookShareButton>
          <TwitterShareButton url={currentUrl}>
            <TwitterIcon
              round={true}
              size={"5rem"}
              style={{ marginLeft: "1.5rem", marginRight: "1rem" }}
            >
              Twitter
            </TwitterIcon>
          </TwitterShareButton>
          <ShareKakaoButton onClick={kakaoShare}>TALK</ShareKakaoButton>

          <CopyToClipboard
            text={currentUrl}
            onCopy={() => alert("복사되었습니다")}
          >
            <CopyCurrentUrlBtn>URL</CopyCurrentUrlBtn>
          </CopyToClipboard>
        </ButtonWrap>

        <CommentsWrap>
          <CommentsList />
        </CommentsWrap>
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
  color: white;
  border: 1px solid black;
  padding: 20px;
`;

const CommentsWrap = styled.div`
  width: 60%;
  min-height: 200px;

  background-color: #ff6f6f;
  border: 1px solid black;
  padding: 20px;
`;

const ButtonWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ShareKakaoButton = styled(CustomButton)`
  border: none;
  width: 5rem;
  height: 5rem;
  background-color: #47292a;
  color: #f7e111;
  font-weight: bold;
`;

const CopyCurrentUrlBtn = styled(CustomButton)`
  border: none;
  background-color: #8e50b8;
  color: #fff;
  width: 5rem;
  height: 5rem;
`;
