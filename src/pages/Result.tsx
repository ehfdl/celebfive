import React from "react";
import { useLocation } from "react-router-dom";
import kakaoShare from "../kakao";
import Button from "../UI/CustomButton";

const Result = () => {
  const { state } = useLocation();
  return (
    <>
      <div>{state}</div>
      <Button onClick={kakaoShare}>공유하기</Button>
    </>
  );
};

export default Result;
