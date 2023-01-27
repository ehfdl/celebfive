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

interface Iprops {
  item: number;
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
      {modalOpen && <Modal modalOpen={modalOpen} setModalOpen={setModalOpen} />}

      {datas.map((item) => {
        return (
          <HistoryBox backgroundColor={item.backgroundColor} key={item.id}>
            <FadeStyle>
              <HistoryCardSection>
                {item.title === "" ? null : (
                  <>
                    <HistoryInfoTitle>{item.title}</HistoryInfoTitle>
                    <HistoryInfoTtext>{item.text}</HistoryInfoTtext>
                  </>
                )}

                <HistorySourceWrap>
                  <div>
                    <div>{item.source_text}</div>
                    <div>{item.source}</div>
                  </div>
                  <MapBox item={item.longitude}>
                    {item.longitude === 0 ? null : (
                      <Location
                        longitude={item.longitude}
                        latitude={item.latitude}
                        marker={item.marker}
                      />
                    )}
                  </MapBox>
                </HistorySourceWrap>
              </HistoryCardSection>
              {item.source === "" ? (
                <ButtonBox>
                  <StartTestButton onClick={openModal}>
                    테스트 하러가기
                  </StartTestButton>
                </ButtonBox>
              ) : null}
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
  position: absolute;
  bottom: 100px;
  word-break: keep-all;
  @media ${(props) => props.theme.desktop} {
    margin: 0 auto;
    bottom: 60px;
  }
  @media ${(props) => props.theme.tablet} {
    margin: 0 auto;
    bottom: 45px;
  }
  @media ${(props) => props.theme.mobile} {
    margin: 0 auto;
    bottom: 27px;
  }
`;

const ScrollTopButtonContainer = styled.div`
  position: fixed;
  bottom: 5%;
  right: 3%;
  z-index: 30;
  @media ${(props) => props.theme.desktop} {
    scale: 1.5;
  }
  @media ${(props) => props.theme.tablet} {
    scale: 1.3;
  }
  @media ${(props) => props.theme.mobile} {
    scale: 0.8;
  }
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
  width: 70%;
  background-color: #fff;
  padding: 2rem;
  margin-top: 1rem;
  border-radius: 20px;
  border: 4px solid black;
  line-height: 35px;
  box-sizing: border-box;

  @media ${(props) => props.theme.desktop} {
    width: 100%;
    margin: 0 auto;
  }
  @media ${(props) => props.theme.tablet} {
    width: 100%;
    margin: 0 auto;
    line-height: 20px;
  }
  @media ${(props) => props.theme.mobile} {
    width: 100%;
    height: 90%;
    margin: 0 auto;
    line-height: 15px;
  }
`;

const HistorySourceWrap = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 1.3rem;
  justify-content: space-around;
  color: #504949;
  margin: 1rem auto;

  @media ${(props) => props.theme.desktop} {
    font-size: 15px;
    width: 100%;
    margin-bottom: 3rem;
  }
  @media ${(props) => props.theme.tablet} {
    flex-direction: column;
    font-size: 10px;
    width: 100%;
    line-height: 20px;
    margin-bottom: 1.5rem;
  }
  @media ${(props) => props.theme.mobile} {
    flex-direction: column;
    font-size: 10px;
    width: 100%;
    line-height: 15px;
    margin-bottom: 1.3rem;
  }
`;

const HistoryInfoTitle = styled.div`
  font-size: 42px;
  font-weight: 800;
  margin: 1rem;
  margin-bottom: 2rem;

  @media ${(props) => props.theme.desktop} {
    font-size: 30px;
    margin: 0 auto;
  }
  @media ${(props) => props.theme.tablet} {
    font-size: 15px;
    margin: 0 auto;
    margin-bottom: 1rem;
  }
  @media ${(props) => props.theme.mobile} {
    font-size: 13px;
    margin: 0 auto;
    margin-bottom: 0.5rem;
  }
`;

const HistoryInfoTtext = styled.div`
  font-size: 22px;
  word-break: keep-all;
  @media ${(props) => props.theme.desktop} {
    font-size: 20px;
    margin: 0 auto;
  }
  @media ${(props) => props.theme.tablet} {
    font-size: 13px;
    margin: 0 auto;
  }
  @media ${(props) => props.theme.mobile} {
    font-size: 8x;
    margin: 0 auto;
  }
`;

const StartTestButton = styled(CustomButton)`
  border: none;
  border-radius: 0.3rem;
  width: 15rem;
  height: 6rem;
  padding: 0.5rem;
  font-size: 1.3rem;
  font-weight: bold;
  background-color: #fff;
  border: 4px solid black;
  border-radius: 20px;

  @media ${(props) => props.theme.desktop} {
    width: 100%;
    height: 4rem;
    margin: 0 auto;
    border: 2px solid black;
    color: #f72c11;
  }
  @media ${(props) => props.theme.tablet} {
    width: 100%;
    height: 2.7rem;
    margin: 0 auto;
    font-size: 1rem;
    color: #f72c11;
    border: 2px solid black;
  }
  @media ${(props) => props.theme.mobile} {
    width: 100%;
    height: 2.5rem;
    margin: 0 auto;
    font-size: 0.5rem;
    color: #f72c11;
    border: 2px solid black;
  }
`;

const ImageOne = styled.img`
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
  top: 1800px;
  left: 100px;
  @media ${(props) => props.theme.desktop} {
    display: none;
  }
  @media ${(props) => props.theme.tablet} {
    display: none;
  }
  @media ${(props) => props.theme.mobile} {
    display: none;
  }
`;

const SlideImgStyleTwo = styled(Slide)`
  position: absolute;
  top: 1000px;
  right: 100px;
  @media ${(props) => props.theme.desktop} {
    display: none;
  }
  @media ${(props) => props.theme.tablet} {
    display: none;
  }
  @media ${(props) => props.theme.mobile} {
    display: none;
  }
`;

const SlideImgStyleThree = styled(Slide)`
  position: absolute;
  top: 2300px;
  right: 100px;
  @media ${(props) => props.theme.desktop} {
    display: none;
  }
  @media ${(props) => props.theme.tablet} {
    display: none;
  }
  @media ${(props) => props.theme.mobile} {
    display: none;
  }
`;

const SlideImgStyleFour = styled(Slide)`
  position: absolute;
  top: 3000px;
  left: 50px;
  @media ${(props) => props.theme.desktop} {
    display: none;
  }
  @media ${(props) => props.theme.tablet} {
    display: none;
  }
  @media ${(props) => props.theme.mobile} {
    display: none;
  }
`;

const SlideImgStyleFive = styled(Slide)`
  position: absolute;
  top: 3800px;
  right: 100px;
  @media ${(props) => props.theme.desktop} {
    display: none;
  }
  @media ${(props) => props.theme.tablet} {
    display: none;
  }
  @media ${(props) => props.theme.mobile} {
    display: none;
  }
`;

const SlideImgStyleSix = styled(Slide)`
  position: absolute;
  top: 4000px;
  left: 30px;
  @media ${(props) => props.theme.desktop} {
    display: none;
  }
  @media ${(props) => props.theme.tablet} {
    display: none;
  }
  @media ${(props) => props.theme.mobile} {
    display: none;
  }
`;

const MapBox = styled.div`
  width: ${(props: Iprops) => (props.item === 0 ? null : props.item)};
  height: 100%;
  box-sizing: border-box;
`;

export default HistoryInfo;
