import styled from "styled-components";
import CustomButton from "../UI/CustomButton";
import HistoryBox from "../UI/HistoryBox";
import Modal from "./Modal";
import { authService } from "../firebase";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Fade, Slide } from "react-awesome-reveal";
import AA from "../test.json";
import { IHistoryBoxType } from "../UI/HistoryBox";
import weight from "../assets/images/weight.png";
import hanbok from "../assets/images/hanbok.png";
import hands from "../assets/images/Hands.png";
import japan from "../assets/images/japan.png";
import building from "../assets/images/building.png";
import factory from "../assets/images/factory.png";
import arrow from "../assets/images/arrow.png";
import arrowss from "../assets/images/arrow2.png";

import Location from "./Location";

export interface DataType {
  id: number;
  title: string;
  source_text: string[];
  source: string;
  text: string;
  item: string | number;
}

interface ItemType {
  title?: string;
  source_text?: string[];
  source?: string;
  text?: string;
  id?: number;
  Fade?: React.FC<typeof Fade>;
  Colors: string[];
  backgroundColor: string | string[];
}

const HistoryInfo = (props: ItemType | IHistoryBoxType) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [isTopButtonShow, setIsTopButtonShow] = useState<boolean>(false);

  const datas = AA.description;
  const navigate = useNavigate();

  const openModal = () => {
    if (authService.currentUser) {
      navigate("/test");
    }
    if (!authService.currentUser) {
      setModalOpen(true);
      document.body.style.overflow = "hidden";
    }
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
      {modalOpen && <Modal setModalOpen={setModalOpen} />}

      {datas.map((item) => {
        return (
          <HistoryBox backgroundColor={item.backgroundColor} key={item.id}>
            <FadeStyle>
              <HistoryCardSection>
                <HistoryInfoTitle>{item.title}</HistoryInfoTitle>
                <HistoryInfoTtext>{item.text}</HistoryInfoTtext>
                <HistorySourceWrap>
                  <div>
                    <div>{item.source_text}</div>
                    <div>{item.source}</div>
                  </div>
                  <div>
                    {item.longitude === 0 ? null : (
                      <Location
                        longitude={item.longitude}
                        latitude={item.latitude}
                        marker={item.marker}
                      />
                    )}
                  </div>
                </HistorySourceWrap>
              </HistoryCardSection>
            </FadeStyle>
          </HistoryBox>
        );
      })}

      <SlideImgStyle direction="up">
        <ImageOne src={weight} />
      </SlideImgStyle>

      <SlideImgStyleTwo direction="up">
        <ImageOne src={hands} />
      </SlideImgStyleTwo>

      <SlideImgStyleThree direction="up">
        <ImageOne src={hanbok} />
      </SlideImgStyleThree>

      <SlideImgStyleFour direction="up">
        <ImageOne src={japan} />
      </SlideImgStyleFour>

      <SlideImgStyleFive direction="up">
        <ImageOne src={building} />
      </SlideImgStyleFive>

      <SlideImgStyleSix direction="up">
        <ImageOne src={factory} />
      </SlideImgStyleSix>

      <FadeStar>
        <ImageTwo src={arrowss} />
      </FadeStar>

      <ButtonBox>
        <StartTestButton onClick={openModal}>테스트 하러가기</StartTestButton>
      </ButtonBox>
      <ScrollTopButtonContainer>
        {isTopButtonShow ? (
          <ScrollTopButton onClick={ScrollTop}>▲</ScrollTopButton>
        ) : null}
      </ScrollTopButtonContainer>
    </>
  );
};

const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ScrollTopButtonContainer = styled.div`
  position: fixed;
  bottom: 5%;
  right: 3%;
  z-index: 30;
`;

const ScrollTopButton = styled(CustomButton)`
  border: none;
  background-color: rgba(0, 0, 0, 0.3);
  color: #000;
  font-weight: bold;
`;

const HistoryCardSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 60%;
  /* height: 100vh; */
  background-color: #fff;
  padding: 2rem;
  border-radius: 20px;
  border: 4px solid black;
  line-height: 36px;
  padding-bottom: 4.5rem;
`;

const HistoryInfoTitle = styled.div`
  font-size: 42px;
  font-weight: 800;
  margin: 1rem;
  margin-bottom: 2rem;
`;

const HistoryInfoTtext = styled.div`
  font-size: 22px;
  word-break: keep-all;
  /* line-height: 36px; */
`;

const HistorySourceWrap = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 1rem;
  font-size: 1.3rem;
  color: #504949;
  word-break: keep-all;
`;

const StartTestButton = styled(CustomButton)`
  border: none;
  border-radius: 0.3rem;
  width: 15rem;
  height: 6rem;
  padding: 0.5rem;
  font-size: 1.3rem;
  font-weight: bold;
`;

const ImageOne = styled.img`
  width: 200px;
  height: 200px;
`;

const ImageTwo = styled.img`
  width: 200px;
  height: 200px;
`;

const FadeStyle = styled(Fade)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const SlideImgStyle = styled(Slide)`
  position: absolute;
  top: 1500px;
  left: 100px;
`;

const SlideImgStyleTwo = styled(Slide)`
  position: absolute;
  top: 1000px;
  right: 300px;
`;

const SlideImgStyleThree = styled(Slide)`
  position: absolute;
  top: 2000px;
  right: 100px;
`;

const SlideImgStyleFour = styled(Slide)`
  position: absolute;
  top: 2500px;
  left: 100px;
`;

const SlideImgStyleFive = styled(Slide)`
  position: absolute;
  top: 3000px;
  right: 300px;
`;

const SlideImgStyleSix = styled(Slide)`
  position: absolute;
  top: 3500px;
  left: 100px;
`;

const FadeStar = styled(Fade)`
  position: absolute;
  top: 4330px;
  right: 830px;
  z-index: 10;
`;

export default HistoryInfo;
