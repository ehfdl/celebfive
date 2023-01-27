import React from "react";
import styled from "styled-components";
import { Container, ModalContainer } from "./Modal";
import alertImg from "../assets/images/exclamation-mark.png";
import { deleteComment } from "../api";
import { useMutation } from "react-query";
import { CommentType } from "./CommentsList";
import { AlertImgStyle } from "./AlertModal";

const ConfirmModal = ({
  item,
  isConfirmModalOpen,
  setIsConfirmModalOpen,
}: {
  item: CommentType;
  isConfirmModalOpen: boolean;
  setIsConfirmModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  // 모달창 닫기
  const closeConfirmModal = () => {
    setIsConfirmModalOpen(!isConfirmModalOpen);
  };

  // useMutation (delete 기능)
  const { isLoading: isLoadingDeleting, mutate: removeComment } = useMutation(
    ["deleteComment", item.id],
    (body: string) => deleteComment(body),
    {
      onSuccess: () => {
        console.log("삭제성공");
      },
      onError: (err) => {
        console.log("err in delete:", err);
      },
    }
  );

  // 댓글 삭제하기
  const clickDeleteComment = async () => {
    try {
      await removeComment(item.id);
    } catch (error) {
      alert(`에러입니다. 에러 내용: ${error}`);
    }
  };

  return (
    <>
      <Container>
        {isLoadingDeleting ? (
          /* '로딩 화면'에서 안내 메시지 */
          <ConfirmModalContainer>
            댓글을 삭제하고 있습니다! 조금만 기다려주세요!
          </ConfirmModalContainer>
        ) : (
          <ConfirmModalContainer>
            <AlertImgStyle src={alertImg} />
            <ConfirmModalTitle>댓글을 삭제하시겠습니까?</ConfirmModalTitle>
            <ConfirmModalButtonDiv>
              <ConfirmModalButton onClick={clickDeleteComment}>
                YES
              </ConfirmModalButton>
              <ConfirmModalButton onClick={closeConfirmModal}>
                NO
              </ConfirmModalButton>
            </ConfirmModalButtonDiv>
          </ConfirmModalContainer>
        )}
      </Container>
    </>
  );
};

export default ConfirmModal;

const ConfirmModalContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  border: 1px black solid;
  align-items: center;
  justify-content: center;
  padding: 10px;
  width: 20rem;
  height: 20rem;
  background-color: white;
  z-index: 1000;
`;

const ConfirmModalTitle = styled.p`
  font-size: 1.2rem;
`;

const ConfirmModalButtonDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 1.8rem;
  width: 11rem;
`;

const ConfirmModalButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  width: 4rem;
  height: 2rem;
  cursor: pointer;
  &:hover {
    background-color: #e76662;
    color: white;
  }
`;
