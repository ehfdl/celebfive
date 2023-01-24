import React, { useState, useRef, useEffect } from "react";
import pencil from "../assets/images/pencil.png";
import { dbService, authService } from "../firebase";
import {
  addDoc,
  collection,
  query,
  orderBy,
  onSnapshot,
} from "firebase/firestore";
import styled from "styled-components";
import Comment from "./Comment";

export type CommentType = {
  id: string;
  comment?: string;
  creatAt?: number;
};

const CommentsList = () => {
  const [comments, setComments] = useState<CommentType[]>([]);
  const [inputComment, setInputComment] = useState("");
  const commentRef = useRef<HTMLInputElement | null>(null);

  const onChnageCommentHandler = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setInputComment(value);
  };

  // Comment Create
  const onSubmitComment = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (inputComment === "") {
      alert("내용을 입력해주세요!");
      commentRef.current?.focus();
      return true;
    }

    const newComment = {
      comment: inputComment,
      creatAt: Date.now(),
      // userId: authService.currentUser?.uid,
    };

    await addDoc(collection(dbService, "comments"), newComment);
    setInputComment("");
  };

  // Comment Read
  const getComments = () => {
    const q = query(
      collection(dbService, "comments"),
      orderBy("creatAt", "desc")
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const newComments = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setComments(newComments);
    });

    return unsubscribe;
  };

  useEffect(() => {
    getComments();
  }, []);

  return (
    <div>
      <form onSubmit={onSubmitComment}>
        <input
          type="text"
          placeholder="댓글을 입력해 주세요!"
          maxLength={220}
          onChange={onChnageCommentHandler}
          value={inputComment}
          ref={commentRef}
        />
        <AddButton>
          <img src={pencil} />
        </AddButton>
        <div>
          {comments?.map((item): JSX.Element => {
            return <Comment item={item} key={item.id} />;
          })}
        </div>
      </form>
    </div>
  );
};

export default CommentsList;

const AddButton = styled.button`
  border-radius: 3px;
  height: 30px;
  width: 30px;
  cursor: pointer;
`;
