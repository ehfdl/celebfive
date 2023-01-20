import React from "react";
import styled from "styled-components";

const Test = () => {
  return (
    <BackGround>
      <Wrap>
        <StatusBar></StatusBar>
        <Image />
        <TestContainer></TestContainer>
        <AnswerContainer>
          <Answer></Answer>
          <Answer></Answer>
        </AnswerContainer>
      </Wrap>
    </BackGround>
  );
};

export default Test;

const BackGround = styled.div`
  width: 100%;
  height: 100vh;
  background-color: white;
  display: flex;
  justify-content: center;
`;

const Wrap = styled.div`
  width: 70%;
  height: 100%;
  background-color: #fcdddd;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StatusBar = styled.div`
  width: 80%;
  height: 50px;
  position: relative;
  top: 50px;
  border-radius: 20px;
  background-color: #ff6f6f;
`;

const Image = styled.div`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  background-color: white;
  position: relative;
  top: 80px;
`;

const TestContainer = styled.div`
  width: 75%;
  height: 200px;
  background-color: white;
  position: relative;
  top: 120px;
`;

const AnswerContainer = styled.div`
  width: 75%;
  height: 350px;
  background-color: #ff6f6f;
  position: relative;
  top: 160px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 40px;
`;

const Answer = styled.div`
  width: 80%;
  height: 100px;
  background-color: white;
  position: relative;
  border-radius: 30px;
`;
