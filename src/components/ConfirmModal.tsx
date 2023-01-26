import React from "react";
import styled from "styled-components";
import { Container, ModalContainer } from "./Modal";
import alertImg from "../assets/images/exclamation-mark.png";
import { deleteComment } from "../api";
import { useMutation } from "react-query";
import { CommentType } from "./CommentsList";

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
          <ModalContainer>
            댓글을 삭제하고 있습니다! 조금만 기다려주세요!
          </ModalContainer>
        ) : (
          <ModalContainer>
            <img src={alertImg} style={{ width: "80px", height: "80px" }} />
            <ModalTitle>해당 댓글을 삭제하시겠습니까?</ModalTitle>
            <ModalButtonDiv>
              <button onClick={clickDeleteComment}>YES</button>
              <button onClick={closeConfirmModal}>NO</button>
            </ModalButtonDiv>
          </ModalContainer>
        )}
      </Container>
    </>
  );
};

export default ConfirmModal;

const ModalTitle = styled.p``;

const ModalButtonDiv = styled.div`
  margin-top: 2rem;
`;
