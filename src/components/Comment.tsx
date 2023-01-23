import React, { useState } from "react";
import { CommentType } from "./CommentsList";
import { useMutation } from "react-query";
import { deleteComment, editComment, EditParameterType } from "../api";
import editImg from "../assets/images/edit.png";
import deleteImg from "../assets/images/delete.png";
import styled from "styled-components";

const Comment = ({ item }: { item: CommentType }) => {
  const [openInput, setOpenInput] = useState(false);
  const [inputEditComment, setInputEditComment] = useState("");

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

  const { isLoading: isLoadingEdit, mutate: reviseComment } = useMutation(
    ["editComment", item.id],
    (body: EditParameterType) => editComment(body),
    {
      onSuccess: () => {
        console.log("수정성공");
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

  const onDeleteComment = async () => {
    const answer = window.confirm("정말 삭제하시겠습니까?");
    if (answer) {
      try {
        await removeComment(item.id);
        alert("삭제가 완료되었습니다.");
      } catch (error) {
        console.log("에러입니다.", error);
      }
    } else {
      alert("삭제가 취소되었습니다.");
    }
  };

  // Comment 수정 인풋창, 확인 버튼 활성화
  const openInputClick = () => {
    const answer = window.confirm("수정하시겠습니까?");
    if (answer) {
      setOpenInput(!openInput);
    }
  };

  // Comment edit
  const onEditComment = async () => {
    if (inputEditComment === "") {
      alert("수정할 내용이 없습니다.");
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
    <div key={item.id}>
      <span>ID</span>
      {openInput ? (
        <input onChange={onChangeEditComment} value={inputEditComment} />
      ) : (
        <span>{item.comment}</span>
        /* <div>{new Date(item.creatAt).toLocaleDateString("kr")}</div> */
      )}

      <ImgStyled src={deleteImg} onClick={onDeleteComment} />
      {openInput ? (
        <ImgStyled src={editImg} onClick={onEditComment} />
      ) : (
        <ImgStyled src={editImg} onClick={openInputClick} />
      )}
    </div>
  );
};

export default Comment;

const ImgStyled = styled.img`
  width: 25px;
  height: 25px;
  cursor: pointer;
`;
