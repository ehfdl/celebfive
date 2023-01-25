import styled from "styled-components";
import CustomButton from "../UI/CustomButton";
import HistoryBox from "../UI/HistoryBox";
import Modal from "./Modal";
import { authService } from "../firebase";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import AA from "../test.json";
import { IHistoryBoxType } from "../UI/HistoryBox";
import weight from "../assets/images/weight.png";

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

export const HistoryInfo = (props: ItemType | IHistoryBoxType) => {
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
                <div>{item.title}</div>
                <div>{item.text}</div>
                <div>{item.source}</div>
                <div>{item.source_text}</div>
              </HistoryCardSection>
            </FadeStyle>
          </HistoryBox>
        );
      })}

      <Aa>
        <Ii src={weight} />
      </Aa>
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
  margin-top: 1.5rem;
  z-index: 0;
`;

const ScrollTopButtonContainer = styled.div`
  position: fixed;
  bottom: 5%;
  right: 3%;
`;

const ScrollTopButton = styled(CustomButton)`
  border: none;
  background-color: rgba(0, 0, 0, 0.3);
  color: #000;
  font-weight: bold;
`;

const HistoryCardSection = styled.div`
  width: 80%;
  height: 80%;
  background-color: #fff;
  padding: 5rem;
  border-radius: 20px;
  border: 4px solid black;
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

const Ii = styled.img`
  width: 100px;
  height: 100px;
`;

const FadeStyle = styled(Fade)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const Aa = styled(Fade)`
  position: absolute;
  top: 1500px;
  /* width: 100px; */
  /* height: 100px; */
`;

export default HistoryInfo;
