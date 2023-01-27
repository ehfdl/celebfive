import React, { useState } from "react";
import styled from "styled-components";
import { useEffect } from "react";
import AA from "../test.json";
import { useNavigate } from "react-router-dom";
import Snowfall from "react-snowfall";

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
            <ImgObject src={AA.questions[count].image} />
          </Image>
          <TestContainer>{AA.questions[count].question}</TestContainer>
          <AnswerContainer>
            <AnswerBox>
              <Answer
                onClick={onClickHandler}
                value={AA.questions[count].score01[1]}
              >
                {AA.questions[count].score01[0]}
              </Answer>
            </AnswerBox>

            <AnswerBox>
              <Answer
                onClick={onClickHandler}
                value={AA.questions[count].score02[1]}
              >
                {AA.questions[count].score02[0]}
              </Answer>
            </AnswerBox>
          </AnswerContainer>
        </Wrap>
      </BackGround>
      <Snowfall
        color="#ff6f6f"
        snowflakeCount={50}
        speed={[0.5, 1]}
        radius={[2, 4]}
        style={{ top: 100, height: "85%" }}
      />
    </>
  );
};

export default Test;

const BackGround = styled.div`
  max-width: 100vw;
  width: 100%;
  padding: 30px;
  background-color: #fcdddd;
  display: flex;
  justify-content: center;
  @media ${(props) => props.theme.mobile} {
    width: 375px;
    height: 600px;
  }
`;

const Wrap = styled.div`
  max-width: 1000px;
  width: 100%;
  background-color: white;
  border: 4px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 20px 30px 20px;
  border-radius: 20px;
  gap: 20px;
  @media ${(props) => props.theme.mobile} {
    padding: 40px 10px 30px 10px;
  }
`;

const StatusBarBox = styled.div`
  width: 80%;
  height: 50px;
  top: 50px;
  border-radius: 20px;
  background-color: #eee;
  @media ${(props) => props.theme.mobile} {
    height: 20px;
  }
`;

const StatusBar = styled.div`
  width: ${(props: StatusBarProps) => (props.count + 1) * 10}%;
  height: 50px;
  top: 50px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: width 0.4s ease-in-out 0s;
  background-color: #ff6f6f;
  @media ${(props) => props.theme.mobile} {
    height: 20px;
  }
`;

const StatusText = styled.div`
  font-weight: bold;
  color: white;
  text-align: center;
  @media ${(props) => props.theme.mobile} {
    display: none;
  }
`;

const Image = styled.div`
  width: 70%;
  height: 250px;
  border-radius: 10px;
  background-color: white;
  overflow: hidden;

  top: 80px;
  @media ${(props) => props.theme.mobile} {
    width: 60%;
    height: 180px;
  }
`;

const ImgObject = styled.img`
  object-fit: contain;
  @media ${(props) => props.theme.mobile} {
    object-fit: fill;
  }
`;

const TestContainer = styled.div`
  width: 75%;
  line-height: 40px;
  background-color: #eee;
  padding: 30px;
  font-size: 24px;
  border-radius: 3px;
  text-align: center;
  white-space: pre-wrap;
  top: 80px;
  @media ${(props) => props.theme.mobile} {
    font-size: 10px;
    line-height: 15px;
    padding: 10px;
  }
`;

const AnswerContainer = styled.div`
  width: 75%;
  background-color: #ff6f6f;
  top: 100px;
  gap: 40px;
  padding: 30px 10px 30px 10px;
  border-radius: 5px;
  @media ${(props) => props.theme.mobile} {
    padding: 15px 5px 15px 5px;
  }
`;

const AnswerBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  margin-bottom: 20px;
  @media ${(props) => props.theme.mobile} {
    margin-top: 0;
    margin-bottom: 5px;
  }
`;

const Answer = styled.button`
  width: 80%;
  background-color: white;
  padding: 20px;
  border-style: none;
  border-radius: 20px;
  font-size: 24px;
  white-space: pre-wrap;
  border-radius: 30px;
  &:hover {
    width: 85%;
    box-shadow: 1px 1px 20px black;
  }
  @media ${(props) => props.theme.mobile} {
    font-size: 8px;
    padding: 10px;
    border-radius: 10px;
  }
`;
