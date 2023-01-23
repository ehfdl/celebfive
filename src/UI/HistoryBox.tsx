import styled from "styled-components";

interface IHistoryBoxType {
  backgroundColor?: string;
  height?: string;
  width?: string;
  children?: JSX.Element | undefined | string | string[];
  Element?: Element[] | string | string[];
  operator?: JSX.Element;
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
  height: ${(props) => props.height || "50%"};
  width: ${(props) => props.width || "100%"};
  align-items: center;
  justify-content: center;
  padding: 50px;
`;

export default HistoryBox;
