import React from "react";
import styled from "styled-components";
import { Fade } from "react-awesome-reveal";
import data from "../test.json";

export interface ICardType {
  children?: string | string[];
  title?: string;
  source_text?: string[];
  source?: string;
  text?: string;
}

export const HistoryCard = (props: ICardType) => {
  return (
    <>
      <Fade
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <HistoryCardSection>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus
          dicta temporibus debitis earum, modi perferendis dolores praesentium
          natus corrupti, reprehenderit quia cum provident amet, ea esse itaque
          labore magnam iusto? Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Accusamus dicta temporibus debitis earum, modi
          perferendis dolores praesentium natus corrupti, reprehenderit quia cum
          provident amet, ea esse itaque labore magnam iusto? Lorem ipsum dolor
          sit, amet consectetur adipisicing elit. Accusamus dicta temporibus
          debitis earum, modi perferendis dolores praesentium natus corrupti,
          reprehenderit quia cum provident amet, ea esse itaque labore magnam
          iusto? Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Accusamus dicta temporibus debitis earum, modi perferendis dolores
          praesentium natus corrupti, reprehenderit quia cum provident amet, ea
          esse itaque labore magnam iusto? Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Accusamus dicta temporibus debitis
          earum, modi perferendis dolores praesentium natus corrupti,
          reprehenderit quia cum provident amet, ea esse itaque labore magnam
          iusto? Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Accusamus dicta temporibus debitis earum, modi perferendis dolores
          praesentium natus corrupti, reprehenderit quia cum provident amet, ea
          esse itaque labore magnam iusto? Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Accusamus dicta temporibus debitis
          earum, modi perferendis dolores praesentium natus corrupti,
          reprehenderit quia cum provident amet, ea esse itaque labore magnam
          iusto? Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Accusamus dicta temporibus debitis earum, modi perferendis dolores
          praesentium natus corrupti, reprehenderit quia cum provident amet, ea
          esse itaque labore magnam iusto? Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Accusamus dicta temporibus debitis
          earum, modi perferendis dolores praesentium natus corrupti,
          reprehenderit quia cum provident amet, ea esse itaque labore magnam
          iusto? Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Accusamus dicta temporibus debitis earum, modi perferendis dolores
          praesentium natus corrupti, reprehenderit quia cum provident amet, ea
          esse itaque labore magnam iusto? Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Accusamus dicta temporibus debitis
          earum, modi perferendis dolores praesentium natus corrupti,
          reprehenderit quia cum provident amet, ea esse itaque labore magnam
          iusto? Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Accusamus dicta temporibus debitis earum, modi perferendis dolores
          praesentium natus corrupti, reprehenderit quia cum provident amet, ea
          esse itaque labore magnam iusto? Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Accusamus dicta temporibus debitis
          earum, modi perferendis dolores praesentium natus corrupti,
          reprehenderit quia cum provident amet, ea esse itaque labore magnam
          iusto? Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Accusamus dicta temporibus debitis earum, modi perferendis dolores
          praesentium natus corrupti, reprehenderit quia cum provident amet, ea
          esse itaque labore magnam iusto? Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Accusamus dicta temporibus debitis
          earum, modi perferendis dolores praesentium natus corrupti,
          reprehenderit quia cum provident amet, ea esse itaque labore magnam
          iusto? Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Accusamus dicta temporibus debitis earum, modi perferendis dolores
          praesentium natus corrupti, reprehenderit quia cum provident amet, ea
          esse itaque labore magnam iusto? Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Accusamus dicta temporibus debitis
          earum, modi perferendis dolores praesentium natus corrupti,
          reprehenderit quia cum provident amet, ea esse itaque labore magnam
          iusto? Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Accusamus dicta temporibus debitis earum, modi perferendis dolores
          praesentium natus corrupti, reprehenderit quia cum provident amet, ea
          esse itaque labore magnam iusto? Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Accusamus dicta temporibus debitis
          earum, modi perferendis dolores praesentium natus corrupti,
          reprehenderit quia cum provident amet, ea esse itaque labore magnam
          iusto?
        </HistoryCardSection>
      </Fade>
    </>
  );
};

const HistoryCardSection = styled.div`
  width: 80%;
  height: 80%;
  padding: 5rem;
`;

export default HistoryCard;
