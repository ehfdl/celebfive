import axios from "axios";
import { dbService } from "./firebase";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";

export interface EditParameterType {
  commentId: string;
  editObj: object;
}

export const getTest = async () => {
  const data = await axios.get(
    "https://drive.google.com/file/d/1VfcpyFxnSgjjIF8rm8Zc9COQ79RVQdkW/view?usp=sharing"
  );
  console.log(data);
};

export const getEventList = () => {
  const data2 = fetch(
    "https://drive.google.com/file/d/1VfcpyFxnSgjjIF8rm8Zc9COQ79RVQdkW/view?usp=sharing"
  )
    .then((res) => res.json())
    .catch((error) => console.log(error));

  console.log(data2);
};

export const deleteComment = async (commentId: string) => {
  await deleteDoc(doc(dbService, "comments", commentId));
};

export const editComment = async ({
  commentId,
  editObj,
}: EditParameterType) => {
  await updateDoc(doc(dbService, "comments", commentId), editObj);
};
