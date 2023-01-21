import HistoryInfo from "../components/HistoryInfo";
import styled from "styled-components";

function Main() {
  return (
    <>
      <MainContainer>
        <HistoryInfo />
      </MainContainer>
    </>
  );
}

const MainContainer = styled.div`
  width: 100%;
  /* height: 80%; */
  margin: 0 auto;
`;

export default Main;
