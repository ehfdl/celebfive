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
export type AlertModalType = {
  isAlertModalOpen: boolean; // 모달 열고 닫음
  isAlertModalOpen2: boolean;
  isEqualEdit: boolean; // false-> isNoEdit 평가 / true -> 변경 내용이 없습니다!
  isNoComment: boolean; // false-> 댓글 작성 완료! / true -> 댓글 내용을 입력하세요!
  isNoEidt: boolean; // false-> 댓글 수정 완료! / true -> 수정 내용을 입력하세요!
  setIsAlertModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsAlertModalOpen2: React.Dispatch<React.SetStateAction<boolean>>;
  setIsEqualEdit: React.Dispatch<React.SetStateAction<boolean>>;
  setIsNoComment: React.Dispatch<React.SetStateAction<boolean>>;
  setIsNoEdit: React.Dispatch<React.SetStateAction<boolean>>;
};

// 다른 2개의 부모 컴포넌트(CommentsList.tsx, Comment.tsx)에서 Alert Modal 사용하려니
// 자식인 Alert Modal에 두 컴포넌트에서 동일한 props를 내려줘야했다. (type 에러 때문에..)
// CommentsList.tsx는 Comment.tsx의 부모 컴포넌트이므로 CommentsList.tsx에서 필요한 state를 다 만들고
// Comment.tsx에 props로 내려서 state를 공유했다. 너무 비효율적이다.
export type AlertModalWithItemType = {
  item: CommentType;
  isAlertModalOpen: boolean;
  isAlertModalOpen2: boolean;
  isEqualEdit: boolean;
  isNoComment: boolean;
  isNoEidt: boolean;
  setIsAlertModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsAlertModalOpen2: React.Dispatch<React.SetStateAction<boolean>>;
  setIsEqualEdit: React.Dispatch<React.SetStateAction<boolean>>;
  setIsNoComment: React.Dispatch<React.SetStateAction<boolean>>;
  setIsNoEdit: React.Dispatch<React.SetStateAction<boolean>>;
};

const CommentsList = ({ result }: { result: string }) => {
  const [comments, setComments] = useState<CommentType[]>([]);
  const [inputComment, setInputComment] = useState("");
  const commentRef = useRef<HTMLTextAreaElement | null>(null);

  // 모달을 위한 state
  const [isAlertModalOpen, setIsAlertModalOpen] = useState(false);
  const [isNoComment, setIsNoComment] = useState(false);
  const [isEqualEdit, setIsEqualEdit] = useState(false);
  const [isNoEidt, setIsNoEdit] = useState(false);

  // Comment 컴포넌트에서 Alert Modal 오픈하는 state
  const [isAlertModalOpen2, setIsAlertModalOpen2] = useState(false);

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
      setIsNoComment(!isNoComment);
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

  // getComments가 일어날 때마다 user displayName을 result로 업데이트
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
  }, [getComments]);

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
          return (
            <Comment
              key={item.id}
              item={item}
              isAlertModalOpen={isAlertModalOpen}
              isAlertModalOpen2={isAlertModalOpen2}
              isEqualEdit={isEqualEdit}
              isNoComment={isNoComment}
              isNoEidt={isNoEidt}
              setIsAlertModalOpen={setIsAlertModalOpen}
              setIsAlertModalOpen2={setIsAlertModalOpen2}
              setIsEqualEdit={setIsEqualEdit}
              setIsNoComment={setIsNoComment}
              setIsNoEdit={setIsNoEdit}
            />
          );
        })}
      </div>
      {isAlertModalOpen ? (
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
          {isNoComment ? "내용을 입력하셔야합니다!" : "작성 완료!"}
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
  padding: 12px;
  border-radius: 0.7rem;
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: #fa5151;
  background-color: whitesmoke;
  border: none;
  gap: 10px;
  filter: drop-shadow(3px 3px 3px #c42c2c);
  cursor: pointer;
`;

const StyledTextArea = styled.textarea`
  resize: none;
  width: 100%;
  height: 5rem;
  border: none;
  border-radius: 3px;
  padding: 10px;
  margin-bottom: 1rem;
  filter: drop-shadow(3px 3px 3px #bd2727);
  @media ${(props) => props.theme.mobile} {
    margin-bottom: 0;
  }
`;

const StyledButtonDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  @media ${(props) => props.theme.mobile} {
    scale: 0.7;
  }
`;
