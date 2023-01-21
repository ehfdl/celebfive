import React, { useState } from "react";
import styled from "styled-components";
import { useEffect } from "react";
import AA from "../test.json";
import { useNavigate } from "react-router-dom";

interface StatusBarProps {
  count: number;
}

const Test = () => {
  const navigate = useNavigate();
  const [count, setCount] = useState(0);
  const [score, setScore] = useState(0);

  const onClickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    const value = (event.target as HTMLInputElement).value;

    setScore((prev) => prev + Number(value));
    setCount((prev) => prev + 1);
  };

  useEffect(() => {
    if (count === 10) {
      setCount(0);
      navigate("/result", { state: score });
      console.log(count);
    }
  }, [count]);

  return (
    <BackGround>
      <Wrap>
        <StatusBarBox>
          <StatusBar count={count} />
        </StatusBarBox>
        <Image>
          <img src={AA.questions[count].image} />
        </Image>
        <TestContainer>{AA.questions[count].question}</TestContainer>
        <AnswerContainer>
          <Answer
            onClick={onClickHandler}
            value={AA.questions[count].score01[1]}
          >
            {AA.questions[count].score01[0]}
          </Answer>
          <Answer
            onClick={onClickHandler}
            value={AA.questions[count].score02[1]}
          >
            {AA.questions[count].score02[0]}
          </Answer>
        </AnswerContainer>
      </Wrap>
    </BackGround>
  );
};

export default Test;

const BackGround = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: white;
  display: flex;
  justify-content: center;
`;

const Wrap = styled.div`
  width: 70vw;
  height: 100vh;
  background-color: #fcdddd;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StatusBarBox = styled.div`
  width: 80%;
  height: 50px;
  position: relative;
  top: 50px;
  border-radius: 20px;
  background-color: white;
`;
const StatusBar = styled.div`
  width: ${(props: StatusBarProps) => (props.count + 1) * 10}%;
  height: 50px;
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
  overflow: hidden;
  top: 80px;
`;

const TestContainer = styled.div`
  width: 75%;
  height: 200px;
  background-color: white;
  position: relative;
  padding: 20px;
  font-size: 24px;
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

const Answer = styled.button`
  width: 80%;
  height: 100px;
  background-color: white;
  position: relative;
  padding: 20px;
  border-style: none;
  font-size: 24px;
  border-radius: 30px;
`;
