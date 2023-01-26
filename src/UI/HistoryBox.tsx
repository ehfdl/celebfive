import styled from "styled-components";

export interface IHistoryBoxType {
  backgroundColor?: string | string[];
  height?: string;
  width?: string;
  children?: JSX.Element | undefined | string | string[];
  Element?: Element[] | string | string[];
  operator?: JSX.Element;
  Colors?: string | string[];
}

export const HistoryBox = (props: IHistoryBoxType) => {
  return (
    <HistoryBoxSection backgroundColor={props.backgroundColor}>
      {props.children}
    </HistoryBoxSection>
  );
};

const HistoryBoxSection = styled.div<IHistoryBoxType>`
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.backgroundColor || "#fff"};
  height: ${(props) => props.height || "100vh"};
  width: ${(props) => props.width || "100%"};
  align-items: center;
  justify-content: center;
  padding: 50px;
  @media ${(props) => props.theme.desktop} {
    width: 100%;
    margin: 0 auto;
    font-size: 10rem;
  }
  @media ${(props) => props.theme.tablet} {
    width: 100%;
    margin: 0 auto;
    font-size: 5rem;
  }
  @media ${(props) => props.theme.mobile} {
    width: 80%;
    margin: 0 auto;
    font-size: 1rem;
  }
`;

export default HistoryBox;
