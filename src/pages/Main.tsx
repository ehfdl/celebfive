import HistoryInfo from "../components/HistoryInfo";
import styled from "styled-components";
import { Fade } from "react-awesome-reveal";

function Main() {
  return (
    <MainContainer>
      <HistoryInfo />
    </MainContainer>
  );
}

const MainContainer = styled.div`
  width: 100%;
  height: 2000px;
  margin: 0 auto;
`;

export default Main;
