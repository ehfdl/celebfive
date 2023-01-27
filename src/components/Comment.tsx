import React, { useState, useRef } from "react";
import { CommentType } from "./CommentsList";
import { useMutation } from "react-query";
import { editComment, EditParameterType } from "../api";
import editImg from "../assets/images/edit.png";
import deleteImg from "../assets/images/delete.png";
import styled from "styled-components";
import { authService } from "../firebase";
import ConfirmModal from "./ConfirmModal";
import AlertModal from "./AlertModal";

const Comment = ({ item }: { item: CommentType }) => {
  // 댓글 수정 인풋창 관리 state
  const [openInput, setOpenInput] = useState(false);
  // 수정, 변경할 내용을 담는 state
  const [inputEditComment, setInputEditComment] = useState(item.comment);
  // confirm 또는 alert 창을 열고 닫는 state
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [isAlertModalOpen, setIsAlertModalOpen] = useState(false);
  // 수정 또는 삭제 confirm 모달에서 텍스트를 다르게 보여줄 용도로 사용할 state
  // const [deleteCommentState, setDeleteCommentState] = useState(false);
  // const [editCommentState, setEditCommentState] = useState(false);
  //수정 할것인지 아닌지에 관한 state
  // const [isEditOk, setIsEditOk] = useState(false);
  //댓글 작성에 대한 alert인지, 댓글 수정에 관한 alert인지 구분해주는 state
  // const [writeOrEdit, setWriteOrEdit] = useState(false);

  // Comment 수정에 관련한 useMutation
  const { isLoading: isLoadingEdit, mutate: reviseComment } = useMutation(
    ["editComment", item.id],
    (body: EditParameterType) => editComment(body),
    {
      onSuccess: () => {
        console.log("수정 성공");
      },
      onError: (err) => {
        console.log("err in edit:", err);
      },
    }
  );

  const onChangeEditComment = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;

    setInputEditComment(value);
  };

  // Comment Delelte를 확인하는 Confirm Modal 오픈
  const openDeleteConfirmModal = () => {
    // setDeleteCommentState(!deleteCommentState);
    setIsConfirmModalOpen(!isConfirmModalOpen);
  };

  // Comment 수정 인풋창, 확인 버튼 활성화
  const openInputClick = () => {
    setOpenInput(!openInput);
    // const answer = window.confirm("수정하시겠습니까?");
    // if (answer) {
    //   setOpenInput(!openInput);
    // }
    // editCommentRef.current?.focus();
  };

  // Comment edit
  const onEditComment = async () => {
    if (inputEditComment === "") {
      // alert("수정할 내용이 없습니다.");
      setIsAlertModalOpen(!isAlertModalOpen);
      setOpenInput(!openInput);
      return;
    }

    let editObj = {};

    Object.assign(editObj, { comment: inputEditComment });

    try {
      await reviseComment({ commentId: item.id, editObj });
      setInputEditComment("");
      setOpenInput(!openInput);
      alert("수정이 완료되었습니다.");
    } catch (error) {
      console.log("에러입니다.", error);
    }
  };

  return (
    <CommentContainer key={item.id}>
      <UserIdContianer>
        <div>
          <UserId>{item.userId ? item.userId : "익명사용자"}</UserId>
          <UserId>{`(${item.nickName ? item.nickName : "NickName"})`}</UserId>
        </div>
        <ImgContainer>
          {authService.currentUser?.email?.split("@")[0] === item.userId ? (
            <ImgStyled src={deleteImg} onClick={openDeleteConfirmModal} />
          ) : null}

          {/* 처음에 수정 이미지를 클릭하면 openInput의 불린 값을 변경하여 comment가 있던 자리에 input창이 생성되고, 이미지의 onClick에 onEditComment 함수를 실행하도록 바꿔준다. */}
          {authService.currentUser?.email?.split("@")[0] === item.userId ? (
            openInput ? (
              <ImgStyled src={editImg} onClick={onEditComment} />
            ) : (
              <ImgStyled src={editImg} onClick={openInputClick} />
            )
          ) : null}
        </ImgContainer>
      </UserIdContianer>

      {openInput ? (
        <input onChange={onChangeEditComment} value={inputEditComment} />
      ) : (
        <CommentText>{item.comment}</CommentText>
        /* <div>{new Date(item.creatAt).toLocaleDateString("kr")}</div> */
      )}
      {/* Confirm에 관련된 모달 */}
      {isConfirmModalOpen ? (
        <ConfirmModal
          isConfirmModalOpen={isConfirmModalOpen}
          setIsConfirmModalOpen={setIsConfirmModalOpen}
          item={item}
        />
      ) : null}
      {isAlertModalOpen ? (
        <AlertModal
          isAlertModalOpen={isAlertModalOpen}
          setIsAlertModalOpen={setIsAlertModalOpen}
        >
          수정할 내용이 없습니다.
        </AlertModal>
      ) : null}
    </CommentContainer>
  );
};

export default Comment;

const ImgStyled = styled.img`
  width: 2rem;
  height: 2rem;
  cursor: pointer;
  &:hover {
    scale: 1.1;
  }
`;

const CommentContainer = styled.div`
  padding: 10px;
  border: 1px solid black;
  border-top: none;
  border-right: none;
  border-left: none;
  margin-bottom: 2rem;
`;

const UserIdContianer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const ImgContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 5rem;
  /* background-color: green; */
`;

const UserId = styled.span`
  font-weight: bold;
`;

const CommentText = styled.span`
  font-size: large;
`;
