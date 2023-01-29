import React, { useState, useRef, useEffect } from "react";
import {
  AlertModalType,
  CommentType,
  AlertModalWithItemType,
} from "./CommentsList";
import { useMutation } from "react-query";
import { editComment, EditParameterType } from "../api";
import editImg from "../assets/images/edit.png";
import deleteImg from "../assets/images/delete.png";
import styled from "styled-components";
import { authService } from "../firebase";
import ConfirmModal from "./ConfirmModal";
import AlertModal from "./AlertModal";

const Comment = (props: AlertModalWithItemType) => {
  // props
  const {
    isAlertModalOpen,
    isAlertModalOpen2,
    isNoComment,
    item,
    isEqualEdit,
    isNoEidt,
    setIsAlertModalOpen,
    setIsAlertModalOpen2,
    setIsEqualEdit,
    setIsNoComment,
    setIsNoEdit,
  } = props;

  // 댓글 수정 인풋창 관리 state
  const [openInput, setOpenInput] = useState(false);

  // 수정, 변경할 내용을 담는 state
  const [inputEditComment, setInputEditComment] = useState(item.comment);

  // confirm 또는 alert 창을 열고 닫는 state
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);

  // Comment 수정에 관련한 useMutation
  const { mutate: reviseComment } = useMutation(
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
    setIsConfirmModalOpen(!isConfirmModalOpen);
  };

  // Comment 수정 인풋창, 확인 버튼 활성화
  const openInputClick = () => {
    setOpenInput(!openInput);
  };

  // Comment edit
  const onEditComment = async () => {
    setInputEditComment(item.comment);

    if (inputEditComment === item.comment) {
      setIsEqualEdit(!isEqualEdit);
      setIsAlertModalOpen2(!isAlertModalOpen2);
      setOpenInput(!openInput);
      return;
    }

    if (!inputEditComment) {
      setIsNoEdit(false);
      setIsAlertModalOpen2(!isAlertModalOpen2);
      setOpenInput(!openInput);
      return;
    }

    let editObj = {};

    Object.assign(editObj, { comment: inputEditComment });

    try {
      await reviseComment({ commentId: item.id, editObj });
      setInputEditComment("");
      setIsNoEdit(!isNoEidt);
      setIsAlertModalOpen2(!isAlertModalOpen2);
      setOpenInput(!openInput);
    } catch (error) {
      console.log("에러입니다.", error);
    }
  };

  useEffect(() => {
    setInputEditComment(item.comment);
  }, [isAlertModalOpen2]);

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
        <InputStyle
          onChange={onChangeEditComment}
          defaultValue={item.comment}
        />
      ) : (
        <CommentText>{item.comment}</CommentText>
      )}
      {/* Confirm에 관련된 모달 */}
      {isConfirmModalOpen ? (
        <ConfirmModal
          isConfirmModalOpen={isConfirmModalOpen}
          setIsConfirmModalOpen={setIsConfirmModalOpen}
          item={item}
        />
      ) : null}
      {isAlertModalOpen2 ? (
        <AlertModal
          isAlertModalOpen={isAlertModalOpen}
          isAlertModalOpen2={isAlertModalOpen2}
          isNoComment={isNoComment}
          isNoEidt={isNoEidt}
          isEqualEdit={isEqualEdit}
          setIsAlertModalOpen={setIsAlertModalOpen}
          setIsAlertModalOpen2={setIsAlertModalOpen2}
          setIsNoComment={setIsNoComment}
          setIsNoEdit={setIsNoEdit}
          setIsEqualEdit={setIsEqualEdit}
        >
          {isEqualEdit
            ? "변경 내용이 없습니다."
            : isNoEidt
            ? "수정이 완료되었습니다."
            : "내용을 입력해 주세요!"}
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
`;

const UserId = styled.span`
  font-weight: bold;
  font-size: 15px;
  @media ${(props) => props.theme.mobile} {
    font-size: 10px;
  }
`;

const CommentText = styled.span`
  font-size: large;
  @media ${(props) => props.theme.mobile} {
    font-size: 15px;
  }
`;

const InputStyle = styled.input`
  height: 2.5rem;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.9);
  border: none;
  border-radius: 3px;
  filter: drop-shadow(3px 3px 3px #c42c2c);
  padding: 0.5rem;
`;
