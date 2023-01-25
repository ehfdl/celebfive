import styled from "styled-components";
import { Fade } from "react-awesome-reveal";
import AA from "../test.json";

export interface ICardType {
  children?: string | string[];
  title?: string;
  source_text?: string[];
  source?: string;
  text?: string;
}

export const HistoryCard = () => {
  const datas = AA.description;

  return (
    <Fade
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}>
      <HistoryCardSection>
        <HistoryContent>
          {/* {datas.map((data) => (
            <>
              <div>{data.id}</div>
              <div>{data.source}</div>
              <div>{data.text}</div>
              <div>{data.title}</div>
            </>
          ))} */}
        </HistoryContent>
      </HistoryCardSection>
    </Fade>
  );
};

const HistoryCardSection = styled.div`
  width: 80%;
  height: 80%;
  padding: 5rem;
`;

const HistoryContent = styled.div``;

export default HistoryCard;
