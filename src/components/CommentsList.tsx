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
import AlertModal from "./AlertModal";
import { updateProfile } from "firebase/auth";

// Comment 타입 지정
export type CommentType = {
  id: string;
  userId?: string;
  comment?: string;
  creatAt?: number;
  nickName?: string;
};

// Alert Modal창 타입 지정
export interface AlertModalType {
  children: string;
  isAlertModalOpen: boolean;
  writeOrEdit: boolean;
  setIsAlertModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setWriteOrEdit: React.Dispatch<React.SetStateAction<boolean>>;
}

const CommentsList = ({ result }: { result: string }) => {
  const [comments, setComments] = useState<CommentType[]>([]);
  const [inputComment, setInputComment] = useState("");
  const commentRef = useRef<HTMLTextAreaElement | null>(null);
  const [isAlertModalOpen, setIsAlertModalOpen] = useState(false);

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
      // Alert 모달창 오픈
      setIsAlertModalOpen(!isAlertModalOpen);
      commentRef.current?.focus();
      return true;
    }

    const newComment = {
      comment: inputComment,
      creatAt: Date.now(),
      userId: authService.currentUser?.email?.split("@")[0],
      nickName: authService.currentUser?.displayName,
    };

    await addDoc(collection(dbService, "comments"), newComment)
      .then(() => console.log("데이터 전송 성공"))
      .catch((error) => {
        console.log("에러 발생!", error);
      });

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
  }, [authService.currentUser?.uid]);

  // User Display Name을 result로 업데이트
  useEffect(() => {
    const updatUserNickname = async () => {
      if (authService.currentUser !== null) {
        await updateProfile(authService.currentUser, {
          displayName: result,
        })
          .then(() => {
            console.log("프로필 업데이트 성공!");
          })
          .catch((error) => {
            console.log("error발생!", error);
          });
      }
    };

    updatUserNickname();

    console.log("nickname", authService.currentUser?.displayName);
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
      {isAlertModalOpen ? (
        <AlertModal
          isAlertModalOpen={isAlertModalOpen}
          setIsAlertModalOpen={setIsAlertModalOpen}
        >
          내용을 입력하셔야합니다!
        </AlertModal>
      ) : null}
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
