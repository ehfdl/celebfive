import styled from "styled-components";
import HistoryCard from "./HistoryCard";
import CustomButton from "../UI/CustomButton";
import HistoryBox from "../UI/HistoryBox";
import Login from "./Login";
import { useState } from "react";
import { IHIstoryType } from "./HistoryCard";

export const HistoryInfo = (props: IHIstoryType) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const openModal = () => {
    setModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  return (
    <>
      {modalOpen && <Login setModalOpen={setModalOpen} />}
      <HistoryBox backgroundColor={"#fff"}>
        <HistoryCard>가나다라</HistoryCard>
      </HistoryBox>
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
        <CustomButton onClick={openModal}>테스트 하러가기</CustomButton>
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
