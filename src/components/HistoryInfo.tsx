import styled from "styled-components";
import HistoryCard from "./HistoryCard";
import CustomButton from "../UI/CustomButton";
import HistoryBox from "../UI/HistoryBox";
import Login from "./Login";
import { useEffect, useState } from "react";
// import data from "../test.json";
import imageA from "../assets/images/weight.png";
import { Fade } from "react-awesome-reveal";

interface ItemType {
  title?: string;
  source_text?: string[];
  source?: string;
  text?: string;
  id?: number;
  Fade?: React.FC<typeof Fade>;
}

export const HistoryInfo = (props: ItemType) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [isTopButtonShow, setIsTopButtonShow] = useState<boolean>(false);

  const openModal = () => {
    setModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  // 스크롤을 위로 올려주는 버튼 함수입니다
  const ScrollTop = () => {
    window.scroll({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleTopButtonShow = () => {
      if (window.scrollY > 30) {
        setIsTopButtonShow(true);
      } else {
        setIsTopButtonShow(false);
      }
    };

    window.addEventListener("scroll", handleTopButtonShow);
    return () => {
      window.removeEventListener("scroll", handleTopButtonShow);
    };
  }, []);

  return (
    <>
      {modalOpen && <Login setModalOpen={setModalOpen} />}
      {/* {data.description.map((item: ItemType) => {
        return (
          <>
            <div>{item.title}</div>;<div>{item.text}</div>;
            <div>{item.source_text}</div>;
          </>
        );
      })} */}
      <HistoryBox>
        <HistoryCard />
      </HistoryBox>
      <HistoryBox backgroundColor={"#ffe818"}>
        <>
          <Fade delay={500} duration={2000}>
            <ImageContainer>
              <img src={imageA} />
            </ImageContainer>
          </Fade>
          <HistoryCard />
        </>
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
      <HistoryBox>
        <HistoryCard />
      </HistoryBox>
      <ButtonBox>
        <CustomButton onClick={openModal}>테스트 하러가기</CustomButton>
      </ButtonBox>
      <ScrollTopButtonContainer>
        {isTopButtonShow ? (
          <ScrollTopButton onClick={ScrollTop}>TOP</ScrollTopButton>
        ) : null}
      </ScrollTopButtonContainer>
    </>
  );
};

const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1.5rem;
  z-index: 0;
`;

const ImageContainer = styled.div`
  position: absolute;
  left: 100px;
  top: 600px;
  width: 100px;
  height: 100px;
  z-index: 10;
  /* animation: 10s opacity 1s forwards; */
  /* transform: translate(50px, 660px); */
`;

const ScrollTopButtonContainer = styled.div`
  position: fixed;
  bottom: 5%;
  right: 3%;
`;

const ScrollTopButton = styled(CustomButton)`
  border: none;
  background-color: #fff;
  color: #000;
  font-weight: bold;
`;

export default HistoryInfo;
