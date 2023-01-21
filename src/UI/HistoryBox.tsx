import styled from "styled-components";

interface IHistoryBoxType {
  backgroundColor?: string;
  height?: string;
  width?: string;
  children?: JSX.Element | undefined;
}

export const HistoryBox = (props: IHistoryBoxType) => {
  return (
    <HistoryBoxSection backgroundColor={props.backgroundColor}>
      {props.children}
    </HistoryBoxSection>
  );
};

const HistoryBoxSection = styled.div<IHistoryBoxType>`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.backgroundColor || "#ffe818"};
  height: ${(props) => props.height || "50%"};
  width: ${(props) => props.width || "100%"};
  align-items: center;
  justify-content: center;
  padding: 50px;
  cursor: pointer;
`;

export default HistoryBox;
