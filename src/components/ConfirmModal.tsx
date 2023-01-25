import React, { useState } from "react";
import styled from "styled-components";
import { Container, ModalContainer } from "./Modal";
import alertImg from "../assets/images/exclamation-mark.png";
import { deleteComment } from "../api";
import { useMutation } from "react-query";
import { CommentType } from "./CommentsList";
import AlertModal from "./AlertModal";

const ConfirmModal = ({
  item,
  deleteCommentState,
  editCommentState,
  isConfirmModalOpen,
  isAlertModalOpen,
  setIsConfirmModalOpen,
  setDeleteCommentState,
  setEditCommentState,
  setIsAlertModalOpen,
}: {
  item: CommentType;
  deleteCommentState: boolean;
  editCommentState: boolean;
  isConfirmModalOpen: boolean;
  isAlertModalOpen: boolean;
  setIsConfirmModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setDeleteCommentState: React.Dispatch<React.SetStateAction<boolean>>;
  setEditCommentState: React.Dispatch<React.SetStateAction<boolean>>;
  setIsAlertModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  //삭제를 할것인지 아닌지에 관한 state
  const [isDeleteOk, setIsDeleteOk] = useState(false);

  const [open, setOpen] = useState(false);

  // 모달창 닫기
  const closeConfirmModal = () => {
    setOpen(!open);
    console.log("open", open);
    setIsConfirmModalOpen(!isConfirmModalOpen);
    setDeleteCommentState(false);
    setEditCommentState(false);
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
      // alert("삭제가 완료되었습니다.");
      setOpen(!open);
      console.log("open", open);
    } catch (error) {
      console.log("에러입니다.", error);
    }
  };

  return (
    <>
      <Container>
        <ModalContainer>
          <img src={alertImg} style={{ width: "80px", height: "80px" }} />
          <ModalTitle>
            {deleteCommentState ? "해당 댓글을 삭제하시겠습니까?" : null}
          </ModalTitle>
          <ModalTitle>
            {editCommentState ? "해당 댓글을 수정하시겠습니까?" : null}
          </ModalTitle>
          <ModalButtonDiv>
            <button onClick={clickDeleteComment}>YES</button>

            <button onClick={closeConfirmModal}>NO</button>
          </ModalButtonDiv>
        </ModalContainer>
      </Container>
      {open ? (
        <AlertModal
          isAlertModalOpen={isAlertModalOpen}
          setIsAlertModalOpen={setIsAlertModalOpen}
        />
      ) : null}
    </>
  );
};

export default ConfirmModal;

const ModalTitle = styled.p``;

const ModalButtonDiv = styled.div`
  margin-top: 2rem;
`;
