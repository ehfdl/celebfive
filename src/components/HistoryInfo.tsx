import styled from "styled-components";
import HistoryCard from "./HistoryCard";
import CustomButton from "../UI/CustomButton";
import HistoryBox from "../UI/HistoryBox";

export const HistoryInfo = () => {
  return (
    <>
      <HistoryBox>
        <HistoryCard />
      </HistoryBox>
      <HistoryBox backgroundColor={"#23daaf"}>
        <HistoryCard />
      </HistoryBox>
      <HistoryBox backgroundColor={"#a143e8"}>
        <HistoryCard />
      </HistoryBox>
      <HistoryBox backgroundColor={"#e84343"}>
        <HistoryCard />
      </HistoryBox>
      <ButtonBox>
        <CustomButton>테스트 하러가기</CustomButton>
      </ButtonBox>
    </>
  );
};

const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1.5rem;
`;

export default HistoryInfo;
