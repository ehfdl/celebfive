import styled from "styled-components";
import HistoryCard from "./HistoryCard";
import CustomButton from "../UI/CustomButton";
import HistoryBox from "../UI/HistoryBox";
import Login from "./Login";
import { useState } from "react";
import { IHIstoryType } from "./HistoryCard";
import AA from "../test.json";

export interface DataType {
  id: number;
  title: string;
  source_text: string[];
  source: string;
  text: string;
}

export const HistoryInfo = (props: IHIstoryType) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const openModal = () => {
    setModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const datas = AA.description;
  // console.log(datas);

  return (
    <>
      {modalOpen && <Login setModalOpen={setModalOpen} />}
      {/* {datas.map((data) => (
        <HistoryBox backgroundColor={"#ccccff"} key={data.id}>
          <HistoryCard />
        </HistoryBox>
      ))} */}

      <HistoryBox backgroundColor={"#ffff00"}>
        <HistoryCardSection>
          {datas
            .filter((data) => {
              return data.id === 1;
            })
            .map((data) => (
              <div key={data.id}>
                <div>{data.title}</div>
                <div>{data.text}</div>
                <div>{data.source}</div>
              </div>
            ))}
        </HistoryCardSection>
      </HistoryBox>
      <HistoryBox backgroundColor={"#23daaf"}>
        <HistoryCardSection>
          {datas
            .filter((data) => {
              return data.id === 2;
            })
            .map((data) => (
              <div key={data.id}>
                <div>{data.title}</div>
                <div>{data.text}</div>
                <div>{data.source}</div>
              </div>
            ))}
        </HistoryCardSection>
      </HistoryBox>
      <HistoryBox backgroundColor={"#a143e8"}>
        <HistoryCardSection>
          {datas
            .filter((data) => {
              return data.id === 3;
            })
            .map((data) => (
              <div key={data.id}>
                <div>{data.title}</div>
                <div>{data.text}</div>
                <div>{data.source}</div>
              </div>
            ))}
        </HistoryCardSection>
      </HistoryBox>
      <HistoryBox backgroundColor={"#e84343"}>
        <HistoryCardSection>
          {datas
            .filter((data) => {
              return data.id === 4;
            })
            .map((data) => (
              <div key={data.id}>
                <div>{data.title}</div>
                <div>{data.text}</div>
                <div>{data.source}</div>
              </div>
            ))}
        </HistoryCardSection>
      </HistoryBox>
      <HistoryBox backgroundColor={"#00e6ac"}>
        <HistoryCardSection>
          {datas
            .filter((data) => {
              return data.id === 5;
            })
            .map((data) => (
              <div key={data.id}>
                <div>{data.title}</div>
                <div>{data.text}</div>
                <div>{data.source}</div>
              </div>
            ))}
        </HistoryCardSection>
      </HistoryBox>
      <HistoryBox backgroundColor={"#3333ff"}>
        <HistoryCardSection>
          {datas
            .filter((data) => {
              return data.id === 6;
            })
            .map((data) => (
              <div key={data.id}>
                <div>{data.title}</div>
                <div>{data.text}</div>
                <div>{data.source}</div>
              </div>
            ))}
        </HistoryCardSection>
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

const HistoryCardSection = styled.div`
  width: 80%;
  height: 80%;
  background-color: #fff;
  padding: 5rem;
`;

export default HistoryInfo;
