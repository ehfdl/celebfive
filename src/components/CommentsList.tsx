import React, { useState, useRef, useEffect } from "react";
import pencil from "../assets/images/copy-writing.png";
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
  userId?: string;
  comment?: string;
  creatAt?: number;
};

const CommentsList = () => {
  const [comments, setComments] = useState<CommentType[]>([]);
  const [inputComment, setInputComment] = useState("");
  const commentRef = useRef<HTMLTextAreaElement | null>(null);

  const onChnageCommentHandler = (
    event: React.FormEvent<HTMLTextAreaElement>
  ) => {
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
      userId: authService.currentUser?.email?.split("@")[0],
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
        <StyledTextArea
          placeholder="댓글을 입력해 주세요! 220자까지 작성할 수 있습니다."
          maxLength={220}
          onChange={onChnageCommentHandler}
          value={inputComment}
          ref={commentRef}
        />
        <StyledButtonDiv>
          <AddButton>
            작성하기
            <img
              src={pencil}
              style={{
                width: "25px",
                height: "22px",
              }}
            />
          </AddButton>
        </StyledButtonDiv>
      </form>
      <div>
        {comments?.map((item): JSX.Element => {
          return <Comment item={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default CommentsList;

const AddButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-radius: 0.7rem;
  height: 2.5rem;
  width: 30%;
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: #fa5151;
  background-color: whitesmoke;
  border: none;
  gap: 10px;
  filter: drop-shadow(3px 3px 3px #534a4a);
  cursor: pointer;
`;

const StyledTextArea = styled.textarea`
  resize: none;
  width: 100%;
  height: 5rem;
  border: none;
  border-radius: 0.7rem;
  padding: 10px;
  margin-bottom: 1rem;
  filter: drop-shadow(3px 3px 3px #534a4a);
`;

const StyledButtonDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
