import React, { useState } from "react";
import styled from "styled-components";
import { useEffect } from "react";
import AA from "../test.json";
import { useNavigate } from "react-router-dom";
import Snowfall from "react-snowfall";
import { AnimationWrapper } from "react-hover-animation";
import { CustomCursor } from "react-svg-cursor";
import png from "../assets/images/weight.png";

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
    }
  }, [count]);

  return (
    <>
      <BackGround>
        <Wrap>
          <StatusBarBox>
            <StatusBar count={count}>
              <StatusText>{(count + 1) * 10}%</StatusText>
            </StatusBar>
          </StatusBarBox>
          <Image>
            <img src={AA.questions[count].image} />
          </Image>
          <TestContainer>{AA.questions[count].question}</TestContainer>
          <AnswerContainer>
            <AnimationWrapper
              style={{
                marginBottom: 30,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Answer
                onClick={onClickHandler}
                value={AA.questions[count].score01[1]}
              >
                {AA.questions[count].score01[0]}
              </Answer>
            </AnimationWrapper>
            <AnimationWrapper
              style={{
                marginBottom: 20,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Answer
                onClick={onClickHandler}
                value={AA.questions[count].score02[1]}
              >
                {AA.questions[count].score02[0]}
              </Answer>
            </AnimationWrapper>
          </AnswerContainer>
        </Wrap>
      </BackGround>
      <Snowfall
        color="#ff6f6f"
        snowflakeCount={50}
        speed={[0.5, 1]}
        radius={[2, 4]}
        style={{ top: 100, height: "120vh" }}
      />
      <CustomCursor component={png} width={30} height={30} zIndex={420} />
    </>
  );
};

export default Test;

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
  padding: 50px 20px 30px 20px;
  gap: 20px;
`;

const StatusBarBox = styled.div`
  width: 80%;
  height: 50px;
  top: 50px;
  border-radius: 20px;
  background-color: white;
`;

const StatusBar = styled.div`
  width: ${(props: StatusBarProps) => (props.count + 1) * 10}%;
  height: 50px;
  top: 50px;
  border-radius: 20px;
  transition: width 0.4s ease-in-out 0s;
  background-color: #ff6f6f;
`;

const StatusText = styled.div`
  font-weight: bold;
  color: white;
  text-align: center;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
`;

const Image = styled.div`
  width: 250px;
  height: 250px;
  border-radius: 5%;
  background-color: white;
  overflow: hidden;
  top: 80px;
`;

const TestContainer = styled.div`
  width: 75%;
  /* margin-top: 70px; */
  background-color: white;
  padding: 30px;
  font-size: 24px;
  top: 80px;
`;

const AnswerContainer = styled.div`
  width: 75%;
  background-color: #ff6f6f;
  top: 100px;
  /* display: flex; */
  /* align-items: center; */
  /* justify-content: center; */
  /* flex-direction: column; */
  gap: 40px;
  padding: 30px 10px 30px 10px;
`;

const Answer = styled.button`
  width: 80%;
  background-color: white;
  padding: 20px;
  border-style: none;
  font-size: 24px;
  border-radius: 30px;
`;
